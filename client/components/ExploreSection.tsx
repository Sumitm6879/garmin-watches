import { useState, useRef, MouseEvent } from 'react';
import watch2 from '../assets/watch2.jpg';
import watch3 from '../assets/watch3.jpg';
import watch4 from '../assets/watch4.jpg';
import watch5 from '../assets/watch5.jpg';
import watch6 from '../assets/watch6.jpg';

interface ImageData {
  nightSrc: string;
  daySrc: string;
  alt: string;
}

export function ExploreSection() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [isHoveringText, setIsHoveringText] = useState(false);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const images: ImageData[] = [
    {
      nightSrc: watch2,
      daySrc: watch2,
      alt: 'A description of your first image'
    },
    {
      nightSrc: watch4,
      daySrc: watch4,
      alt: 'A description of your second image'
    },
    {
      nightSrc: watch3,
      daySrc: watch3,
      alt: 'A description of your third image'
    }
  ];

  const handleMouseMove = (e: MouseEvent, index: number) => {
    const container = containerRefs.current[index];
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const fluidMask = container.querySelector('.fluid-reveal-mask') as HTMLElement;
    if (fluidMask) {
      fluidMask.style.setProperty('--mouse-x', `${x}%`);
      fluidMask.style.setProperty('--mouse-y', `${y}%`);
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-white">
            Explore Your World,
            <br />
            <span
              className="group cursor-pointer transition-all duration-300 hover:scale-110 inline-block"
              onMouseEnter={() => setIsHoveringText(true)}
              onMouseLeave={() => setIsHoveringText(false)}
            >
              <span className={`transition-colors duration-300 ${isHoveringText ? 'text-white' : 'text-accent'}`}>
                Day or Night
              </span>
              <span className={`transition-colors duration-300 ${isHoveringText ? 'text-accent' : 'text-white'}`}>
                .
              </span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              ref={el => containerRefs.current[index] = el}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-none transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-accent/25"
              onMouseEnter={() => setActiveImage(index)}
              onMouseLeave={() => setActiveImage(null)}
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              {/* Dark base image (always visible) */}
              <img
                src={image.nightSrc}
                alt={image.alt}
                className="w-full h-full object-cover brightness-[0.3] contrast-125"
              />

              {/* Fluid reveal mask with bright image */}
              <div
                className="fluid-reveal-mask absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${image.daySrc})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  clipPath: `polygon(
                  calc(var(--mouse-x, 50%) - 20%) calc(var(--mouse-y, 50%) - 25%),
                  calc(var(--mouse-x, 50%) - 10%) calc(var(--mouse-y, 50%) - 35%),
                  calc(var(--mouse-x, 50%) + 5%) calc(var(--mouse-y, 50%) - 32%),
                  calc(var(--mouse-x, 50%) + 18%) calc(var(--mouse-y, 50%) - 20%),
                  calc(var(--mouse-x, 50%) + 25%) calc(var(--mouse-y, 50%) - 5%),
                  calc(var(--mouse-x, 50%) + 22%) calc(var(--mouse-y, 50%) + 10%),
                  calc(var(--mouse-x, 50%) + 10%) calc(var(--mouse-y, 50%) + 22%),
                  calc(var(--mouse-x, 50%) - 5%) calc(var(--mouse-y, 50%) + 28%),
                  calc(var(--mouse-x, 50%) - 15%) calc(var(--mouse-y, 50%) + 20%),
                  calc(var(--mouse-x, 50%) - 25%) calc(var(--mouse-y, 50%) + 5%),
                  calc(var(--mouse-x, 50%) - 22%) calc(var(--mouse-y, 50%) - 10%),
                  calc(var(--mouse-x, 50%) - 20%) calc(var(--mouse-y, 50%) - 25%)
                  )`,
                  transition: 'clip-path 0.1s ease-out, opacity 0.3s ease'
                }}
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}