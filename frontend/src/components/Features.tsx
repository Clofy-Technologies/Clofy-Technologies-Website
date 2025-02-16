import { motion } from "framer-motion";
import { Sparkles, Brain, BarChart3, CheckCircle, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Sparkles className="text-blue-600" size={32} />,
      title: "Personal Branding Score",
      description: "Evaluate and enhance your online presence with actionable insights.",
    },
    {
      icon: <Brain className="text-blue-600" size={32} />,
      title: "LinkedIn Profile Review",
      description: "Optimize your profile to stand out and attract the right opportunities.",
    },
    {
      icon: <BarChart3 className="text-blue-600" size={32} />,
      title: "Skill Gap Analysis",
      description: "Discover the skills you need and find the resources to acquire them.",
    },
    {
      icon: <CheckCircle className="text-blue-600" size={32} />,
      title: "ATS-Friendly Resume Builder",
      description: "Craft resumes that get noticed by Applicant Tracking Systems (ATS).",
    },
    {
      icon: <Target className="text-blue-600" size={32} />,
      title: "Self-Assessment Tool",
      description: "Identify your strengths, skills and create a personalized growth roadmap.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto py-16 px-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            type: "spring",
            stiffness: 150,
          }}
          className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 w-full sm:w-[45%] lg:w-[30%]"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-#e8f4f8-400 to-#e8f4f8-600 text-white mb-6"
          >
            {feature.icon}
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {feature.description}
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
};

export default Features;
