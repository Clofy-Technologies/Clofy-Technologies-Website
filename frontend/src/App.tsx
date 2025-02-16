import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn.tsx';
import GetStarted from './pages/GetStarted.tsx';
import {Sparkles, ArrowRight } from 'lucide-react';
import Footer from './components/Footer';
import PersonalBranding from './pages/PersonalBranding';
import CalculateScore from './pages/CalculateScore';
import DashboardPage from './pages/DashboardPage';
import ScoreResult from './pages/ScoreResult';
import ReportPage from './pages/ReportPage';
import ServiceS1 from './services/s1/page';
import ServiceS2 from './services/s2/page';
import ServiceS3 from './services/s3/page';
import ServiceS4 from './services/s4/page';
import ServiceS5 from './services/s5/page';
import ServiceS6 from './services/s6/page';
import ServiceS7 from './services/s7/page';
import ServiceS8 from './services/s8/page';
import Partneraws from './pages/Partneraws';
import Partnerazure from './pages/Partnerazure';
import ContactUs from './pages/ContactUs';


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            {/* Hero Section */}
            <motion.section
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full mb-8 font-medium"
              >
                <Sparkles className="inline-block mr-2" size={18} />
                Join us to shape the future of technology!
              </motion.div> 
              
              <motion.h1
                variants={fadeInUp}
                className="text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Empowering Growth, Innovation, and Digital Transformation
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
               We specialize in providing cutting-edge cloud solutions, AI-driven automation, and digital transformation strategies that drive success. 
              </motion.p>
              
              <motion.div
                variants={fadeInUp}
                className="flex justify-center space-x-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium flex items-center space-x-2 text-lg"
                >
                  <span>Start for free</span>
                  <ArrowRight size={20} />
                </motion.button>
              </motion.div>
            </motion.section>



            {/* Why Choose Section */}
            <motion.section
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            >
              <motion.div
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CLOFY Technologies? </h2>
                <div className="space-y-6 max-w-3xl mx-auto">
                  <motion.div
                    variants={fadeInUp}
                    className="text-blue-600 font-semibold text-lg"
                  >
                    Expert-Led Solutions
                  </motion.div>
                  <motion.p
                    variants={fadeInUp}
                    className="text-gray-600"
                  >
                    Our team brings years of experience in cloud technology, DevOps, AI, and SaaS. 

                  </motion.p>
                  <motion.div
                    variants={fadeInUp}
                    className="text-blue-600 font-semibold text-lg mt-8"
                  >
                    Future-Ready Solutions
                  </motion.div>
                  <motion.p
                    variants={fadeInUp}
                    className="text-gray-600"
                  >
                    We empower our clients to stay ahead with scalable and cost-efficient solutions. 

                  </motion.p>
                  <motion.div
                    variants={fadeInUp}
                    className="text-blue-600 font-semibold text-lg mt-8"
                  >
                    End-to-End Support
                  </motion.div>
                  <motion.p
                    variants={fadeInUp}
                    className="text-gray-600"
                  >
                    We guide you through every stage of your journey—from initial consultation to full implementation. 

                  </motion.p>
                  <motion.div
                    variants={fadeInUp}
                    className="text-blue-600 font-semibold text-lg mt-8"
                  >
                  Microsoft Partner Network
                  </motion.div>
                  <motion.p
                    variants={fadeInUp}
                    className="text-gray-600"
                  >
                    As part of the Microsoft for Startups program, we offer exclusive cloud resources to help you scale efficiently. 

                  </motion.p>
                </div>
              </motion.div>

              {/*<Features />*/}
            </motion.section>

            {/* Cloud Partner Sections */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <Partnerazure />
              <Partneraws />
            </motion.div>

            {/* Existing sections */}
            {/* ... remaining content ... */}
            <Footer />
          </>
        } />
        <Route path="/personal-branding" element={<PersonalBranding />} />
        <Route path="/calculate-score" element={<CalculateScore />} />
        <Route path="/score-result" element={<ScoreResult />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/services/s1" element={<ServiceS1 />} />
        <Route path="/services/s2" element={<ServiceS2 />} />
        <Route path="/services/s3" element={<ServiceS3 />} />
        <Route path="/services/s4" element={<ServiceS4 />} />
        <Route path="/services/s5" element={<ServiceS5 />} />
        <Route path="/services/s6" element={<ServiceS6 />} />
        <Route path="/services/s7" element={<ServiceS7 />} />
        <Route path="/services/s8" element={<ServiceS8 />} />
    
        <Route 
          path="/test" 
          element={<div style={{ backgroundColor: 'red', height: '100vh' }}>TEST</div>}
        />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;