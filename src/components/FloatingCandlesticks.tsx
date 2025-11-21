const FloatingCandlesticks = () => {
  const candlesticks = [
    { top: '10%', left: '15%', delay: 0, green: true },
    { top: '20%', right: '12%', delay: 2, green: false },
    { top: '60%', left: '8%', delay: 4, green: true },
    { top: '70%', right: '18%', delay: 1, green: true },
    { top: '40%', left: '5%', delay: 3, green: false },
    { top: '85%', right: '25%', delay: 5, green: true },
  ];

  return (
    <>
      {candlesticks.map((candle, index) => (
        <div
          key={index}
          className="absolute opacity-20 animate-float-slow"
          style={{
            top: candle.top,
            left: candle.left,
            right: candle.right,
            animationDelay: `${candle.delay}s`,
          }}
        >
          <div className="relative w-12 h-24">
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-0.5 h-full ${
                candle.green ? 'bg-green-500/30' : 'bg-red-500/30'
              }`}
            ></div>
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-8 h-16 top-1/2 -translate-y-1/2 ${
                candle.green
                  ? 'bg-gradient-to-b from-green-500/40 to-green-600/40 border-green-400/50'
                  : 'bg-gradient-to-b from-red-500/40 to-red-600/40 border-red-400/50'
              } border rounded`}
            ></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FloatingCandlesticks;
