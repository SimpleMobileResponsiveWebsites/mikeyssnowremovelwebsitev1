import React from 'react';
import { Snowflake, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Snowflake className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">Mikey's Snow Removal</span>
            </div>
            <p className="text-gray-400">
              Professional snow removal services in the Twin Cities metro area. Available 24/7 during winter storms.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+16125555555" className="flex items-center text-gray-400 hover:text-white">
                <Phone className="h-5 w-5 mr-2" />
                (612) 555-5555
              </a>
              <a href="mailto:info@mikeyssnow.com" className="flex items-center text-gray-400 hover:text-white">
                <Mail className="h-5 w-5 mr-2" />
                info@mikeyssnow.com
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Minneapolis, MN
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a href="#services" className="block text-gray-400 hover:text-white">Services</a>
              <a href="#about" className="block text-gray-400 hover:text-white">About Us</a>
              <a href="#pricing" className="block text-gray-400 hover:text-white">Pricing</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <div className="space-y-3 text-gray-400">
              <p>Minneapolis</p>
              <p>St. Paul</p>
              <p>Bloomington</p>
              <p>Eden Prairie</p>
              <p>Plymouth</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mikey's Snow Removal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}