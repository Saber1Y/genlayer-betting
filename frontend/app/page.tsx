"use client";

import { Navbar } from "@/components/Navbar";
import { BetsTable } from "@/components/BetsTable";
import { Leaderboard } from "@/components/Leaderboard";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content - Padding to account for fixed navbar */}
      <main className="flex-grow pt-20 pb-12 px-4 md:px-6 lg:px-8">
        
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="relative text-center mb-12 animate-fade-in">
            {/* Grid Background Effects */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px] -z-10" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fab6f5]/8 via-transparent to-transparent -z-10" />
            <div className="pointer-events-none absolute top-0 left-1/4 w-px h-48 bg-gradient-to-b from-[#fab6f5]/35 to-transparent -z-10" />
            <div className="pointer-events-none absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-[#fab6f5]/20 to-transparent -z-10" />
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Live on GenLayer Testnet
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              P2P <span className="text-accent">Betting</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Bet against anyone, on anything. 
              <br />
              AI resolves the outcome. No middleman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#create-bet"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Create a Bet
              </a>
              <a
                href="#active-bets"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/20 font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Browse Bets
              </a>
            </div>
          </div>

          {/* Stats Banner */}
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="text-center p-4 glass-card">
              <div className="text-2xl md:text-3xl font-bold text-accent">0</div>
              <div className="text-xs md:text-sm text-muted-foreground">Total Bets</div>
            </div>
            <div className="text-center p-4 glass-card">
              <div className="text-2xl md:text-3xl font-bold text-accent">0</div>
              <div className="text-xs md:text-sm text-muted-foreground">GEN Staked</div>
            </div>
            <div className="text-center p-4 glass-card">
              <div className="text-2xl md:text-3xl font-bold text-accent">0</div>
              <div className="text-xs md:text-sm text-muted-foreground">Active Users</div>
            </div>
          </div>

          {/* How it Works */}
          <div className="mb-12 glass-card p-6 md:p-8 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-center">How it Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto text-accent font-bold text-xl">
                  1
                </div>
                <div className="font-bold text-lg">Create a Bet</div>
                <p className="text-sm text-muted-foreground">
                  Set a question, outcomes (e.g., Yes/No), deadline, and stake your GEN tokens.
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto text-accent font-bold text-xl">
                  2
                </div>
                <div className="font-bold text-lg">Opponent Accepts</div>
                <p className="text-sm text-muted-foreground">
                  Someone sees your bet and matches the stake with their own prediction.
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto text-accent font-bold text-xl">
                  3
                </div>
                <div className="font-bold text-lg">AI Resolves</div>
                <p className="text-sm text-muted-foreground">
                  After the deadline, GenLayer AI fetches real data and determines the winner automatically.
                </p>
              </div>
            </div>
          </div>

          {/* Active Bets Section */}
          <div id="active-bets" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Active Bets</h2>
              <button className="text-sm text-accent hover:underline">
                View All
              </button>
            </div>
            <div className="glass-card p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <div className="text-lg font-medium mb-2">No active bets yet</div>
              <p className="text-muted-foreground mb-4">
                Be the first to create a bet!
              </p>
              <button className="px-6 py-2 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors">
                Create First Bet
              </button>
            </div>
          </div>

          {/* Why P2P Bets */}
          <div className="mb-12 glass-card p-6 md:p-8 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-center">Why P2P Bets?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="text-2xl">🤖</div>
                <div className="font-bold">AI Resolution</div>
                <p className="text-sm text-muted-foreground">
                  No manual verification needed. AI fetches real-world data and decides the winner.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🔗</div>
                <div className="font-bold">Trustless</div>
                <p className="text-sm text-muted-foreground">
                  Smart contract holds stakes. Winner gets paid automatically. No counterparty risk.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🌐</div>
                <div className="font-bold">Web3 Native</div>
                <p className="text-sm text-muted-foreground">
                  Built on GenLayer. Connect wallet, place bets, win - all on-chain.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">⏰</div>
                <div className="font-bold">Any Topic</div>
                <p className="text-sm text-muted-foreground">
                  Sports, crypto, politics, entertainment - bet on anything with a verifiable outcome.
                </p>
              </div>
            </div>
          </div>

          {/* Create Bet Section */}
          <div id="create-bet" className="glass-card p-6 md:p-8 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-center">Create a New Bet</h2>
            <div className="max-w-xl mx-auto space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Question</label>
                <input
                  type="text"
                  placeholder="Will BTC reach $100k by April 2025?"
                  className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Outcome 1</label>
                  <input
                    type="text"
                    placeholder="Yes"
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Outcome 2</label>
                  <input
                    type="text"
                    placeholder="No"
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Deadline</label>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Stake (GEN)</label>
                  <input
                    type="number"
                    placeholder="10"
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>
              </div>
              <button className="w-full py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                Create Bet (Connect Wallet First)
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">P2P Bets</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">GenLayer Bradbury Hackathon 2026</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a
                href="https://genlayer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                GenLayer
              </a>
              <a
                href="https://studio.genlayer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Studio
              </a>
              <a
                href="https://docs.genlayer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Docs
              </a>
              <a
                href="https://github.com/Saber1Y/genlayer-betting"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
