import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-indigo-600 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 inline-block hover:border-b-4 hover:border-emerald-500 transition-all cursor-pointer">Ready to Get Started?</h2>
        <p className="text-lg mb-6">Start using Mindscribe today and experience the power of AI-driven insights!</p>
        <button className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-md hover:bg-emerald-600 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTASection;
