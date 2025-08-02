import { useEffect, useRef, useState } from 'react';

interface WatchData {
  title: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  edition: string;
}

interface WatchFocusSectionProps {
  watches: WatchData[];
}

export function WatchFocusSection({ watches }: WatchFocusSectionProps) {
  const carouselRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Progressive text stages
  const textStages = [
    "C",
    "CO", 
    "CON",
    "CONQ",
    "CONQU",
    "CONQUE",
    "CONQUER",
    "CONQUER Y",
    "CONQUER YO",
    "CONQUER YOU",
    "CONQUER YOUR",
    "CONQUER YOUR S",
    "CONQUER YOUR SU",
    "CONQUER YOUR SUM",
    "CONQUER YOUR SUMM",
    "CONQUER YOUR SUMMI",
    "CONQUER YOUR SUMMIT"
  ];

  // Scroll-based collapse effect - ALL STAGES COLLAPSE EXCEPT FINAL
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate scroll progress (0 = top of section visible, 1 = bottom of section reached)
      let progress = 0;
      
      if (rect.top <= 0) {
        // Section is being scrolled past the top
        progress = Math.min(1, Math.abs(rect.top) / (sectionHeight * 0.4));
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Optimized distribution for larger datasets
  const createOptimalDistribution = (sourceArray: WatchData[], rowIndex: number) => {
    const totalImages = sourceArray.length;
    const targetLength = totalImages * 4;
    
    const basePattern: WatchData[] = [];
    const minSpacing = Math.max(3, Math.floor(totalImages / 3));
    
    for (let i = 0; i < targetLength; i++) {
      let candidateIndex = i % totalImages;
      let attempts = 0;
      
      while (attempts < totalImages) {
        const recentImages = basePattern.slice(Math.max(0, basePattern.length - minSpacing));
        const hasDuplicate = recentImages.some(img => img.imageSrc === sourceArray[candidateIndex].imageSrc);
        
        if (!hasDuplicate) {
          break;
        }
        
        candidateIndex = (candidateIndex + 1) % totalImages;
        attempts++;
      }
      
      basePattern.push(sourceArray[candidateIndex]);
    }
    
    const rowOffset = (rowIndex * Math.floor(totalImages / 5)) % totalImages;
    const rotatedPattern = [
      ...basePattern.slice(rowOffset),
      ...basePattern.slice(0, rowOffset)
    ];
    
    for (let i = 1; i < rotatedPattern.length; i++) {
      if (rotatedPattern[i].imageSrc === rotatedPattern[i - 1].imageSrc) {
        for (let j = i + 1; j < rotatedPattern.length; j++) {
          if (rotatedPattern[j].imageSrc !== rotatedPattern[i - 1].imageSrc && 
              rotatedPattern[j].imageSrc !== rotatedPattern[i + 1]?.imageSrc) {
            [rotatedPattern[i], rotatedPattern[j]] = [rotatedPattern[j], rotatedPattern[i]];
            break;
          }
        }
      }
    }
    
    return rotatedPattern;
  };

  // Smooth auto-scroll effect for each row
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    carouselRefs.current.forEach((carousel, rowIndex) => {
      if (carousel) {
        const interval = setInterval(() => {
          const scrollWidth = carousel.scrollWidth;
          const clientWidth = carousel.clientWidth;
          
          const scrollSpeeds = [0.7, 1.1, 0.5, 1.3, 0.8];
          const speed = scrollSpeeds[rowIndex] || 0.8;

          if (carousel.scrollLeft >= scrollWidth - clientWidth) {
            carousel.scrollTo({ left: 0, behavior: 'auto' });
          } else {
            carousel.scrollLeft += speed;
          }
        }, 16);

        intervals.push(interval);
      }
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  // Create row data with optimal distribution
  const createRowData = (rowIndex: number) => {
    const optimizedSequence = createOptimalDistribution(watches, rowIndex);
    
    return optimizedSequence.map((watch, index) => ({
      ...watch,
      id: `${rowIndex}-${index}-${watch.imageSrc.split('/').pop()}`
    }));
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-background via-background/95 to-secondary/20"
    >
      {/* Lighter animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 via-transparent to-gray-700/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600/10 to-transparent animate-pulse" />
      </div>

      {/* Progressive Text Build - ALL STAGES COLLAPSE TO FINAL SENTENCE */}
      <div className="absolute top-20 left-4 z-20">
        <div className="max-w-6xl">
          <div className="text-left">
            {/* Progressive text stages - COMPLETE COLLAPSE LOGIC */}
            <div className="space-y-2">
              {textStages.map((text, index) => {
                const totalStages = textStages.length;
                const isLastStage = index === totalStages - 1;
                
                // Calculate visibility based on scroll progress
                let opacity = 1;
                let slideOffset = 0;
                
                if (isLastStage) {
                  // Last stage (complete sentence) - fade in as scroll progresses
                  opacity = Math.min(1, scrollProgress * 2); // Fade in gradually
                } else {
                  // All other stages - fade out as scroll progresses
                  const fadeThreshold = (index / (totalStages - 1)) * 0.8;
                  if (scrollProgress > fadeThreshold) {
                    opacity = Math.max(0, 1 - ((scrollProgress - fadeThreshold) / 0.2));
                    slideOffset = -75 * ((scrollProgress - fadeThreshold) / 0.2);
                  }
                }
                
                return (
                  <div
                    key={index}
                    className={`font-bold tracking-tight drop-shadow-2xl leading-tight whitespace-nowrap transition-all duration-300 ease-out ${
                      index === 0 
                        ? 'text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] text-white' // First line "C" - WHITE
                        : isLastStage
                        ? 'text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-accent' // Last line - ORANGE
                        : 'text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white/60' // Middle lines - faded white
                    }`}
                    style={{
                      opacity: opacity,
                      transform: `translateX(${slideOffset}px) translateY(${slideOffset / 2}px)`,
                    }}
                  >
                    {text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 5 Rows of Carousels - Moderately dimmed */}
      <div className="relative space-y-8 opacity-60">
        {[0, 1, 2, 3, 4].map((rowIndex) => (
          <div key={rowIndex} className="relative">
            <div 
              ref={(el) => carouselRefs.current[rowIndex] = el}
              className="flex gap-6 overflow-x-hidden"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                scrollBehavior: 'auto'
              }}
            >
              {createRowData(rowIndex).map((watch, index) => (
                <div
                  key={`${watch.id}-${index}`}
                  className="flex-none w-80 relative"
                  style={{ pointerEvents: 'none' }}
                >
                  <div className="relative h-64">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img
                        src={watch.imageSrc}
                        alt={watch.imageAlt}
                        className="w-full h-full object-cover filter brightness-[0.6] contrast-90 saturate-75"
                        draggable={false}
                        style={{ userSelect: 'none' }}
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
