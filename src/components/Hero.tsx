import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gt-navy overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 42, 56, 0.9), rgba(30, 42, 56, 0.7)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Abstract Shape Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gt-teal/10 rounded-full blur-3xl gt-floating"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gt-orange/10 rounded-full blur-3xl gt-floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gt-teal/5 rounded-full blur-3xl gt-floating" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gt-white mb-6 gt-fade-in">
            Designs that{' '}
            <span className="gt-text-gradient">Inspire</span>
            <br />
            Strategies that{' '}
            <span className="gt-text-gradient">Deliver</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gt-light-text mb-8 gt-fade-in max-w-2xl mx-auto">
            Transform your business with innovative design solutions and strategic digital experiences that drive real results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center gt-fade-in">
            <button className="group bg-gt-orange hover:bg-gt-orange/90 text-gt-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl gt-glow-on-hover flex items-center gap-2">
              Get Started
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            
            <button className="group bg-transparent border-2 border-gt-teal text-gt-teal hover:bg-gt-teal hover:text-gt-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 gt-scale-on-hover">
              <Play size={20} />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 gt-fade-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gt-teal mb-2">500+</div>
              <div className="text-gt-light-text">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gt-teal mb-2">98%</div>
              <div className="text-gt-light-text">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gt-teal mb-2">24/7</div>
              <div className="text-gt-light-text">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gt-white animate-bounce">
        <div className="w-6 h-10 border-2 border-gt-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gt-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;