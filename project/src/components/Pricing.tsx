import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Per Visit',
    price: '75',
    features: [
      'Pay as you go',
      'No contract required',
      '2" snow depth minimum',
      'Driveway and walkways',
      'De-icing service available',
      'Same day service'
    ]
  },
  {
    name: 'Monthly',
    price: '199',
    features: [
      'Unlimited visits',
      'Priority service',
      'No minimum depth',
      'Driveway and walkways',
      'Includes de-icing',
      '24/7 emergency service'
    ]
  },
  {
    name: 'Seasonal',
    price: '999',
    features: [
      'November through April',
      'Best value',
      'Guaranteed service',
      'Complete property coverage',
      'Unlimited de-icing',
      'Premium support'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that works best for you</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">${plan.price}</span>
                {plan.name === 'Per Visit' && <span className="text-gray-600">/visit</span>}
                {plan.name === 'Monthly' && <span className="text-gray-600">/month</span>}
                {plan.name === 'Seasonal' && <span className="text-gray-600">/season</span>}
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="tel:+16125555555"
                className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}