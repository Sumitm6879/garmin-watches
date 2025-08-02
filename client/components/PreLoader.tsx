import { useState, useEffect } from 'react';

interface PreLoaderProps {
  onComplete: () => void;
}

export function PreLoader({ onComplete }: PreLoaderProps) {
  const [count, setCount] = useState(0);
  const [fontIndex, setFontIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [visibleWords, setVisibleWords] = useState<number>(0);
  const [isWiping, setIsWiping] = useState(false);

  const fonts = [
    'font-inter', 'font-serif-alt', 'font-mono-alt', 'font-sans-alt',
    'font-roboto', 'font-open-sans', 'font-lato', 'font-pt-serif',
    'font-georgia', 'font-verdana', 'font-ubuntu', 'font-merriweather',
  ];

  // Counter animation
  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => {
        setCount(prevCount => prevCount + 1);
      }, 20);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setIsComplete(true);
      }, 500);
    }
  }, [count]);

  // Font cycling
  useEffect(() => {
    const fontTimer = setInterval(() => {
      setFontIndex(prev => (prev + 1) % fonts.length);
    }, 500);
    return () => clearInterval(fontTimer);
  }, []);

  // Text reveal animation
  useEffect(() => {
    const timers = [
      setTimeout(() => setVisibleWords(1), 500),
      setTimeout(() => setVisibleWords(2), 1000)
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleBeginAscent = () => {
    setIsWiping(true);
    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Main preloader content */}
      <div className={`fixed inset-0 bg-background flex flex-col items-center justify-center transition-opacity duration-300 ${isWiping ? 'opacity-0' : 'opacity-100'}`}>
        <div className="relative">
          <div className="text-sm font-medium text-muted-foreground mb-4 animate-fadeIn text-left">
            {count.toString().padStart(3, '0')}-100
          </div>
          <div className="text-center">
            <div className={`flex items-center justify-center gap-4 mb-4 transition-all duration-700 ease-out ${visibleWords >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-4xl md:text-6xl font-bold font-inter">ADVENTURE</span>
              <span className="text-4xl md:text-6xl font-bold font-inter">AWAITS</span>
            </div>
            <div className={`flex items-center justify-center gap-4 transition-all duration-700 ease-out ${visibleWords >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
              <span className={`text-4xl md:text-6xl font-bold ${visibleWords >= 2 ? fonts[fontIndex] : 'font-inter'}`}>
                YOU NOW
              </span>
            </div>
          </div>
        </div>

        {isComplete && (
          <div className="animate-[fadeInUp_1s_ease-out]">
            <button
              style={{ marginTop: 30 }}
              onClick={handleBeginAscent}
              className="border-2 border-white/80 hover:border-accent hover:text-accent px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              Begin the Ascent
            </button>
          </div>
        )}
      </div>

      {/* Organic wipe effect overlay */}
      {isWiping && (
        <div className="fixed inset-0 z-10 pointer-events-none">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <mask id="wipe-mask">
                <rect width="100" height="100" fill="white" />
                <path
                  d="M 0 45 Q 15 35, 30 40 T 60 35 Q 75 30, 100 40 L 100 55 Q 85 65, 70 60 T 40 65 Q 25 70, 0 60 Z"
                  fill="black"
                  className="animate-[wipe-left_1s_ease-in-out_forwards]"
                />
                <path
                  d="M 100 55 Q 85 45, 70 50 T 40 45 Q 25 40, 0 50 L 0 65 Q 15 75, 30 70 T 60 75 Q 75 80, 100 70 Z"
                  fill="black"
                  className="animate-[wipe-right_1s_ease-in-out_forwards]"
                />
              </mask>
            </defs>
            <rect
              width="100"
              height="100"
              fill="hsl(25, 95%, 53%)"
              mask="url(#wipe-mask)"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
