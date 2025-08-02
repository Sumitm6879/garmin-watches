import { useState, useCallback } from 'react';
import { PreLoader } from '../components/PreLoader';
import { HeroSection } from '../components/HeroSection';
import { ExploreSection } from '../components/ExploreSection';
import { WatchFocusSection } from '../components/WatchFocusSection';
import { SummitShowcase } from '../components/SummitShowcase';


import watch5 from '../assets/watch5.jpg';
import watch6 from '../assets/watch6.jpg';
import watch13 from '../assets/watch13.jpg';
import watch14 from '../assets/watch14.jpg';
import watch15 from '../assets/watch15.jpeg';
import watch16 from '../assets/watch16.jpg';
import watch17 from '../assets/watch17.jpg';
import watch18 from '../assets/watch18.jpg';
import watch19 from '../assets/watch19.jpg';
import watch20 from '../assets/watch20.jpg';
import watch21 from '../assets/watch21.jpg';
import watch22 from '../assets/watch22.jpg';

const watchesData = [
  {
    title: "Tactical Commander",
    edition: "MILITARY EDITION",
    imageSrc: watch5,
    imageAlt: "Tactical Commander Watch", 
    features: ["Night Vision", "Tactical GPS", "Encrypted Comms", "Solar Charging"]
  },
  {
    title: "Elite Chronograph",
    edition: "LUXURY EDITION",
    imageSrc: watch6,
    imageAlt: "Elite Chronograph Watch", 
    features: ["Swiss Movement", "Sapphire Crystal", "Titanium Build", "Perpetual Calendar"]
  },
  {
    title: "Elite Chronograph",
    edition: "LUXURY EDITION",
    imageSrc: watch13,
    imageAlt: "Elite Chronograph Watch", 
    features: ["Swiss Movement", "Sapphire Crystal", "Titanium Build", "Perpetual Calendar"]
  },
  {
    title: "Elite Chronograph",
    edition: "LUXURY EDITION",
    imageSrc: watch14,
    imageAlt: "Elite Chronograph Watch", 
    features: ["Swiss Movement", "Sapphire Crystal", "Titanium Build", "Perpetual Calendar"]
  },
  {
    title: "Elite Chronograph",
    edition: "LUXURY EDITION",
    imageSrc: watch15,
    imageAlt: "Elite Chronograph Watch", 
    features: ["Swiss Movement", "Sapphire Crystal", "Titanium Build", "Perpetual Calendar"]
  },
  {
    title: "Elite Chronograph",
    edition: "LUXURY EDITION",
    imageSrc: watch16,
    imageAlt: "Elite Chronograph Watch", 
    features: ["Swiss Movement", "Sapphire Crystal", "Titanium Build", "Perpetual Calendar"]
  },
  {
    title: "Elite Chronograph",
    edition: "LUXURY EDITION",
    imageSrc: watch17,
    imageAlt: "Elite Chronograph Watch", 
    features: ["Swiss Movement", "Sapphire Crystal", "Titanium Build", "Perpetual Calendar"]
  },
  {
    title: "Elite Chronograph",
    edition: "LUXURY EDITION",
    imageSrc: watch18,
    imageAlt: "Elite Chronograph Watch", 
    features: ["Swiss Movement", "Sapphire Crystal", "Titanium Build", "Perpetual Calendar"]
  },
  {
    title: "Elite Chronograph",
    edition: "LUXURY EDITION",
    imageSrc: watch19,
    imageAlt: "Elite Chronograph Watch", 
    features: ["Swiss Movement", "Sapphire Crystal", "Titanium Build", "Perpetual Calendar"]
  },
  {
    title: "Elite Chronograph",
    edition: "LUXURY EDITION",
    imageSrc: watch20,
    imageAlt: "Elite Chronograph Watch", 
    features: ["Swiss Movement", "Sapphire Crystal", "Titanium Build", "Perpetual Calendar"]
  },
  {
    title: "Elite Chronograph",
    edition: "LUXURY EDITION",
    imageSrc: watch21,
    imageAlt: "Elite Chronograph Watch", 
    features: ["Swiss Movement", "Sapphire Crystal", "Titanium Build", "Perpetual Calendar"]
  },
  {
    title: "Elite Chronograph",
    edition: "LUXURY EDITION",
    imageSrc: watch22,
    imageAlt: "Elite Chronograph Watch", 
    features: ["Swiss Movement", "Sapphire Crystal", "Titanium Build", "Perpetual Calendar"]
  },
];

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    console.log('Index: PreLoader completed, setting isLoading to false');
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <PreLoader onComplete={handlePreloaderComplete} />}

      <div className={`${isLoading ? 'hidden' : 'block'}`}>
        <HeroSection />
        <ExploreSection />

        {/* Replace the second section with carousel */}
        <WatchFocusSection watches={watchesData} />

        <SummitShowcase />
      </div>
    </>
  );
}
