import { useState, useEffect } from 'react';
import type { Exchange } from '../App';

interface ExchangeCardProps {
  exchange: Exchange;
  rank: number;
  delay: number;
}

export function ExchangeCard({ exchange, rank, delay }: ExchangeCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const formatCurrency = (num: number) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    return `$${num.toLocaleString()}`;
  };

  const getTrustColor = (score: number) => {
    if (score >= 9) return '#00ff88';
    if (score >= 7) return '#00d4ff';
    if (score >= 5) return '#ffaa00';
    return '#ff4444';
  };

  const getRankBadge = (r: number) => {
    if (r === 1) return { bg: 'bg-[#ffd700]/20', border: 'border-[#ffd700]', text: 'text-[#ffd700]', glow: 'shadow-[0_0_20px_rgba(255,215,0,0.3)]' };
    if (r === 2) return { bg: 'bg-[#c0c0c0]/20', border: 'border-[#c0c0c0]', text: 'text-[#c0c0c0]', glow: 'shadow-[0_0_15px_rgba(192,192,192,0.2)]' };
    if (r === 3) return { bg: 'bg-[#cd7f32]/20', border: 'border-[#cd7f32]', text: 'text-[#cd7f32]', glow: 'shadow-[0_0_15px_rgba(205,127,50,0.2)]' };
    return { bg: 'bg-[#00ff88]/5', border: 'border-[#00ff88]/30', text: 'text-[#00ff88]/60', glow: '' };
  };

  const rankStyle = getRankBadge(rank);

  return (
    <div
      className={`relative group transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main card */}
      <div className={`relative border bg-[#0a0a0a]/80 backdrop-blur-sm p-4 md:p-5 transition-all duration-300 ${
        isHovered
          ? 'border-[#00ff88]/60 shadow-[0_0_30px_rgba(0,255,136,0.15)]'
          : 'border-[#00ff88]/20'
      }`}>
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00ff88] transition-all duration-300 group-hover:w-5 group-hover:h-5" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00ff88] transition-all duration-300 group-hover:w-5 group-hover:h-5" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00ff88] transition-all duration-300 group-hover:w-5 group-hover:h-5" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00ff88] transition-all duration-300 group-hover:w-5 group-hover:h-5" />

        {/* Rank badge */}
        <div className={`absolute -top-2 -right-2 md:-top-3 md:-right-3 w-8 h-8 md:w-10 md:h-10 ${rankStyle.bg} ${rankStyle.border} border flex items-center justify-center font-orbitron font-bold text-sm md:text-base ${rankStyle.text} ${rankStyle.glow}`}>
          #{rank}
        </div>

        {/* Header */}
        <div className="flex items-start gap-3 md:gap-4 mb-4">
          {/* Logo placeholder */}
          <div className="w-10 h-10 md:w-12 md:h-12 border border-[#00ff88]/40 bg-[#00ff88]/5 flex items-center justify-center font-orbitron font-bold text-base md:text-lg text-[#00ff88] shrink-0">
            {exchange.logo}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-orbitron text-base md:text-lg font-bold text-white group-hover:text-[#00ff88] transition-colors truncate">
              {exchange.name}
            </h3>
            <div className="font-mono text-[10px] md:text-xs text-[#00ff88]/50 truncate">
              {exchange.country} • Est. {exchange.yearEstablished}
            </div>
          </div>
        </div>

        {/* Market Cap - Primary stat */}
        <div className="mb-4 p-2 md:p-3 bg-[#00d4ff]/5 border border-[#00d4ff]/20">
          <div className="font-mono text-[10px] text-[#00d4ff]/50 mb-1">MARKET_CAPITALIZATION</div>
          <div className="font-orbitron text-xl md:text-2xl font-bold text-[#00d4ff]">
            {formatCurrency(exchange.marketCap)}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4">
          <div className="p-2 bg-[#00ff88]/5 border border-[#00ff88]/10">
            <div className="font-mono text-[9px] md:text-[10px] text-[#00ff88]/40">24H_VOLUME</div>
            <div className="font-mono text-xs md:text-sm text-[#00ff88]">{formatCurrency(exchange.tradingVolume24h)}</div>
          </div>
          <div className="p-2 bg-[#ffaa00]/5 border border-[#ffaa00]/10">
            <div className="font-mono text-[9px] md:text-[10px] text-[#ffaa00]/40">TRUST_SCORE</div>
            <div className="font-mono text-xs md:text-sm flex items-center gap-1" style={{ color: getTrustColor(exchange.trustScore) }}>
              {exchange.trustScore}/10
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse" style={{ backgroundColor: getTrustColor(exchange.trustScore) }} />
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="flex justify-between items-center pt-3 border-t border-[#00ff88]/10">
          <div className="font-mono text-[9px] md:text-[10px] text-[#00ff88]/40">
            <span className="text-[#00ff88]/60">{exchange.markets}</span> MARKETS • <span className="text-[#00ff88]/60">{exchange.coins}</span> COINS
          </div>
          <a
            href={exchange.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] md:text-xs text-[#00d4ff]/60 hover:text-[#00d4ff] transition-colors px-2 py-1 border border-[#00d4ff]/20 hover:border-[#00d4ff]/60 hover:bg-[#00d4ff]/10"
          >
            CONNECT →
          </a>
        </div>

        {/* Animated scan line on hover */}
        {isHovered && (
          <div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent animate-scan-line"
            style={{ top: '50%' }}
          />
        )}
      </div>
    </div>
  );
}
