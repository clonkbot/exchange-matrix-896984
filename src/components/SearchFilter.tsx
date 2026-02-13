interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortBy: 'marketCap' | 'volume' | 'trust';
  setSortBy: (sort: 'marketCap' | 'volume' | 'trust') => void;
}

export function SearchFilter({ searchTerm, setSearchTerm, sortBy, setSortBy }: SearchFilterProps) {
  return (
    <div className="py-4 md:py-6 mb-4 md:mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-[#00ff88]/50 text-sm">
            {'>'}
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="SEARCH_EXCHANGE..."
            className="w-full bg-[#0a0a0a] border border-[#00ff88]/30 px-8 py-3 font-mono text-sm text-[#00ff88] placeholder-[#00ff88]/30 focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[#00ff88]/30 text-xs hidden sm:block">
            [ENTER]
          </div>
        </div>

        {/* Sort Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setSortBy('marketCap')}
            className={`px-3 md:px-4 py-3 font-mono text-xs md:text-sm border transition-all min-w-[80px] md:min-w-[100px] ${
              sortBy === 'marketCap'
                ? 'border-[#00ff88] bg-[#00ff88]/10 text-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.3)]'
                : 'border-[#00ff88]/20 text-[#00ff88]/50 hover:border-[#00ff88]/50 hover:text-[#00ff88]/80'
            }`}
          >
            MKT_CAP
          </button>
          <button
            onClick={() => setSortBy('volume')}
            className={`px-3 md:px-4 py-3 font-mono text-xs md:text-sm border transition-all min-w-[80px] md:min-w-[100px] ${
              sortBy === 'volume'
                ? 'border-[#00d4ff] bg-[#00d4ff]/10 text-[#00d4ff] shadow-[0_0_15px_rgba(0,212,255,0.3)]'
                : 'border-[#00d4ff]/20 text-[#00d4ff]/50 hover:border-[#00d4ff]/50 hover:text-[#00d4ff]/80'
            }`}
          >
            VOLUME
          </button>
          <button
            onClick={() => setSortBy('trust')}
            className={`px-3 md:px-4 py-3 font-mono text-xs md:text-sm border transition-all min-w-[80px] md:min-w-[100px] ${
              sortBy === 'trust'
                ? 'border-[#ffaa00] bg-[#ffaa00]/10 text-[#ffaa00] shadow-[0_0_15px_rgba(255,170,0,0.3)]'
                : 'border-[#ffaa00]/20 text-[#ffaa00]/50 hover:border-[#ffaa00]/50 hover:text-[#ffaa00]/80'
            }`}
          >
            TRUST
          </button>
        </div>
      </div>

      {/* Command line style filter status */}
      <div className="font-mono text-[10px] md:text-xs text-[#00ff88]/30 mt-3">
        {'>'} FILTER_STATUS: {searchTerm ? `QUERY="${searchTerm.toUpperCase()}"` : 'ALL'} | SORT_BY: {sortBy.toUpperCase()}
      </div>
    </div>
  );
}
