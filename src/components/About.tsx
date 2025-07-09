import { Target, Award, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "We align design with your business objectives"
    },
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized excellence in design and innovation"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with years of experience"
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "Fresh ideas that make your brand stand out"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gt-light-gray">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="gt-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gt-navy mb-6">
              About <span className="gt-text-gradient">Global Trend</span>
            </h2>
            <p className="text-lg text-gt-medium-text mb-8 leading-relaxed">
              We are a forward-thinking design agency that bridges the gap between creativity and business strategy. 
              Our mission is to help businesses transform their digital presence through innovative design solutions 
              that not only look exceptional but also drive meaningful results.
            </p>
            <p className="text-lg text-gt-medium-text mb-8 leading-relaxed">
              Founded on the principles of creativity, collaboration, and client success, we've built our reputation 
              by delivering designs that inspire and strategies that truly deliver measurable outcomes.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gt-teal/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="text-gt-teal" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gt-navy">{feature.title}</h3>
                    <p className="text-sm text-gt-medium-text">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="gt-fade-in">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg gt-hover-lift">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gt-teal rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gt-navy mb-4">Our Mission</h3>
                  <p className="text-gt-medium-text">
                    To empower businesses with design solutions that create lasting impact and drive sustainable growth.
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gt-orange rounded-full flex items-center justify-center shadow-lg">
                <Award className="text-white" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gt-navy rounded-full flex items-center justify-center shadow-lg">
                <Lightbulb className="text-white" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;