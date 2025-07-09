import { Zap, Clock, Trophy, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Creative Excellence",
      description: "Innovative designs that capture attention and drive engagement",
      stat: "95%",
      statLabel: "Client Retention"
    },
    {
      icon: Clock,
      title: "Lightning Fast",
      description: "Quick turnaround times without compromising on quality",
      stat: "48h",
      statLabel: "Average Response"
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Track record of delivering measurable business outcomes",
      stat: "3x",
      statLabel: "ROI Increase"
    },
    {
      icon: Shield,
      title: "Reliable Partner",
      description: "Consistent support and long-term partnership approach",
      stat: "24/7",
      statLabel: "Support Available"
    }
  ];

  return (
    <section className="py-20 bg-gt-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gt-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gt-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 gt-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gt-white mb-6">
            Why Choose <span className="gt-text-gradient">Global Trend</span>
          </h2>
          <p className="text-xl text-gt-light-text max-w-3xl mx-auto">
            We combine creativity, speed, and results to deliver exceptional value for your business.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="group text-center gt-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-gt-teal/50 transition-all duration-300 gt-hover-lift">
                {/* Icon */}
                <div className="w-16 h-16 bg-gt-teal rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="text-white" size={28} />
                </div>

                {/* Stat */}
                <div className="mb-4">
                  <div className="text-3xl md:text-4xl font-bold text-gt-teal mb-1">
                    {highlight.stat}
                  </div>
                  <div className="text-sm text-gt-light-text">
                    {highlight.statLabel}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gt-white mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gt-light-text leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 gt-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gt-white mb-4">Our Process</h3>
            <p className="text-gt-light-text">Simple, effective, and results-driven</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Discover', 'Design', 'Develop', 'Deliver'].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-12 h-12 bg-gt-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    {index + 1}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gt-teal/30 transform translate-x-6"></div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-gt-white mb-2">{step}</h4>
                <p className="text-sm text-gt-light-text">
                  {index === 0 && "Understand your needs and goals"}
                  {index === 1 && "Create beautiful, functional designs"}
                  {index === 2 && "Build with latest technologies"}
                  {index === 3 && "Launch and provide ongoing support"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;