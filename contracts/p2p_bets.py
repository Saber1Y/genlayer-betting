# { "Depends": "py-genlayer:test" }

import json
from dataclasses import dataclass
from genlayer import *


@allow_storage
@dataclass
class Bet:
    id: str
    creator: Address
    question: str
    outcomes: DynArray[str]
    deadline: u256
    stake: u256
    accepted: bool
    acceptor: Address
    acceptor_outcome: str
    resolved: bool
    winner: Address


class P2PBets(gl.Contract):
    bets: TreeMap[str, Bet]
    bet_ids: DynArray[str]

    def __init__(self):
        self.bets = TreeMap()
        self.bet_ids = DynArray()

    def _resolve_outcome(self, bet: Bet) -> str:
        def get_result() -> str:
            task = f"""
Question: {bet.question}

The two outcomes are: {bet.outcomes}

Analyze and determine which outcome is correct based on real-world information.
Respond ONLY with JSON in this exact format, nothing else:
{{
    "winning_outcome": "exact outcome string from the list",
    "reasoning": "brief explanation (1-2 sentences)"
}}
"""
            result = gl.nondet.exec_prompt(task, response_format="json")
            return json.dumps(result, sort_keys=True)

        result_json = json.loads(gl.eq_principle.strict_eq(get_result))
        return result_json["winning_outcome"]

    @gl.public.write
    def create_bet(
        self, question: str, outcomes: list[str], deadline: u256, stake: u256
    ) -> str:
        if len(outcomes) < 2:
            raise gl.vm.UserError("Need at least 2 outcomes")

        if stake <= 0:
            raise gl.vm.UserError("Stake must be positive")

        if deadline <= block.timestamp:
            raise gl.vm.UserError("Deadline must be in the future")

        sender = gl.message.sender_address

        bet_id = f"{block.timestamp}_{sender.hex()}_{len(self.bet_ids)}"

        bet = Bet(
            id=bet_id,
            creator=sender,
            question=question,
            outcomes=DynArray(outcomes),
            deadline=deadline,
            stake=stake,
            accepted=False,
            acceptor=Address(),
            acceptor_outcome="",
            resolved=False,
            winner=Address(),
        )

        self.bets[bet_id] = bet
        self.bet_ids.append(bet_id)

        return bet_id

    @gl.public.write
    def accept_bet(self, bet_id: str, chosen_outcome: str) -> None:
        if bet_id not in self.bets:
            raise gl.vm.UserError("Bet not found")

        bet = self.bets[bet_id]

        if bet.accepted:
            raise gl.vm.UserError("Bet already accepted")

        if bet.creator == gl.message.sender_address:
            raise gl.vm.UserError("Cannot bet against yourself")

        if chosen_outcome not in bet.outcomes:
            raise gl.vm.UserError("Invalid outcome")

        if block.timestamp >= bet.deadline:
            raise gl.vm.UserError("Bet deadline passed")

        bet.accepted = True
        bet.acceptor = gl.message.sender_address
        bet.acceptor_outcome = chosen_outcome

    @gl.public.write
    def resolve_bet(self, bet_id: str) -> None:
        if bet_id not in self.bets:
            raise gl.vm.UserError("Bet not found")

        bet = self.bets[bet_id]

        if not bet.accepted:
            raise gl.vm.UserError("Bet not yet accepted")

        if bet.resolved:
            raise gl.vm.UserError("Bet already resolved")

        if block.timestamp < bet.deadline:
            raise gl.vm.UserError("Deadline not passed yet")

        winning_outcome = self._resolve_outcome(bet)

        if winning_outcome == bet.outcomes[0]:
            bet.winner = bet.creator
        else:
            bet.winner = bet.acceptor

        bet.resolved = True

    @gl.public.view
    def get_bet(self, bet_id: str) -> dict:
        if bet_id not in self.bets:
            return {}

        bet = self.bets[bet_id]
        return {
            "id": bet.id,
            "creator": bet.creator.hex(),
            "question": bet.question,
            "outcomes": list(bet.outcomes),
            "deadline": bet.deadline,
            "stake": bet.stake,
            "accepted": bet.accepted,
            "acceptor": bet.acceptor.hex() if bet.acceptor != Address() else "",
            "acceptor_outcome": bet.acceptor_outcome,
            "resolved": bet.resolved,
            "winner": bet.winner.hex() if bet.winner != Address() else "",
        }

    @gl.public.view
    def get_all_bets(self) -> list[dict]:
        result = []
        for bet_id in self.bet_ids:
            result.append(self.get_bet(bet_id))
        return result

    @gl.public.view
    def get_active_bets(self) -> list[dict]:
        result = []
        for bet_id in self.bet_ids:
            bet = self.bets[bet_id]
            if not bet.accepted and block.timestamp < bet.deadline:
                result.append(self.get_bet(bet_id))
        return result
