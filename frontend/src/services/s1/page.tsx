import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ServiceS1() {
  const navigate = useNavigate();

  return (
    <>
    
      <section className="pb-[120px] pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl font-bold text-blue-600 mb-8 border-b-2 border-blue-200 pb-4">
            Microsoft 365 Advisory and Support
          </h1>

          {/* Image Section */}
          <div className="mb-16 rounded-lg overflow-hidden shadow-xl">
            <img
              src="\Microsoft 365 Advisory and Support .png"
              alt="Microsoft 365 Services"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Core Services Section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Comprehensive Management Services
            </h2>
            <ul className="list-disc pl-6 space-y-4">
              <li className="text-gray-700 text-lg">
                <strong>Cloud Migration Strategy:</strong> Seamless transition planning and execution
              </li>
              <li className="text-gray-700 text-lg">
                <strong>License Optimization:</strong> Cost-effective subscription management
              </li>
              <li className="text-gray-700 text-lg">
                <strong>Security Configuration:</strong> Enterprise-grade protection setup
              </li>
            </ul>
          </div>

          {/* Key Benefits Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Increased Productivity
              </h3>
              <p className="text-gray-600">
                Streamline collaboration with optimized Microsoft Teams and SharePoint configurations
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Dedicated technical assistance for critical system issues
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="bg-blue-600 text-white p-8 rounded-lg text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              Ready to Optimize Your Microsoft 365?
            </h2>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              onClick={() => navigate('/contact-us')}
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
