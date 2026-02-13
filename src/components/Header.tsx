import { useState, useEffect } from 'react';

export function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="border-b border-[#00ff88]/20 bg-[#0a0a0a]/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            {/* Animated logo */}
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#00ff88] rotate-45 flex items-center justify-center animate-pulse">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#00ff88]/20 -rotate-45" />
              </div>
              <div className="absolute inset-0 w-10 h-10 md:w-12 md:h-12 border border-[#00d4ff]/30 rotate-45 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <div>
              <h1 className="font-orbitron text-xl md:text-2xl lg:text-3xl font-bold tracking-wider">
                <span className="text-[#00ff88]">EXCHANGE</span>
                <span className="text-[#00d4ff]">::</span>
                <span className="text-white/90">MATRIX</span>
              </h1>
              <div className="font-mono text-[10px] md:text-xs text-[#00ff88]/50 tracking-widest">
                GLOBAL CRYPTO EXCHANGE MONITOR v2.4.7
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            {/* Status indicators */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse shadow-[0_0_10px_#00ff88]" />
              <span className="font-mono text-[10px] md:text-xs text-[#00ff88]/70">LIVE</span>
            </div>

            {/* Time display */}
            <div className="font-mono text-xs md:text-sm text-[#00d4ff] bg-[#00d4ff]/5 px-2 md:px-3 py-1 md:py-1.5 border border-[#00d4ff]/20">
              <span className="text-[#00d4ff]/50 hidden sm:inline">UTC </span>
              {time.toUTCString().slice(17, 25)}
            </div>
          </div>
        </div>
      </div>

      {/* Animated bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent animate-pulse" />
    </header>
  );
}
