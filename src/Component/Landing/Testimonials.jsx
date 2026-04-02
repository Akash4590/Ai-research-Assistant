import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sophia Lee",
    role: "Startup Founder",
    feedback: "Mindscribe helped me summarize hours of research into actionable notes. It’s a game-changer!",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Daniel Johnson",
    role: "Medical Student",
    feedback: "The AI assistant saved me hours by summarizing lectures and notes. I can focus more on studying.",
    image: "https://randomuser.me/api/portraits/men/43.jpg"
  },
  {
    name: "Ava Smith",
    role: "Content Creator",
    feedback: "Mindscribe turns long videos into quick summaries. This is the smartest tool I’ve used.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
 
  {
    name: "Emily Davis",
    role: "UI/UX Designer",
    feedback: "I love the simplicity and efficiency. Great UI, super useful features!",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "James Brown",
    role: "Software Developer",
    feedback: "The best productivity tool I’ve added to my workflow this year.",
    image: "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    name: "Linda Parker",
    role: "Software developer",
    feedback: "Perfect tool for summarizing lectures and handouts for my students.",
    image: "https://randomuser.me/api/portraits/women/50.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-16">
      <div className="container mx-auto text-center px-4">
      <h2 className="text-3xl font-bold mb-10 text-indigo-700 inline-block hover:border-b-4 hover:border-indigo-600 transition-all cursor-pointer">
  What Our Users Say
</h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border cursor-pointer"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 italic text-sm">"{t.feedback}"</p>
              <h4 className="mt-4 font-semibold text-gray-900">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
