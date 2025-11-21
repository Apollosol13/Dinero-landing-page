import { useEffect, useRef } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StockTickerProps {
  direction?: 'left' | 'right';
  speed?: number;
}

const stockData = [
  { symbol: 'AAPL', price: '182.45', change: '+2.34', positive: true },
  { symbol: 'TSLA', price: '242.18', change: '-1.52', positive: false },
  { symbol: 'NVDA', price: '495.82', change: '+8.76', positive: true },
  { symbol: 'MSFT', price: '378.91', change: '+3.21', positive: true },
  { symbol: 'GOOGL', price: '141.23', change: '-0.89', positive: false },
  { symbol: 'AMZN', price: '152.67', change: '+2.11', positive: true },
  { symbol: 'META', price: '356.44', change: '+5.67', positive: true },
  { symbol: 'AMD', price: '118.93', change: '-2.34', positive: false },
  { symbol: 'NFLX', price: '489.21', change: '+4.55', positive: true },
  { symbol: 'SPY', price: '458.32', change: '+1.22', positive: true },
];

const StockTicker = ({ direction = 'left', speed = 40 }: StockTickerProps) => {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    const animation = ticker.animate(
      [
        { transform: direction === 'left' ? 'translateX(0%)' : 'translateX(-50%)' },
        { transform: direction === 'left' ? 'translateX(-50%)' : 'translateX(0%)' }
      ],
      {
        duration: speed * 1000,
        iterations: Infinity,
        easing: 'linear'
      }
    );

    return () => animation.cancel();
  }, [direction, speed]);

  const doubledStocks = [...stockData, ...stockData];

  return (
    <div className="overflow-hidden whitespace-nowrap py-3 bg-gradient-to-r from-transparent via-blue-900/10 to-transparent">
      <div ref={tickerRef} className="inline-flex gap-8">
        {doubledStocks.map((stock, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-3 px-6 py-2 bg-[#0d1321]/80 border border-blue-500/20 rounded-lg backdrop-blur-sm hover:border-blue-400/50 hover:bg-[#0d1321] transition-all duration-300 group"
          >
            <span className="text-blue-400 font-bold text-sm tracking-wider group-hover:text-blue-300">
              {stock.symbol}
            </span>
            <span className="text-white font-mono text-sm">
              ${stock.price}
            </span>
            <div className={`flex items-center gap-1 ${stock.positive ? 'text-green-400' : 'text-red-400'}`}>
              {stock.positive ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              <span className="text-xs font-mono">{stock.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockTicker;
