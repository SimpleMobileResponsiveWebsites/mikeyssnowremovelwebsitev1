import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544228865-7d73678c0f28?auto=format&fit=crop&q=80"
          alt="Snow covered house"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Professional Snow Removal Services in Minnesota</h1>
          <p className="text-xl mb-8">Reliable, prompt, and professional snow removal services for residential and commercial properties. Available 24/7 during winter storms.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#pricing" className="bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center justify-center hover:bg-blue-700 transition">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="tel:+16125555555" className="border-2 border-white text-white px-8 py-4 rounded-lg flex items-center justify-center hover:bg-white hover:text-gray-900 transition">
              Call Now: (612) 555-5555
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}