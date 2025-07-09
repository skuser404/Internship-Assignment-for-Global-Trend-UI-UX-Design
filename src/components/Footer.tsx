import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Brand Design',
    'Web Development',
    'Mobile Apps',
    'Digital Strategy',
    'UI/UX Design',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gt-navy text-gt-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gt-teal rounded-lg flex items-center justify-center">
                <span className="text-gt-white font-bold text-xl">GT</span>
              </div>
              <span className="text-gt-white font-bold text-xl">Global Trend</span>
            </div>
            <p className="text-gt-light-text mb-6 leading-relaxed">
              Transforming businesses through innovative design solutions and strategic digital experiences that drive real results.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="text-gt-teal" size={18} />
                <span className="text-gt-light-text">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-gt-teal" size={18} />
                <span className="text-gt-light-text">hello@globaltrend.co.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-gt-teal" size={18} />
                <span className="text-gt-light-text">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gt-light-text hover:text-gt-teal transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gt-light-text hover:text-gt-teal transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>
            <p className="text-gt-light-text mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gt-white/10 border border-gt-white/20 rounded-lg text-gt-white placeholder-gt-light-text focus:outline-none focus:border-gt-teal transition-colors duration-300"
                />
                <button className="bg-gt-orange hover:bg-gt-orange/90 text-gt-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gt-white/10 rounded-lg flex items-center justify-center hover:bg-gt-teal transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="text-gt-light-text group-hover:text-gt-white" size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gt-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gt-light-text text-sm mb-4 md:mb-0">
              © 2024 Global Trend. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gt-light-text hover:text-gt-teal transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gt-light-text hover:text-gt-teal transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gt-light-text hover:text-gt-teal transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;