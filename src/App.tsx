import { useState, useEffect } from 'react';
import { ExchangeCard } from './components/ExchangeCard';
import { Header } from './components/Header';
import { StatsBar } from './components/StatsBar';
import { SearchFilter } from './components/SearchFilter';
import { Footer } from './components/Footer';

export interface Exchange {
  id: string;
  name: string;
  country: string;
  yearEstablished: number;
  trustScore: number;
  tradingVolume24h: number;
  marketCap: number;
  logo: string;
  url: string;
  markets: number;
  coins: number;
}

const exchangesData: Exchange[] = [
  { id: 'binance', name: 'Binance', country: 'Cayman Islands', yearEstablished: 2017, trustScore: 10, tradingVolume24h: 18234567890, marketCap: 76500000000, logo: 'B', url: 'https://binance.com', markets: 1847, coins: 395 },
  { id: 'coinbase', name: 'Coinbase', country: 'United States', yearEstablished: 2012, trustScore: 10, tradingVolume24h: 2456789012, marketCap: 45200000000, logo: 'C', url: 'https://coinbase.com', markets: 754, coins: 263 },
  { id: 'kraken', name: 'Kraken', country: 'United States', yearEstablished: 2011, trustScore: 10, tradingVolume24h: 876543210, marketCap: 12800000000, logo: 'K', url: 'https://kraken.com', markets: 687, coins: 237 },
  { id: 'okx', name: 'OKX', country: 'Seychelles', yearEstablished: 2017, trustScore: 9, tradingVolume24h: 5678901234, marketCap: 28900000000, logo: 'O', url: 'https://okx.com', markets: 1234, coins: 341 },
  { id: 'bybit', name: 'Bybit', country: 'British Virgin Islands', yearEstablished: 2018, trustScore: 9, tradingVolume24h: 7890123456, marketCap: 31500000000, logo: 'BY', url: 'https://bybit.com', markets: 892, coins: 289 },
  { id: 'kucoin', name: 'KuCoin', country: 'Seychelles', yearEstablished: 2017, trustScore: 8, tradingVolume24h: 1234567890, marketCap: 8700000000, logo: 'KC', url: 'https://kucoin.com', markets: 1356, coins: 756 },
  { id: 'gateio', name: 'Gate.io', country: 'Cayman Islands', yearEstablished: 2013, trustScore: 8, tradingVolume24h: 2345678901, marketCap: 9800000000, logo: 'G', url: 'https://gate.io', markets: 2134, coins: 1723 },
  { id: 'bitfinex', name: 'Bitfinex', country: 'British Virgin Islands', yearEstablished: 2012, trustScore: 8, tradingVolume24h: 345678901, marketCap: 5600000000, logo: 'BF', url: 'https://bitfinex.com', markets: 456, coins: 187 },
  { id: 'huobi', name: 'HTX (Huobi)', country: 'Seychelles', yearEstablished: 2013, trustScore: 7, tradingVolume24h: 1567890123, marketCap: 11200000000, logo: 'H', url: 'https://htx.com', markets: 987, coins: 612 },
  { id: 'bitstamp', name: 'Bitstamp', country: 'Luxembourg', yearEstablished: 2011, trustScore: 9, tradingVolume24h: 234567890, marketCap: 3400000000, logo: 'BS', url: 'https://bitstamp.com', markets: 234, coins: 87 },
  { id: 'gemini', name: 'Gemini', country: 'United States', yearEstablished: 2014, trustScore: 9, tradingVolume24h: 156789012, marketCap: 4200000000, logo: 'GE', url: 'https://gemini.com', markets: 178, coins: 121 },
  { id: 'bitget', name: 'Bitget', country: 'Seychelles', yearEstablished: 2018, trustScore: 8, tradingVolume24h: 4567890123, marketCap: 19800000000, logo: 'BG', url: 'https://bitget.com', markets: 834, coins: 578 },
  { id: 'mexc', name: 'MEXC', country: 'Seychelles', yearEstablished: 2018, trustScore: 7, tradingVolume24h: 1890123456, marketCap: 7600000000, logo: 'MX', url: 'https://mexc.com', markets: 2456, coins: 1834 },
  { id: 'crypto.com', name: 'Crypto.com', country: 'Singapore', yearEstablished: 2016, trustScore: 9, tradingVolume24h: 890123456, marketCap: 15400000000, logo: 'CR', url: 'https://crypto.com', markets: 567, coins: 312 },
  { id: 'bithumb', name: 'Bithumb', country: 'South Korea', yearEstablished: 2014, trustScore: 8, tradingVolume24h: 567890123, marketCap: 6800000000, logo: 'BT', url: 'https://bithumb.com', markets: 234, coins: 187 },
  { id: 'upbit', name: 'Upbit', country: 'South Korea', yearEstablished: 2017, trustScore: 8, tradingVolume24h: 789012345, marketCap: 8900000000, logo: 'UP', url: 'https://upbit.com', markets: 312, coins: 198 },
  { id: 'bitmart', name: 'BitMart', country: 'Cayman Islands', yearEstablished: 2017, trustScore: 6, tradingVolume24h: 678901234, marketCap: 4500000000, logo: 'BM', url: 'https://bitmart.com', markets: 1234, coins: 987 },
  { id: 'lbank', name: 'LBank', country: 'British Virgin Islands', yearEstablished: 2015, trustScore: 6, tradingVolume24h: 456789012, marketCap: 3200000000, logo: 'LB', url: 'https://lbank.com', markets: 876, coins: 654 },
  { id: 'poloniex', name: 'Poloniex', country: 'Seychelles', yearEstablished: 2014, trustScore: 5, tradingVolume24h: 123456789, marketCap: 1800000000, logo: 'PO', url: 'https://poloniex.com', markets: 456, coins: 312 },
  { id: 'bittrex', name: 'Bittrex', country: 'Liechtenstein', yearEstablished: 2014, trustScore: 7, tradingVolume24h: 89012345, marketCap: 1200000000, logo: 'BX', url: 'https://bittrex.com', markets: 345, coins: 234 },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'marketCap' | 'volume' | 'trust'>('marketCap');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredExchanges = exchangesData
    .filter(exchange =>
      exchange.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exchange.country.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'marketCap') return b.marketCap - a.marketCap;
      if (sortBy === 'volume') return b.tradingVolume24h - a.tradingVolume24h;
      return b.trustScore - a.trustScore;
    });

  const totalMarketCap = exchangesData.reduce((acc, ex) => acc + ex.marketCap, 0);
  const totalVolume = exchangesData.reduce((acc, ex) => acc + ex.tradingVolume24h, 0);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#00ff88] relative overflow-x-hidden">
      {/* Scan line overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
           style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,136,0.1) 2px, rgba(0,255,136,0.1) 4px)' }} />

      {/* Grid background */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.05]"
           style={{ backgroundImage: 'linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      {/* Glow corners */}
      <div className="pointer-events-none fixed top-0 left-0 w-96 h-96 opacity-20"
           style={{ background: 'radial-gradient(circle at top left, rgba(0,255,136,0.3), transparent 70%)' }} />
      <div className="pointer-events-none fixed bottom-0 right-0 w-96 h-96 opacity-20"
           style={{ background: 'radial-gradient(circle at bottom right, rgba(0,212,255,0.3), transparent 70%)' }} />

      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <Header />
        <StatsBar
          totalExchanges={exchangesData.length}
          totalMarketCap={totalMarketCap}
          totalVolume={totalVolume}
        />
        <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-12">
          <SearchFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {filteredExchanges.map((exchange, index) => (
              <ExchangeCard
                key={exchange.id}
                exchange={exchange}
                rank={exchangesData.sort((a, b) => b.marketCap - a.marketCap).findIndex(e => e.id === exchange.id) + 1}
                delay={index * 50}
              />
            ))}
          </div>

          {filteredExchanges.length === 0 && (
            <div className="text-center py-20">
              <div className="font-mono text-[#00ff88]/50 text-lg">
                {'>'} NO_RESULTS_FOUND
              </div>
              <div className="font-mono text-[#00ff88]/30 text-sm mt-2">
                Try adjusting your search parameters
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
