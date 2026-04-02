import React, { useState } from 'react';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Mindscribe?',
      answer: 'Mindscribe is an AI-powered tool that helps users summarize research, lectures, videos, and documents quickly, providing actionable insights.',
    },
    {
      question: 'How does Mindscribe work?',
      answer: 'Mindscribe uses advanced machine learning and natural language processing (NLP) algorithms to analyze content and generate concise summaries.',
    },
    {
      question: 'What platforms does Mindscribe support?',
      answer: 'Mindscribe is available as a web application, with future plans for mobile and desktop apps.',
    },
    {
      question: 'Is my data secure with Mindscribe?',
      answer: 'Yes, Mindscribe employs industry-leading security measures to protect your data, including encryption and secure cloud storage.',
    },
    {
      question: 'How do I get started?',
      answer: 'Simply sign up for an account and start using Mindscribe to analyze and summarize content right away.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-10 text-indigo-700 inline-block hover:border-b-4 hover:border-indigo-600 transition-all duration-300 cursor-pointer">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleAnswer(index)}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FaQuestionCircle className="text-indigo-600 text-xl" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">{faq.question}</h3>
                </div>
                <div className="text-indigo-600">
                  {activeIndex === index ? (
                    <FaMinus className="text-xl" />
                  ) : (
                    <FaPlus className="text-xl" />
                  )}
                </div>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-700 mt-4 text-justify">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
