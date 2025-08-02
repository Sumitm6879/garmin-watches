import { useState, useEffect } from 'react';
import watch4 from '../assets/watch4.jpg'
import watch10 from '../assets/watch10.jpeg'
import watch6 from '../assets/watch6.jpg'
import watch7 from '../assets/watch7.jpeg'
import watch8 from '../assets/watch8.jpeg'
import watch9 from '../assets/watch9.jpeg'
import watchVid1 from '../assets/watchVid1.mp4'
import watchVid2 from '../assets/watchVid2.mp4'
export function SummitShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});


  const watchImages = [
    {
      src: watch7,
      alt: "Winter mountaineer wearing Fenix Summit Edition",
      pose: "Alpine Explorer",
      features: [
        { title: "Cold Weather Resistant", description: "Operates in -20°C to 60°C", icon: "❄️" },
        { title: "GPS Navigation", description: "Multi-GNSS satellite tracking", icon: "🧭" },
        { title: "Battery Life", description: "Up to 36 days in smartwatch mode", icon: "🔋" }
      ]
    },
    {
      src: watch8,
      alt: "Adventure athlete with smartwatch",
      pose: "Urban Athlete",
      features: [
        { title: "Heart Rate Zones", description: "Train smarter with real-time data", icon: "❤️" },
        { title: "Recovery Advisor", description: "AI-powered training insights", icon: "🏃" },
        { title: "Smart Notifications", description: "Stay connected on the go", icon: "📱" }
      ]
    },
    {
      src: watch9,
      alt: "Navigator using watch for orientation",
      pose: "Trail Navigator",
      features: [
        { title: "Topographic Maps", description: "Preloaded worldwide mapping", icon: "🗺️" },
        { title: "Route Planning", description: "Create and follow custom routes", icon: "📍" },
        { title: "Waypoint Navigation", description: "Mark and navigate to locations", icon: "🎯" }
      ]
    },
    {
      src: watch6,
      alt: "Rock climber with adventure watch",
      pose: "Vertical Challenger",
      features: [
        { title: "ClimbPro Feature", description: "Real-time climbing metrics", icon: "🧗" },
        { title: "Safety Tracking", description: "Incident detection & alerts", icon: "🆘" },
        { title: "Multi-Sport Modes", description: "40+ activity profiles", icon: "🏔️" }
      ]
    }
  ];


  useEffect(() => {
    setIsVisible(true);


    // Initialize visible sections to prevent undefined errors
    setVisibleSections({
      section1: false,
      section2: false,
      section3: false
    });


    // Add a small delay to ensure elements are rendered
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const sectionId = entry.target.getAttribute('data-section');
            if (sectionId) {
              setVisibleSections(prev => ({
                ...prev,
                [sectionId]: entry.isIntersecting
              }));
            }
          });
        },
        { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
      );


      const sections = document.querySelectorAll('[data-section]');
      sections.forEach(section => observer.observe(section));


      return () => observer.disconnect();
    }, 100);


    return () => clearTimeout(timer);
  }, []);


  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % watchImages.length);
  };


  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + watchImages.length) % watchImages.length);
  };


  const goToSlide = (index) => {
    setCurrentIndex(index);
  };


  return (
    <section className="py-32 bg-gradient-to-b from-black to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">


        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Built for Every
            <span className="text-orange-400"> Adventure</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            See how elite athletes push their limits with the Fenix Summit Edition
          </p>
        </div>


        <div className={`grid lg:grid-cols-5 gap-8 mb-20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>


          <div className="lg:col-span-3 relative">
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-black group">
              <div className="relative w-full h-full">
                <img
                  src={watchImages[currentIndex].src}
                  alt={watchImages[currentIndex].alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>


                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                >
                  →
                </button>


                <div className="absolute top-6 right-6 w-24 h-24 border-2 border-orange-400 rounded-full flex items-center justify-center bg-black/60 backdrop-blur-sm">
                  <div className="text-orange-400 text-xs font-bold text-center">
                    FENIX<br />SUMMIT<br />EDITION
                  </div>
                </div>


                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2 transform transition-all duration-500">
                    {watchImages[currentIndex].pose}
                  </h3>
                  <p className="text-white/80 text-lg">Fenix Summit Edition in action</p>
                </div>
              </div>


              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                {watchImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-orange-400 scale-125' : 'bg-white/40 hover:bg-white/60'}`}
                  />
                ))}
              </div>
            </div>
          </div>


          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              {watchImages[currentIndex].features.map((feature, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                      <p className="text-white/70 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>


            <div className="bg-gradient-to-r from-orange-400/20 to-orange-400/20 backdrop-blur-sm border border-orange-400/30 rounded-xl p-6 mt-8">
              <h4 className="text-xl font-bold text-white mb-3">
                Perfect for {watchImages[currentIndex].pose}s
              </h4>
              <p className="text-white/80 text-sm mb-4">
                Engineered to excel in your demanding environment with cutting-edge technology.
              </p>
              <button className="w-full bg-orange-400 hover:bg-orange-300 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>


            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-400">40+</div>
                  <div className="text-white/70 text-xs">Sport Modes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-400">36d</div>
                  <div className="text-white/70 text-xs">Battery Life</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-400">100m</div>
                  <div className="text-white/70 text-xs">Water Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-400">GPS</div>
                  <div className="text-white/70 text-xs">Multi-GNSS</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="space-y-32 mb-32">
          <div className="relative" data-section="section1">
            <div className={`grid lg:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${visibleSections.section1 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="order-2 lg:order-1">
                <div className={`space-y-6 transform transition-all duration-1000 delay-200 ${visibleSections.section1 ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                  <h3 className="text-4xl font-bold text-white">
                    Extreme Conditions
                    <span className="text-orange-400"> Conquered</span>
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    From Arctic expeditions to desert marathons, the Fenix Summit Edition thrives where others fail. Built to withstand temperatures from -20°C to 60°C.
                  </p>
                  <div className="space-y-4">
                    <div className={`flex items-center space-x-3 transform transition-all duration-700 delay-400 ${visibleSections.section1 ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                      <div className="w-8 h-8 bg-orange-400/20 rounded-full flex items-center justify-center">
                        <span className="text-orange-400 text-sm">✓</span>
                      </div>
                      <span className="text-white">Military-grade durability (MIL-STD-810)</span>
                    </div>
                    <div className={`flex items-center space-x-3 transform transition-all duration-700 delay-500 ${visibleSections.section1 ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                      <div className="w-8 h-8 bg-orange-400/20 rounded-full flex items-center justify-center">
                        <span className="text-orange-400 text-sm">✓</span>
                      </div>
                      <span className="text-white">100m water resistance</span>
                    </div>
                    <div className={`flex items-center space-x-3 transform transition-all duration-700 delay-600 ${visibleSections.section1 ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                      <div className="w-8 h-8 bg-orange-400/20 rounded-full flex items-center justify-center">
                        <span className="text-orange-400 text-sm">✓</span>
                      </div>
                      <span className="text-white">Scratch-resistant sapphire crystal</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className={`aspect-[4/5] relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-black group transform transition-all duration-1000 delay-300 ${visibleSections.section1 ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95'}`}>
                  <img
                    src={watch10}
                    alt="Extreme weather mountaineering"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-6 right-6 w-20 h-20 border-2 border-orange-400 rounded-full flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="text-orange-400 text-xs font-bold text-center">
                      TESTED<br />EXTREME
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="relative" data-section="section2">
            <div className={`grid lg:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${visibleSections.section2 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div>
                <div className={`aspect-[4/5] relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-black group transform transition-all duration-1000 delay-300 ${visibleSections.section2 ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-8 opacity-0 scale-95'}`}>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  >
                    <source src={watchVid2} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 w-20 h-20 border-2 border-orange-400 rounded-full flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="text-orange-400 text-xs font-bold text-center">
                      REAL-TIME<br />METRICS
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={`space-y-6 transform transition-all duration-1000 delay-200 ${visibleSections.section2 ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                  <h3 className="text-4xl font-bold text-white">
                    Performance
                    <span className="text-orange-400"> Analytics</span>
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Advanced biometric sensors and AI-powered insights help you optimize every training session and recovery period.
                  </p>
                  <div className={`grid grid-cols-2 gap-6 transform transition-all duration-1000 delay-400 ${visibleSections.section2 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300">
                      <div className="text-2xl font-bold text-orange-400 mb-1">24/7</div>
                      <div className="text-white/70 text-sm">Health Monitoring</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300">
                      <div className="text-2xl font-bold text-orange-400 mb-1">VO2</div>
                      <div className="text-white/70 text-sm">Max Tracking</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300">
                      <div className="text-2xl font-bold text-orange-400 mb-1">RHR</div>
                      <div className="text-white/70 text-sm">Recovery Rate</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300">
                      <div className="text-2xl font-bold text-orange-400 mb-1">AI</div>
                      <div className="text-white/70 text-sm">Training Coach</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="relative" data-section="section3">
            <div className={`grid lg:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${visibleSections.section3 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="order-2 lg:order-1">
                <div className={`space-y-6 transform transition-all duration-1000 delay-200 ${visibleSections.section3 ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                  <h3 className="text-4xl font-bold text-white">
                    Navigate with
                    <span className="text-orange-400"> Confidence</span>
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Multi-GNSS satellite systems and preloaded topographic maps ensure you never lose your way, while safety features keep you protected.
                  </p>
                  <div className={`bg-gradient-to-r from-orange-400/10 to-orange-400/10 backdrop-blur-sm border border-orange-400/20 rounded-xl p-6 transform transition-all duration-1000 delay-400 ${visibleSections.section3 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                    <h4 className="text-xl font-bold text-white mb-4">Emergency Features</h4>
                    <div className="space-y-3">
                      <div className={`flex items-center space-x-3 transform transition-all duration-700 delay-500 ${visibleSections.section3 ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                        <span className="text-red-400 text-lg">🆘</span>
                        <span className="text-white text-sm">Incident Detection & SOS</span>
                      </div>
                      <div className={`flex items-center space-x-3 transform transition-all duration-700 delay-600 ${visibleSections.section3 ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                        <span className="text-blue-400 text-lg">📍</span>
                        <span className="text-white text-sm">LiveTrack Real-time Sharing</span>
                      </div>
                      <div className={`flex items-center space-x-3 transform transition-all duration-700 delay-700 ${visibleSections.section3 ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                        <span className="text-green-400 text-lg">🛰️</span>
                        <span className="text-white text-sm">inReach Satellite Messaging</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className={`aspect-[4/5] relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-black group transform transition-all duration-1000 delay-300 ${visibleSections.section3 ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95'}`}>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  >
                    <source src={watchVid1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 right-6 w-20 h-20 border-2 border-orange-400 rounded-full flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="text-orange-400 text-xs font-bold text-center">
                      NEVER<br />LOST
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className={`text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-8">
            <h4 className="text-3xl font-bold text-white mb-4">Ready to Conquer Your Summit?</h4>
            <p className="text-white/70 text-lg">Join thousands of adventurers who trust Fenix Summit Edition</p>
          </div>
          <button className="bg-orange-400 hover:bg-orange-300 text-black font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-400/25">
            Pre-Order Your Summit Edition
          </button>
          <div className="mt-4 text-white/60 text-sm">Free shipping worldwide • 30-day returns</div>
        </div>
      </div>
    </section>
  );
}
