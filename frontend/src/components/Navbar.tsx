import { motion } from 'framer-motion';
import { LogIn, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import menuData from '../menuData';
import { useAuth } from '../context/AuthContext';

// Add this interface/type somewhere in your type definitions
type ServiceItem = {
  id: number;
  title: string;
  path?: string;  // Add optional modifier
  newTab: boolean;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesHover, setIsServicesHover] = useState(false);
  const [isPersonalBrandingHover, setIsPersonalBrandingHover] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 bg-white shadow-sm z-[100] border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <img src="/Logo-dark.png" alt="Clofy Logo" className="h-8 md:h-10 w-auto" />
          </motion.div>
          
          {/* Center Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              onClick={() => navigate('/')}
            >
              Home
            </motion.button>
            
            
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesHover(true)}
              onMouseLeave={() => setIsServicesHover(false)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </motion.button>
              
              {isServicesHover && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-64"
                >
                  {menuData.find(item => item.title === "Services")?.submenu?.map((service: ServiceItem) => (
                    <Link
                      key={service.id}
                      to={service.path ?? '/'}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {service.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
            <div 
              className="relative"
              onMouseEnter={() => setIsPersonalBrandingHover(true)}
              onMouseLeave={() => setIsPersonalBrandingHover(false)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Blog
              </motion.button>
              
              {isPersonalBrandingHover && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-lg py-2 px-4 text-sm text-gray-700 whitespace-nowrap"
                >
                  Coming Soon
                </motion.div>
              )}
            </div>
            
            
            <motion.a
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                 href="https://www.linkedin.com/company/clofy-technologies"
              >
               Careers
              </motion.a>
            
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                 href="https://forms.office.com/r/vFmbpCrAEv?origin=lprLink"
              >
               Contact Us
              </motion.a>

          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0
        }}
        className="md:hidden bg-white"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {/* Home */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full px-3 py-2 text-sm md:text-base font-medium text-gray-700 hover:text-blue-600 text-left"
            onClick={() => {
              navigate('/');
              setIsOpen(false);
            }}
          >
            Home
          </motion.button>

          {/* Personal Branding Score */}
         
          {/* Services Dropdown */}
          <div className="space-y-1">
            <button className="w-full px-3 py-2 text-sm md:text-base font-medium text-gray-700 hover:text-blue-600 text-left">
              Services
            </button>
            <div className="pl-4 space-y-1">
              {menuData.find(item => item.title === "Services")?.submenu?.map((service: ServiceItem) => (
                <Link
                  key={service.id}
                  to={service.path ?? '/'}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full px-3 py-2 text-sm md:text-base font-medium text-gray-700 hover:text-blue-600 text-left"
            onClick={() => {
              navigate('/contact-us');
              setIsOpen(false);
            }}
          >
            Contact Us
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;