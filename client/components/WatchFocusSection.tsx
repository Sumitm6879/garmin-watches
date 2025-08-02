import { useEffect, useRef } from 'react';

interface WatchData {
  title: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  edition: string;
}

<<<<<<< Updated upstream
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
=======
interface WatchFocusSectionProps {
  watches: WatchData[];
}
>>>>>>> Stashed changes

export function WatchFocusSection({ watches }: WatchFocusSectionProps) {
  const carouselRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-background via-background/95 to-secondary/20">
      {/* Lighter animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 via-transparent to-gray-700/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600/10 to-transparent animate-pulse" />
      </div>

<<<<<<< Updated upstream
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
=======
      {/* Progressive Text Build - FIXED SINGLE LINE */}
      <div className="absolute top-20 left-4 z-20">
        <div className="max-w-6xl">
          <div className="text-left">
            {/* Progressive text stages - FIXED WRAPPING */}
            <div className="space-y-2">
              {textStages.map((text, index) => (
                <div
                  key={index}
                  className={`font-bold tracking-tight drop-shadow-2xl leading-tight whitespace-nowrap ${
                    index === 0 
                      ? 'text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] text-white' // First line "C" - WHITE
                      : index === textStages.length - 1
                      ? 'text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-accent' // Last line - SMALLER but SINGLE LINE
                      : 'text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white/60' // Middle lines - faded white
                  }`}
                >
                  {text}
                </div>
              ))}
>>>>>>> Stashed changes
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
