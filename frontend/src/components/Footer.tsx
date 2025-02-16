import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div {...fadeInUp} className="space-y-6">
            <h3 className="text-xl font-bold">Useful Links</h3>
            <ul className="space-y-4">
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <span>Services Provided</span>
                </motion.a>
              </li>
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  PBS
                </motion.a>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-6">
            <h3 className="text-xl font-bold">Company</h3>
            <ul className="space-y-4">
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Why Choose Clofy?
                </motion.a>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-6">
            <h3 className="text-xl font-bold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} />
                <span>support@clofy.tech</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} />
                <span>+91 93631 39464</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} />
                <span>Tirunelveli - 627002</span>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-6">
            <h3 className="text-xl font-bold">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://www.instagram.com/clofytech/"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://www.youtube.com/@clofytech"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Youtube size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://www.linkedin.com/company/clofy-technologies"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          {...fadeInUp}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} ClofyTechnologies. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <motion.a
                whileHover={{ x: 5 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;