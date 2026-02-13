interface StatsBarProps {
  totalExchanges: number;
  totalMarketCap: number;
  totalVolume: number;
}

export function StatsBar({ totalExchanges, totalMarketCap, totalVolume }: StatsBarProps) {
  const formatCurrency = (num: number) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    return `$${num.toLocaleString()}`;
  };

  return (
    <div className="border-b border-[#00ff88]/10 bg-[#0a0a0a]/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {/* Total Exchanges */}
          <div className="group relative p-3 md:p-4 border border-[#00ff88]/20 bg-[#00ff88]/[0.02] hover:bg-[#00ff88]/[0.05] transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]" />

            <div className="font-mono text-[10px] md:text-xs text-[#00ff88]/50 mb-1">MONITORED_EXCHANGES</div>
            <div className="font-orbitron text-2xl md:text-3xl font-bold text-[#00ff88] group-hover:text-shadow-glow transition-all">
              {totalExchanges}
            </div>
            <div className="font-mono text-[10px] text-[#00ff88]/30 mt-1">ACTIVE PLATFORMS</div>
          </div>

          {/* Total Market Cap */}
          <div className="group relative p-3 md:p-4 border border-[#00d4ff]/20 bg-[#00d4ff]/[0.02] hover:bg-[#00d4ff]/[0.05] transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00d4ff]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00d4ff]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00d4ff]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00d4ff]" />

            <div className="font-mono text-[10px] md:text-xs text-[#00d4ff]/50 mb-1">TOTAL_MARKET_CAP</div>
            <div className="font-orbitron text-2xl md:text-3xl font-bold text-[#00d4ff] group-hover:text-shadow-glow-cyan transition-all">
              {formatCurrency(totalMarketCap)}
            </div>
            <div className="font-mono text-[10px] text-[#00d4ff]/30 mt-1">COMBINED VALUATION</div>
          </div>

          {/* Total Volume */}
          <div className="group relative p-3 md:p-4 border border-[#ffaa00]/20 bg-[#ffaa00]/[0.02] hover:bg-[#ffaa00]/[0.05] transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#ffaa00]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#ffaa00]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#ffaa00]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#ffaa00]" />

            <div className="font-mono text-[10px] md:text-xs text-[#ffaa00]/50 mb-1">24H_TRADING_VOLUME</div>
            <div className="font-orbitron text-2xl md:text-3xl font-bold text-[#ffaa00] group-hover:text-shadow-glow-amber transition-all">
              {formatCurrency(totalVolume)}
            </div>
            <div className="font-mono text-[10px] text-[#ffaa00]/30 mt-1">GLOBAL FLOW</div>
          </div>
        </div>
      </div>
    </div>
  );
}
