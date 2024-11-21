import React from 'react';
import { Home, Building2, Calendar, Clock } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Services',
    description: 'Complete snow removal for driveways, walkways, and sidewalks for homeowners.'
  },
  {
    icon: Building2,
    title: 'Commercial Properties',
    description: 'Large-scale snow removal for businesses, parking lots, and commercial complexes.'
  },
  {
    icon: Calendar,
    title: 'Seasonal Contracts',
    description: 'Lock in priority service with our seasonal snow removal contracts.'
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock snow removal during major storms and weather events.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive snow removal solutions for every need</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <service.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}