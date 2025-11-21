import { useEffect, useRef, useState } from 'react';
import { Download, TrendingUp, Zap, BarChart3 } from 'lucide-react';
import StockTicker from './components/StockTicker';
import PhoneMockup from './components/PhoneMockup';
import FloatingCandlesticks from './components/FloatingCandlesticks';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Floating candlesticks */}
      <FloatingCandlesticks />

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/10 via-transparent to-green-500/5 pointer-events-none"></div>

      {/* Mouse follower glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Stock ticker wall background */}
        <div className="absolute inset-0 flex flex-col justify-center gap-8 opacity-30">
          <StockTicker direction="left" speed={40} />
          <StockTicker direction="right" speed={35} />
          <StockTicker direction="left" speed={45} />
          <StockTicker direction="right" speed={38} />
          <StockTicker direction="left" speed={42} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full backdrop-blur-sm hover:bg-blue-500/20 transition-all duration-300 group">
            <Zap className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
            <span className="text-sm text-blue-300 font-medium">AI-Powered Analysis</span>
          </div>

          {/* Main headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              See The Chart Before
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,197,94,0.5)] animate-pulse-slow">
              You Enter The Trade.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Instant AI breakdowns of any stock. <span className="text-blue-400 font-semibold">Scan</span> → <span className="text-green-400 font-semibold">Analyze</span> → <span className="text-emerald-400 font-semibold">Decide</span>.
          </p>

          {/* CTA Button */}
          <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Download className="w-6 h-6 relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">Download the App</span>
          </button>

          {/* Stats bar */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-12 text-sm">
            <div className="flex items-center gap-2 group cursor-pointer">
              <TrendingUp className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
              <span className="text-gray-400">Real-time Data</span>
            </div>
            <div className="w-px h-4 bg-gray-700"></div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <BarChart3 className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-gray-400">AI Analysis</span>
            </div>
            <div className="w-px h-4 bg-gray-700"></div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <Zap className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="text-gray-400">Instant Insights</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-blue-400 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Glowing tickers around mockup */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-full max-w-4xl">
              <StockTicker direction="left" speed={25} />
            </div>
          </div>

          <PhoneMockup />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 px-6 border-t border-blue-900/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Ready to Trade Smarter?
          </h2>
          <p className="text-gray-400 text-lg">Join thousands of traders using AI-powered insights</p>
          <button className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]">
            <Download className="w-6 h-6 group-hover:animate-bounce" />
            <span>Download the App</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
