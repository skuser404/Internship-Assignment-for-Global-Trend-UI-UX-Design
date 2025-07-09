import { Palette, Code, Smartphone, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Design",
      description: "Complete brand identity solutions including logos, color schemes, and visual guidelines that make your brand memorable.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "E-commerce", "CMS Solutions"]
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications designed to engage users and drive business growth.",
      features: ["iOS & Android", "UI/UX Design", "App Store Optimization"]
    },
    {
      icon: TrendingUp,
      title: "Digital Strategy",
      description: "Comprehensive digital marketing strategies that increase visibility, engagement, and conversions.",
      features: ["SEO Optimization", "Social Media", "Analytics & Insights"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gt-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 gt-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gt-navy mb-6">
            What We <span className="gt-text-gradient">Do</span>
          </h2>
          <p className="text-xl text-gt-medium-text max-w-3xl mx-auto">
            We offer comprehensive design and development services to help your business 
            thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 gt-hover-lift gt-fade-in border border-gray-100 gt-glow-on-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gt-teal/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gt-teal group-hover:scale-110 transition-all duration-300">
                <service.icon className="text-gt-teal group-hover:text-white transition-colors duration-300" size={28} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gt-navy mb-4 group-hover:text-gt-teal transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gt-medium-text mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gt-medium-text flex items-center">
                    <div className="w-1.5 h-1.5 bg-gt-teal rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a href="#" className="text-gt-teal font-semibold text-sm hover:text-gt-orange transition-colors duration-300 inline-flex items-center group">
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 gt-fade-in">
          <div className="bg-gradient-to-r from-gt-navy to-gt-teal rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <button className="bg-gt-orange hover:bg-gt-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;