import { useState, useEffect } from 'react';

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  // This single effect will trigger all animations.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 200); // A short delay to ensure the component is mounted.
    return () => clearTimeout(timer);
  }, []); // Runs only once.

  return (
    // The whole section fades in when isMounted becomes true.
    <section className={`relative h-screen flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
      
      <div className="absolute inset-0 z-0">
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 scale-125"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/hero_banner.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 text-center text-white px-4 max-w-4xl">
        <div className="mb-8">
          
          {/* --- ANIMATION LOGIC UPDATED HERE --- */}
          {/* Each line now animates based on 'isMounted' and has its own CSS delay class. */}
          
          {/* Line 1 (Short delay) */}
          <div className={`transition-all duration-700 ease-out mb-2 delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-inter">
              Engineered for the moments
            </h1>
          </div>

          {/* Line 2 (Medium delay) */}
          <div className={`transition-all duration-700 ease-out delay-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-inter">
              that define{' '}
              <span
                className="relative inline-block cursor-pointer group transition-all duration-300 hover:scale-110"
                style={{
                  textShadow: '0 0 20px rgba(255, 107, 53, 0.3)'
                }}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-accent">
                  you
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
              </span>
              .
            </h1>
          </div>
        </div>

        {/* Subheading (Longer delay) */}
        <div className={`transition-all duration-700 ease-out mb-12 delay-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-inter">
            Introducing the Fenix Summit Edition.
          </p>
        </div>
      </div>
    </section>
  );
}
