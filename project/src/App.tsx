import React from 'react';
import { Snowflake, Phone, Mail, MapPin, Clock, Shield, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1542601098-8fc114e148e2?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        <nav className="relative z-10 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Snowflake className="h-8 w-8 text-white" />
              <span className="text-white text-2xl font-bold">Mikey's Snow Removal</span>
            </div>
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#services" className="hover:text-blue-200 transition">Services</a>
              <a href="#about" className="hover:text-blue-200 transition">About</a>
              <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
            </div>
          </div>
        </nav>
        
        <div className="relative z-10 container mx-auto px-6 h-[calc(100vh-88px)] flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Professional Snow Removal Services in Minnesota
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Keep your property safe and accessible all winter long with our reliable snow removal services
            </p>
            <a 
              href="tel:+1234567890" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition inline-flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Get Free Quote</span>
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Snow Removal",
                description: "Complete snow removal for driveways, walkways, and entrances",
                icon: <Snowflake className="h-8 w-8 text-blue-600" />
              },
              {
                title: "Commercial Services",
                description: "24/7 snow removal for businesses, parking lots, and commercial properties",
                icon: <Shield className="h-8 w-8 text-blue-600" />
              },
              {
                title: "Emergency Services",
                description: "Rapid response for urgent snow removal needs",
                icon: <Clock className="h-8 w-8 text-blue-600" />
              }
            ].map((service, index) => (
              <div key={index} className="p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { text: "24/7 Emergency Service", icon: <Clock className="h-6 w-6" /> },
              { text: "Fully Insured", icon: <Shield className="h-6 w-6" /> },
              { text: "Experienced Team", icon: <Star className="h-6 w-6" /> },
              { text: "Satisfaction Guaranteed", icon: <Shield className="h-6 w-6" /> }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-blue-600 p-4 rounded-full text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <span>contact@mikeyssnowremoval.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <span>Minneapolis, Minnesota</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Snowflake className="h-6 w-6" />
              <span className="text-xl font-bold">Mikey's Snow Removal</span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Mikey's Snow Removal. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;