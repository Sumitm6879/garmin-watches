interface JourneySectionProps {
  title: string;
  description: string;
  feature: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export function JourneySection({
  title,
  description,
  feature,
  imageSrc,
  imageAlt,
  reverse = false
}: JourneySectionProps) {
  return (
    <section className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Image */}
          <div className={`relative ${reverse ? 'lg:col-start-2' : ''}`}>
            <div className="relative h-96 lg:h-[32rem] rounded-2xl overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover parallax-element"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className={`${reverse ? 'lg:col-start-1' : ''}`}>
            <div className="max-w-lg">
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {title}
              </h3>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                {description}
              </p>
              <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/30 rounded-full px-6 py-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {feature}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
