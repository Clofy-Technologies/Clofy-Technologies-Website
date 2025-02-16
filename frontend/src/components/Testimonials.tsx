import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "YAIGA transformed the way I approach my career. The AI insights are a game-changer!",
      author: "Sarah M.",
      role: "Marketing Professional"
    },
    {
      quote: "As a student, YAIGA gave me the confidence to build a standout LinkedIn profile. Highly recommend!",
      author: "Alex T.",
      role: "Recent Graduate"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          What People Are Saying
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <Quote className="text-blue-600 mb-4" size={32} />
              <p className="text-lg italic text-gray-700 mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;