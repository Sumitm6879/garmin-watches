import { useState, useCallback } from 'react';
import { PreLoader } from '../components/PreLoader';
import { HeroSection } from '../components/HeroSection';
import { ExploreSection } from '../components/ExploreSection';
import { WatchFocusSection } from '../components/WatchFocusSection';
import { SummitShowcase } from '../components/SummitShowcase';

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
        {/* Hero Section */}
        <HeroSection />

        {/* Explore Section */}
        <ExploreSection />

        {/* Watch Focus Section 1 - Pulse Ox */}
        <WatchFocusSection
          title="PULSE OX"
          features={[
            "SpO2 Monitoring",
            "Altitude Acclimation",
            "Real-time Alerts",
            "Performance Tracking"
          ]}
          imageSrc="https://images.pexels.com/photos/3077882/pexels-photo-3077882.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imageAlt="Rock climber scaling cliff at sunset"
        />

        {/* Watch Focus Section 2 - Solar Charging */}
        <WatchFocusSection
          title="SOLAR"
          features={[
            "Unlimited Battery",
            "Power Save Mode",
            "Quick Charge",
            "Eco-Friendly"
          ]}
          imageSrc="https://images.pexels.com/photos/5916412/pexels-photo-5916412.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imageAlt="Climber on colorful indoor wall"
          reverse={true}
        />

        {/* Summit Showcase */}
        <SummitShowcase />
      </div>
    </>
  );
}
