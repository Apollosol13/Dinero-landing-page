import { Scan, TrendingUp, BarChart3, Activity } from 'lucide-react';

const PhoneMockup = () => {
  return (
    <div className="relative z-10 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-white to-green-400 bg-clip-text text-transparent">
        Scan. Analyze. Trade.
      </h2>

      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-green-500/30 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-300"></div>

        {/* Phone frame */}
        <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-[2.5rem] p-3 shadow-2xl border border-gray-800">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>

          {/* Screen */}
          <div className="relative bg-black rounded-[2rem] overflow-hidden w-[340px] h-[680px]">
            {/* Status bar */}
            <div className="flex items-center justify-between px-8 pt-3 pb-2 text-xs text-gray-400">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-3 border border-gray-400 rounded-sm relative">
                  <div className="absolute inset-0.5 bg-gray-400 rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* App header */}
            <div className="px-6 py-4 border-b border-blue-900/30">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-xl">ChartAI</h3>
                  <p className="text-gray-400 text-xs">Market Analysis</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Scan className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Chart display */}
            <div className="px-6 py-6 space-y-4">
              {/* Stock info */}
              <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 border border-blue-500/30 rounded-2xl p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400 font-bold text-lg">NVDA</span>
                  <span className="text-green-400 text-sm flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    +5.2%
                  </span>
                </div>
                <div className="text-white text-3xl font-bold mb-1">$495.82</div>
                <div className="text-gray-400 text-sm">NVIDIA Corporation</div>
              </div>

              {/* Mock chart */}
              <div className="relative h-48 bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-500/20 rounded-2xl p-4 overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-around px-4 pb-4">
                  {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95].map((height, i) => (
                    <div
                      key={i}
                      className="w-6 bg-gradient-to-t from-green-500 to-blue-500 rounded-t-lg transition-all duration-300 hover:opacity-80"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-[#0d1321]/80 border border-green-500/30 rounded-2xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <Activity className="w-5 h-5" />
                  <span>AI Analysis</span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
                    <span className="text-gray-300">Strong bullish momentum detected</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5"></div>
                    <span className="text-gray-300">Volume above 20-day average</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
                    <span className="text-gray-300">Resistance at $500 level</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-gradient-to-r from-green-600 to-green-500 rounded-xl py-3 font-semibold text-sm hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-300">
                  Buy Signal
                </button>
                <button className="bg-blue-500/20 border border-blue-500/50 rounded-xl py-3 font-semibold text-sm hover:bg-blue-500/30 transition-all duration-300">
                  Save Chart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating indicators */}
        <div className="absolute -right-16 top-20 bg-green-500/20 border border-green-400/50 rounded-lg px-4 py-2 backdrop-blur-sm animate-float">
          <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
            <BarChart3 className="w-4 h-4" />
            <span>+18.5%</span>
          </div>
        </div>

        <div className="absolute -left-16 top-40 bg-blue-500/20 border border-blue-400/50 rounded-lg px-4 py-2 backdrop-blur-sm animate-float-delayed">
          <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
            <TrendingUp className="w-4 h-4" />
            <span>AI Score: 92</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
