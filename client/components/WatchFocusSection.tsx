import { useEffect, useRef, useState } from 'react';

interface WatchFocusSectionProps {
  title: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export function WatchFocusSection({
  title,
  features,
  imageSrc,
  imageAlt,
  reverse = false
}: WatchFocusSectionProps) {
  const [revealedText, setRevealedText] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);

  const fullText = "CONQUER YOUR SUMMIT";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Start progressive text reveal
            let currentText = '';
            for (let i = 0; i <= fullText.length; i++) {
              setTimeout(() => {
                currentText = fullText.slice(0, i);
                setRevealedText(currentText);
              }, i * 100);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>

            {/* Progressive Text Side */}
            <div className={`${reverse ? 'lg:col-start-2' : ''}`}>
              <div className="text-left">
                <h2 className="text-6xl lg:text-8xl font-black text-white leading-none mb-8 font-mono tracking-wider">
                  {revealedText}
                  <span className="animate-blink text-accent">|</span>
                </h2>
                <div className="text-sm text-white/60 uppercase tracking-[0.3em] mb-4">
                  Progressive Achievement Unlocked
                </div>
              </div>
            </div>

            {/* Watch Focus Side */}
            <div className={`relative ${reverse ? 'lg:col-start-1' : ''}`}>
              {/* 3D Watch Container */}
              <div className="relative perspective-1000">
                {/* Large Watch Display */}
                <div className="relative">
                  <div className="w-80 h-80 mx-auto relative transform hover:scale-105 transition-transform duration-500">
                    {/* Watch Shadow */}
                    <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent rounded-full blur-2xl transform translate-y-8 scale-110"></div>

                    {/* Watch Body */}
                    <div className="relative w-full h-full bg-gradient-to-br from-slate-700 via-slate-800 to-black rounded-full border-8 border-slate-600 shadow-2xl">
                      {/* Watch Screen */}
                      <div className="absolute inset-8 bg-black rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-blue-900 to-black flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-accent text-4xl font-bold mb-2">{title}</div>
                            <div className="text-white/80 text-sm">SUMMIT EDITION</div>
                          </div>
                        </div>
                      </div>

                      {/* Watch Crown */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-8 bg-slate-600 rounded-r-lg transform translate-x-2"></div>
                    </div>
                  </div>
                </div>

                {/* Feature Callouts */}
                <div className="absolute inset-0 pointer-events-none">
                  {features.map((feature, index) => {
                    const positions = [
                      { top: '10%', left: '-20%' },
                      { top: '60%', right: '-30%' },
                      { bottom: '20%', left: '-15%' },
                      { bottom: '10%', right: '-20%' }
                    ];

                    return (
                      <div
                        key={index}
                        className={`absolute`}
                        style={positions[index] || {}}
                      >
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white text-sm whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                            {feature}
                          </div>
                        </div>
                        {/* Connection Line */}
                        <div className="absolute top-1/2 left-1/2 w-16 h-px bg-gradient-to-r from-accent to-transparent"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
