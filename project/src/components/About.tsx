import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  'Licensed and fully insured',
  'Over 10 years of experience',
  'Modern snow removal equipment',
  'Trained and professional staff',
  'Eco-friendly de-icing products',
  'Real-time service tracking'
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1635468872214-8d35e2e62247?auto=format&fit=crop&q=80"
              alt="Snow plow in action"
              className="rounded-xl shadow-2xl"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Minnesota's Most Trusted Snow Removal Service</h2>
            <p className="text-xl text-gray-600 mb-8">
              Since 2013, Mikey's Snow Removal has been providing reliable snow removal services to the Twin Cities metro area. We take pride in keeping your property safe and accessible during Minnesota's harsh winters.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}