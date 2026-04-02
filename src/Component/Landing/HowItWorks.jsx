import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Brain, Lightbulb } from 'lucide-react';

const steps = [
  {
    title: 'Upload Content',
    description: 'Quickly upload PDFs, videos, or notes. Mindscribe accepts multiple formats to get started right away.',
    icon: <Upload className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: 'AI Analyzes It',
    description: 'Our intelligent system scans your content and extracts meaningful insights using advanced AI models.',
    icon: <Brain className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: 'Get Smart Insights',
    description: 'Get summaries, instant answers, and powerful highlights that save you time and brainpower.',
    icon: <Lightbulb className="w-8 h-8 text-indigo-600" />,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="group relative inline-block text-3xl md:text-4xl font-bold text-[#4F46E5] mb-6 cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#4F46E5] transition-all duration-300 group-hover:w-full"></span>
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Understand how Mindscribe turns your raw information into valuable insights with just three simple steps.
        </motion.p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-indigo-600 transition">{step.title}</h3>
              <p className="text-gray-600 text-justify">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
