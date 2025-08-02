export function SummitShowcase() {
  const watchImages = [
    {
      src: "https://images.pexels.com/photos/6263503/pexels-photo-6263503.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Winter mountaineer wearing Fenix Summit Edition",
      pose: "Alpine Explorer"
    },
    {
      src: "https://images.pexels.com/photos/5586441/pexels-photo-5586441.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Adventure athlete with smartwatch",
      pose: "Urban Athlete"
    },
    {
      src: "https://images.pexels.com/photos/6033794/pexels-photo-6033794.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Navigator using watch for orientation",
      pose: "Trail Navigator"
    },
    {
      src: "https://images.pexels.com/photos/5916412/pexels-photo-5916412.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Rock climber with adventure watch",
      pose: "Vertical Challenger"
    }
  ];

  const technologies = [
    {
      title: "Multi-Sport Tracking",
      description: "Track climbing, hiking, skiing, and 40+ sport modes",
      icon: "🏔️"
    },
    {
      title: "Advanced Sleep Monitoring",
      description: "Optimize recovery with detailed sleep analysis",
      icon: "😴"
    },
    {
      title: "Storm Alerts",
      description: "Stay ahead of dangerous weather conditions",
      icon: "⛈️"
    },
    {
      title: "Emergency SOS",
      description: "Send your location when every second counts",
      icon: "🆘"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Watch Heroes Grid */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-4">
            Built for Every
            <span className="text-accent"> Adventure</span>
          </h2>
          <p className="text-center text-white/70 text-lg mb-16 max-w-2xl mx-auto">
            See how elite athletes push their limits with the Fenix Summit Edition
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {watchImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-black"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Watch Highlight Overlay */}
                  <div className="absolute top-4 right-4 w-20 h-20 border-2 border-accent rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="text-accent text-xs font-bold text-center">
                      FENIX<br/>SUMMIT
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{image.pose}</h3>
                  <p className="text-white/80 text-sm">Fenix Summit Edition in action</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Features Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-16">
            Advanced Features for Peak Performance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 text-center"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{tech.title}</h4>
                <p className="text-white/70 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite Image Marquee */}
        <div className="overflow-hidden mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Trusted by Elite Athletes Worldwide
          </h3>
          <div className="flex animate-marquee">
            {[...watchImages, ...watchImages].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-80 mx-4 rounded-2xl overflow-hidden relative group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-semibold text-sm">{image.pose}</div>
                  <div className="text-white/70 text-xs">Fenix Summit Edition</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="mb-8">
            <h4 className="text-3xl font-bold text-white mb-4">Ready to Conquer Your Summit?</h4>
            <p className="text-white/70 text-lg">Join thousands of adventurers who trust Fenix Summit Edition</p>
          </div>
          <button className="bg-accent hover:bg-accent/90 text-black font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25">
            Pre-Order Your Summit Edition
          </button>
          <div className="mt-4 text-white/60 text-sm">Free shipping worldwide • 30-day returns</div>
        </div>
      </div>
    </section>
  );
}
