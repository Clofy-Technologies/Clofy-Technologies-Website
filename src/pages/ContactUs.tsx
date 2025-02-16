import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaPhone, FaMapMarkerAlt, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: 'general',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number'),
      company: Yup.string(),
      subject: Yup.string().required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: async values => {
      try {
        setIsSubmitting(true);
        setSubmitError('');
        
        // Temporary mock endpoint (remove when real backend is ready)
        await axios.post('http://localhost:5000/api/contact', values);
        console.log('Submission successful'); // Check browser console
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 3000);
        formik.resetForm();
        
      } catch (error) {
        console.error('Submission error:', error);
        setSubmitError('Failed to send message. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-16 md:py-20 lg:py-28 bg-white"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-gray-600 text-lg">We're here to help you with any questions or requests</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-600 mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Headquarters</h3>
                    <p className="text-gray-600">CLOFY Technologies Private Limited E13, 10E1B1, TVM Road, Vannarpettai, Palayamkottai, Tirunelveli - 627002,
                    Tamil Nadu, India.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaPhone className="text-blue-600 mt-1 mr-4" size={18} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">
                      
                      Support: +91 93631 39464
                    </p>
                  </div>
                </div>

                
              </div>

              <div className="mt-8 pt-6 border-t border-blue-100">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">FOLLOW US</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/company/clofy-technologies" className="text-blue-600 hover:text-blue-800">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://www.instagram.com/clofytech/" 
                     className="text-blue-600 hover:text-blue-800"
                     target="_blank" 
                     rel="noopener noreferrer">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {submitSuccess && (
              <div className="p-4 bg-green-100 text-green-700 rounded-lg mb-6">
                Message sent successfully!
              </div>
            )}

            {submitError && (
              <div className="p-4 bg-red-100 text-red-700 rounded-lg mb-6">
                {submitError}
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                ) : null}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                ) : null}
              </div>

              {/* New Phone Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
                )}
              </div>

              {/* New Company Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  name="company"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.company}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* New Subject Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
              <select
                name="subject"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="sales">Sales Inquiry</option>
                <option value="partnership">Partnership Opportunity</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
              <textarea
                name="message"
                rows={4}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
              ) : null}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactUs; 