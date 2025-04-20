import React from 'react';

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for individuals trying out the platform.',
    features: ['1 Project', 'Community Support', 'Basic Analytics'],
    gradient: 'from-gray-700 to-gray-800',
  },
  {
    name: 'Pro',
    price: '$9.99',
    description: 'For freelancers and small teams.',
    features: ['10 Projects', 'Priority Support', 'Advanced Analytics', 'Collaboration Tools'],
    gradient: 'from-blue-600 to-purple-600',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    description: 'Custom solutions for larger organizations.',
    features: ['Unlimited Projects', 'Dedicated Manager', 'Custom Integrations', '24/7 Premium Support'],
    gradient: 'from-yellow-600 to-orange-600',
  },
];

const Pricing = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Simple & Transparent Pricing</h1>
        <p className="text-gray-400 text-lg mb-12">
          Choose the plan that fits your journey. No hidden fees, cancel anytime.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${plan.gradient} rounded-2xl p-8 shadow-lg transform hover:scale-105 transition duration-300 ${
                plan.popular ? 'border-2 border-white' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-3 right-3 bg-white text-black text-xs px-3 py-1 rounded-full font-semibold">
                  Most Popular
                </div>
              )}

              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <p className="text-3xl font-extrabold mb-4">{plan.price}</p>
              <p className="text-gray-200 mb-6">{plan.description}</p>

              <ul className="text-sm text-gray-100 space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-white text-black font-semibold py-2 rounded-xl hover:bg-gray-200 transition">
                {plan.price === 'Contact Us' ? 'Get in Touch' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
