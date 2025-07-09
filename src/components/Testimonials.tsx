import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "👩‍💼",
      rating: 5,
      text: "Global Trend transformed our entire digital presence. Their designs are not only beautiful but also incredibly effective at converting visitors into customers. The team's attention to detail and strategic thinking is exceptional."
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GrowthCo",
      image: "👨‍💻",
      rating: 5,
      text: "Working with Global Trend was a game-changer for our business. They delivered a stunning website that perfectly captures our brand essence. The results speak for themselves - we've seen a 200% increase in leads since launch."
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, Creative Solutions",
      image: "👩‍🎨",
      rating: 5,
      text: "The professionalism and creativity of Global Trend's team is unmatched. They took our vision and brought it to life in ways we never imagined. Our new brand identity has received countless compliments from clients."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gt-light-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-gt-teal rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-gt-orange rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-gt-navy rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 gt-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gt-navy mb-6">
            What Our <span className="gt-text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gt-medium-text max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="gt-glassmorphism rounded-3xl p-8 md:p-12 text-center shadow-xl">
            {/* Quote Icon */}
            <div className="w-16 h-16 bg-gt-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Quote className="text-gt-teal" size={28} />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <Star key={i} className="text-gt-orange fill-current" size={24} />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-gt-dark-text mb-8 leading-relaxed italic">
              "{testimonials[currentSlide].text}"
            </blockquote>

            {/* Client Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gt-teal rounded-full flex items-center justify-center text-2xl">
                {testimonials[currentSlide].image}
              </div>
              <div className="text-left">
                <div className="font-semibold text-gt-navy text-lg">
                  {testimonials[currentSlide].name}
                </div>
                <div className="text-gt-medium-text">
                  {testimonials[currentSlide].position}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gt-teal hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gt-teal hover:text-white transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-gt-teal scale-125' : 'bg-gt-medium-text/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="gt-fade-in">
            <div className="text-3xl font-bold text-gt-teal mb-2">500+</div>
            <div className="text-gt-medium-text">Happy Clients</div>
          </div>
          <div className="gt-fade-in">
            <div className="text-3xl font-bold text-gt-teal mb-2">1000+</div>
            <div className="text-gt-medium-text">Projects Delivered</div>
          </div>
          <div className="gt-fade-in">
            <div className="text-3xl font-bold text-gt-teal mb-2">5 Years</div>
            <div className="text-gt-medium-text">Experience</div>
          </div>
          <div className="gt-fade-in">
            <div className="text-3xl font-bold text-gt-teal mb-2">24/7</div>
            <div className="text-gt-medium-text">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;