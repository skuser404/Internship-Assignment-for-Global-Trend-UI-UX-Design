import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    'Brand Design',
    'Web Development',
    'Mobile Apps',
    'Digital Strategy',
    'UI/UX Design',
    'Consultation'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subDetails: 'Mon-Fri 9AM-6PM IST'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@globaltrend.co.in',
      subDetails: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Mumbai, India',
      subDetails: 'Schedule an appointment'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM',
      subDetails: 'Weekend: By appointment'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gt-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gt-teal/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gt-orange/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gt-navy/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 gt-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gt-navy mb-6">
            Get In <span className="gt-text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gt-medium-text max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="gt-fade-in">
            <h3 className="text-2xl font-bold text-gt-navy mb-8">Let's Start a Conversation</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="group flex items-start space-x-4 p-6 bg-gt-light-gray rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 gt-hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gt-teal rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gt-navy mb-1">{info.title}</h4>
                    <p className="text-gt-dark-text font-medium">{info.details}</p>
                    <p className="text-gt-medium-text text-sm">{info.subDetails}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="gt-glassmorphism rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gt-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={28} />
              </div>
              <h4 className="font-semibold text-gt-navy mb-2">Find Us</h4>
              <p className="text-gt-medium-text">Located in the heart of Mumbai's business district</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="gt-fade-in">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gt-navy mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gt-navy mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gt-light-gray border border-transparent rounded-lg focus:bg-white focus:border-gt-teal focus:outline-none transition-all duration-300 group-hover:bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gt-navy mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gt-light-gray border border-transparent rounded-lg focus:bg-white focus:border-gt-teal focus:outline-none transition-all duration-300 group-hover:bg-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gt-navy mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gt-light-gray border border-transparent rounded-lg focus:bg-white focus:border-gt-teal focus:outline-none transition-all duration-300 group-hover:bg-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gt-navy mb-2">Service Interested</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gt-light-gray border border-transparent rounded-lg focus:bg-white focus:border-gt-teal focus:outline-none transition-all duration-300 group-hover:bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gt-navy mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gt-light-gray border border-transparent rounded-lg focus:bg-white focus:border-gt-teal focus:outline-none transition-all duration-300 resize-none group-hover:bg-white"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gt-orange hover:bg-gt-orange/90 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 gt-fade-in">
          <div className="inline-flex items-center space-x-2 text-gt-teal font-semibold mb-4">
            <CheckCircle size={20} />
            <span>Free consultation available</span>
          </div>
          <p className="text-gt-medium-text max-w-2xl mx-auto">
            Not sure where to start? Book a free 30-minute consultation call and let's discuss your project requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;