
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Target, Award, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const PersonalBranding: React.FC = () => {
  const navigate = useNavigate();

  const handleCalculateClick = () => {
    navigate('/calculate-score');
  };

  const growthBenefits = [
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: "Improve profile visibility",
      description: "Attract more opportunities and get noticed by recruiters and industry peers"
    },
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: "Engage effectively",
      description: "Connect better with your network and industry leaders"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: "Track Performance",
      description: "Benchmark your performance against industry standards"
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: "Data-Driven Insights",
      description: "Refine your strategy with actionable analytics"
    }
  ];

  const whyCalculate = [
    "Benchmark your performance against industry standards",
    "Track your progress and networking efforts over time",
    "Gain recognition from recruiters and industry peers",
    "Continuously refine your online strategy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      
        <motion.section 
          className="relative min-h-screen flex items-center justify-center text-white pt-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
            {/* Animated shapes */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-400/30 blur-3xl animate-blob1 top-0 -left-20"></div>
            <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-400/30 blur-3xl animate-blob2 top-20 right-0"></div>
            <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/30 blur-3xl animate-blob3 bottom-0 left-1/2"></div>
            
            {/* Optional subtle grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>
          
          <div className="relative z-[1] max-w-4xl mx-auto text-center px-4">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Discover Your Personal Branding Score
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Unlock the power of your personal brand with a comprehensive score that highlights your Personal Branding growth potential.
            </motion.p>
            <motion.button
              onClick={handleCalculateClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Calculate for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </motion.section>
     

      {/* Show wizard when activated */}
      
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-16"
        >
          
        </motion.div>
     

      {/* What is PBS Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={fadeInUp}
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">What is a Personal Branding Score?</h2>
              <p className="text-gray-600 text-lg mb-4">
                A Personal Branding Score is a unique metric that quantifies your professional presence and influence on the platform. It evaluates key factors such as profile completeness, engagement, network strength, and content quality.
              </p>
              <p className="text-gray-600 text-lg">
                This score offers you a clear picture of your personal brand's current state and highlights opportunities to boost your online professional image.
              </p>
            </div>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="https://source.unsplash.com/600x400/?branding,linkedin" 
                alt="Personal Branding"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Helps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Supercharge Your Personal Branding Growth
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {growthBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Calculate Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="https://source.unsplash.com/600x400/?data,analytics" 
                alt="Data Analytics"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Every LinkedIn User Should Calculate Their Score</h2>
              <p className="text-gray-600 text-lg mb-6">
                Every professional brings a unique set of skills and experiences to the table. Calculating your Personal Branding Score helps you stand out and evolve your LinkedIn presence through data-driven insights.
              </p>
              <ul className="space-y-4">
                {whyCalculate.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Calculating Your Score Today!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals transforming their LinkedIn presence with our free, easy-to-use tool.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Calculate for Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </div>
      </section>

      {/* Add keyframes for animations */}
      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.2); }
          66% { transform: translate(-20px, 20px) scale(0.8); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 50px) scale(1.2); }
          66% { transform: translate(20px, -20px) scale(0.8); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(-50%, 0) scale(1); }
          33% { transform: translate(-50%, -30px) scale(1.1); }
          66% { transform: translate(-50%, 30px) scale(0.9); }
        }
        .animate-blob1 {
          animation: blob1 12s infinite ease-in-out;
        }
        .animate-blob2 {
          animation: blob2 12s infinite ease-in-out;
          animation-delay: -4s;
        }
        .animate-blob3 {
          animation: blob3 12s infinite ease-in-out;
          animation-delay: -8s;
        }
      `}</style>

      {/* Add a button to toggle the wizard */}
    </div>
  );
};

export default PersonalBranding; 