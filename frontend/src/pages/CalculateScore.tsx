import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CustomUpload from "../components/CustomUpload";
import Button from "../components/ui/Button";

// Define the type for a question
interface Question {
  question: string;
  options: string[];
  tip?: string;
  type?: string;  // Add this line
}

// Define the type for personal details
interface PersonalDetails {
  fullName: string;
  email: string;
  careerGoal: string;
  linkedIn: string;
  socialLinks: string;
  [key: string]: string; // This allows any string key
}

// Use PersonalDetailKeys to type the fields
type PersonalDetailKeys = keyof PersonalDetails;

const CalculateScore: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [currentStep, setCurrentStep] = useState(0); // 0 = personal info, 1 = assessment
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const prevSection = useRef(0);
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
    fullName: '',
    email: '',
    careerGoal: '',
    linkedIn: '',
    socialLinks: ''
  });

  const careerOptions = [
    'Digital Marketing Specialist',
    'Data Analyst',
    'Graphic Designer',
    'Software Developer',
    'UX/UI Designer',
    'Project Manager',
    'Content Writer',
    'Social Media Manager'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    prevSection.current = currentStep;
  }, [currentStep]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false);
      navigate('/score-result');
    }, 2000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null; // Get the uploaded file
    setUploadedFile(file); // Set the uploaded file state
  };

  const handleViewReport = () => {
    if (uploadedFile) {
      navigate('/report'); // Navigate to the report page
    } else {
      alert('Please upload a file first.'); // Alert if no file is uploaded
    }
  };

  const handleInputChange = (field: PersonalDetailKeys, value: string) => {
    setPersonalDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateURL = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validatePersonalInfo = () => {
    const newErrors: { [key: string]: string } = {};

    if (!personalDetails.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!personalDetails.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(personalDetails.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!personalDetails.careerGoal.trim()) {
      newErrors.careerGoal = 'Please select a career goal';
    }
    if (personalDetails.linkedIn.trim() && !validateURL(personalDetails.linkedIn)) {
      newErrors.linkedIn = 'Please enter a valid URL';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    setErrors({});
    setCurrentStep(1);
    return true;
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const scoringCategories = [
    { category: "Profile Picture & Banner", weight: "10%", factors: "Image quality, professional appeal, visibility" },
    { category: "Headline & Summary", weight: "15%", factors: "SEO optimization, storytelling, keyword relevance" },
    { category: "Experience & Achievements", weight: "15%", factors: "Detailed descriptions, relevant roles, impact" },
    { category: "Skills & Endorsements", weight: "10%", factors: "Relevance, number of endorsements, skill match" },
    { category: "Recommendations", weight: "10%", factors: "Quality, relevance, and number of recommendations" },
    { category: "Content & Engagement", weight: "15%", factors: "Posting frequency, likes, shares, comments" },
    { category: "Network Strength", weight: "10%", factors: "Number of connections, industry relevance" },
    { category: "Certifications & Licenses", weight: "5%", factors: "Industry-recognized certifications, credibility" },
    { category: "ATS Optimization & SEO", weight: "10%", factors: "Keyword optimization for recruiter visibility" }
  ];

  const timeScores = [
    { period: "Last 7 Days", score: "78" },
    { period: "Last 30 Days", score: "80" },
    { period: "Last 3 Months", score: "82" },
    { period: "Last 6 Months", score: "85" },
    { period: "Last 1 Year", score: "88" }
  ];

  // Update the questions array to use the new type
  const questions: { section: string; questions: Question[] }[] = [
    {
      section: "Social Media & Profile Engagement",
      questions: [
        {
          question: "Which social media platforms do you use for professional branding? (Select all that apply)",
          options: [
            "LinkedIn",
            "Twitter",
            "Instagram",
            "Facebook",
            "YouTube",
            "Personal Blog/Website",
            "Other (please specify)"
          ],
          type: "multi-select"
        },
        {
          question: "How often do you post or engage on these platforms?",
          options: ["Daily", "Weekly", "Monthly", "Rarely"]
        },
        {
          question: "What type of content do you typically share? (Select all that apply)",
          options: [
            "Industry news and trends",
            "Personal achievements or milestones",
            "Career development tips",
            "Job search-related content",
            "Original articles or blogs",
            "Visual content (photos, infographics, videos)",
            "Other (please specify)"
          ],
          type: "multi-select"
        },
        {
          question: "On average, how many likes, comments, or shares does your content receive?",
          options: [
            "Less than 10 per post",
            "10-50 per post",
            "50-100 per post",
            "More than 100 per post"
          ]
        }
      ]
    },
    {
      section: "Profile Completeness & Optimization",
      questions: [
        {
          question: "How complete is your LinkedIn profile?",
          options: [
            "Fully completed (All sections filled)",
            "Partially completed (Some sections filled)",
            "Minimal (Only a few sections filled)",
            "I don't have a LinkedIn profile"
          ]
        },
        {
          question: "Have you received any recommendations or endorsements on LinkedIn?",
          options: [
            "Yes, multiple recommendations and endorsements",
            "Yes, but only a few",
            "No, but I plan to request them",
            "No, I haven't asked for any"
          ]
        },
        {
          question: "Have you customized your LinkedIn headline and summary?",
          options: [
            "Both headline and summary are customized",
            "Only headline is customized",
            "Need to update them",
            "Haven't customized either"
          ]
        }
      ]
    },
    {
      section: "Job Search & Career Readiness",
      questions: [
        {
          question: "Are you actively searching for a job or internship?",
          options: [
            "Yes, actively applying",
            "Yes, just starting",
            "No, but plan to soon",
            "Not currently job hunting"
          ]
        },
        {
          question: "How many job applications submitted last month?",
          options: ["0-2", "3-5", "6-10", "More than 10"]
        },
        {
          question: "Do you customize application materials?",
          options: [
            "Tailor both resume and LinkedIn",
            "Mostly tweak resume only",
            "Use same resume for all",
            "Don't use a resume yet"
          ]
        },
        {
          question: "Recent interviews or job offers?",
          options: [
            "Had interviews and offers",
            "Had interviews but no offers",
            "No interviews yet",
            "Preparing for interviews"
          ]
        }
      ]
    },
    {
      section: "Networking & Relationship Building",
      questions: [
        {
          question: "How many relevant LinkedIn connections?",
          options: ["Less than 10", "10-50", "50-100", "More than 100"]
        },
        {
          question: "How often engage with professionals?",
          options: [
            "Daily engagement",
            "Weekly engagement",
            "Occasionally engage",
            "Rarely or never"
          ]
        },
        {
          question: "Attended networking events?",
          options: [
            "Regularly (3+ in 6 months)",
            "A couple of events",
            "Plan to attend soon",
            "Haven't attended any"
          ]
        },
        {
          question: "Reached out to mentors/professionals?",
          options: [
            "Have an active mentor",
            "Reached out to a few",
            "Plan to reach out",
            "Never reached out"
          ]
        }
      ]
    },
    {
      section: "Educational & Skill Development",
      questions: [
        {
          question: "Currently taking online courses?",
          options: [
            "Actively enrolled",
            "Completed recently",
            "Plan to take soon",
            "Haven't taken any"
          ]
        },
        {
          question: "Recently learned relevant skills?",
          options: [
            "Digital Marketing",
            "Data Analysis",
            "Graphic Design",
            "Web Development",
            "Communication",
            "Leadership/Management",
            "Other (specify)"
          ],
          type: "multi-select"
        },
        {
          question: "How often consume industry content?",
          options: ["Daily", "Weekly", "Monthly", "Rarely or never"]
        }
      ]
    }
  ];
  
  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = { ...answers };
    // Use unique key combining section and question index
    newAnswers[`${currentStep}-${questionIndex}`] = answerIndex;
    setAnswers(newAnswers);
  };

  const nextSection = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousSection = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0  overflow-hidden">
        {/* AI Neural Network Connections */}
        <motion.svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {[...Array(20)].map((_, i) => (
            <motion.path
              key={`connection-${i}`}
              d={`M ${Math.random() * 100} ${Math.random() * 100} L ${Math.random() * 100} ${Math.random() * 100}`}
              stroke="url(#aiGradient)"
              strokeWidth="0.3"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.3, 0],
                pathLength: [0, 1, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          <defs>
            <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* AI Processing Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              scale: 0
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.4, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}

        {/* Holographic Grid Overlay */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff0a 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 overflow-x-hidden">
        {currentStep === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="max-w-2xl mx-auto p-6 mt-8 relative"
          >
            {/* Animated background particles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 overflow-hidden rounded-3xl"
            >
              {/* AI Neural Network Connections */}
              <motion.svg 
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {[...Array(20)].map((_, i) => (
                  <motion.path
                    key={`connection-${i}`}
                    d={`M ${Math.random() * 100} ${Math.random() * 100} L ${Math.random() * 100} ${Math.random() * 100}`}
                    stroke="url(#aiGradient)"
                    strokeWidth="0.3"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 0.3, 0],
                      pathLength: [0, 1, 0]
                    }}
                    transition={{
                      duration: 4 + Math.random() * 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
                <defs>
                  <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </motion.svg>

              {/* AI Processing Particles */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full"
                  initial={{
                    x: Math.random() * 100 + '%',
                    y: Math.random() * 100 + '%',
                    scale: 0
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.4, 0],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              ))}

              {/* Holographic Grid Overlay */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #ffffff0a 1px, transparent 1px),
                    linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
                animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
            </motion.div>

            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border-2 border-white/20 overflow-hidden mt-7">
              {/* Dynamic progress ring */}
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <svg className="w-32 h-32" viewBox="0 0 100 100">
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    strokeWidth="10" 
                    strokeLinecap="round"
                    className="stroke-blue-100/30"
                  />
                </svg>
              </motion.div>

              {/* Progress indicator */}
              <div className="mb-8 flex items-center justify-center gap-2 relative">
                <motion.div 
                  className="flex items-center text-sm font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.span 
                    className="relative z-10 bg-gradient-to-br from-blue-600 to-blue-400 text-white w-9 h-9 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="absolute inset-0 bg-white/10 rounded-full" />
                    1
                  </motion.span>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-100 mx-1 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-blue-200/30"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.5, ease: 'easeInOut' }}
                    />
                  </div>
                  <motion.span 
                    className="text-gray-400/80 w-9 h-9 rounded-full flex items-center justify-center border-2 border-gray-200/50 bg-white/50 backdrop-blur-sm shadow-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    2
                  </motion.span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-10 relative"
              >
                <motion.div
                  className="mb-5 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100/80 to-blue-50/50 backdrop-blur-sm border-2 border-white/20 shadow-lg"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.8 }}
                >
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </motion.div>
                <motion.h2
                  className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent relative"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  Tell Us About Yourself
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-10 blur-xl" />
                </motion.h2>
                <motion.p 
                  className="text-gray-500/90 font-medium"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  Help us personalize your assessment experience
                </motion.p>
              </motion.div>

              <div className="space-y-6 relative">
                {[
                  { label: 'Full Name', field: 'fullName', type: 'text', required: true, autoComplete: 'name' },
                  { label: 'Email Address', field: 'email', type: 'email', required: true, autoComplete: 'email' },
                  { label: 'Career Goal/Desired Job Role', field: 'careerGoal', type: 'select', required: true },
                  { label: 'LinkedIn Profile URL', field: 'linkedIn', type: 'url', required: false, autoComplete: 'url' },
                  { label: 'Additional Social Media/Portfolio Links', field: 'socialLinks', type: 'text', required: false, placeholder: 'e.g. GitHub, Behance, Dribbble' },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <motion.label 
                      className="block text-sm font-medium text-gray-700/90 mb-2 pl-1.5 flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      {item.label}
                      {item.required && (
                        <motion.span 
                          className="text-red-500 text-xs"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          *
                        </motion.span>
                      )}
                    </motion.label>

                    {item.type === 'select' ? (
                      <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.005 }}
                      >
                        <select
                          value={personalDetails[item.field]}
                          onChange={(e) => {
                            handleInputChange(item.field, e.target.value);
                            setErrors(prev => ({ ...prev, [item.field]: '' }));
                          }}
                          className={`w-full p-4 rounded-xl border-2 text-gray-700 ${
                            errors[item.field] 
                              ? 'border-red-300/80 bg-red-50/50 focus:border-red-400/80' 
                              : 'border-gray-200/80 hover:border-blue-200/80 focus:border-blue-400/80 bg-white/50 backdrop-blur-sm'
                          } focus:ring-4 focus:ring-blue-200/20 transition-all duration-200 pr-14 shadow-sm`}
                        >
                          <option value="">Select Career Goal</option>
                          {careerOptions.map((option, idx) => (
                            <option key={idx} value={option}>{option}</option>
                          ))}
                        </select>
                        
                      </motion.div>
                    ) : (
                      <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.005 }}
                      >
                        <input
                          type={item.type}
                          value={personalDetails[item.field]}
                          onChange={(e) => {
                            handleInputChange(item.field, e.target.value);
                            setErrors(prev => ({ ...prev, [item.field]: '' }));
                          }}
                          className={`w-full p-4 rounded-xl border-2 text-gray-700 ${
                            errors[item.field] 
                              ? 'border-red-300/80 bg-red-50/50 focus:border-red-400/80' 
                              : 'border-gray-200/80 hover:border-blue-200/80 focus:border-blue-400/80 bg-white/50 backdrop-blur-sm'
                          } focus:ring-4 focus:ring-blue-200/20 transition-all duration-200 pr-14 shadow-sm`}
                          placeholder={item.placeholder || `Enter your ${item.label.toLowerCase()}`}
                          required={item.required}
                          autoComplete={item.autoComplete}
                        />
                        {item.type === 'url' && (
                          <motion.div 
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400/80 group-hover:text-blue-500 transition-colors"
                            whileHover={{ scale: 1.1 }}
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                          </motion.div>
                        )}
                      </motion.div>
                    )}

                    {errors[item.field] ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-sm text-red-600/90 mt-2 flex items-center gap-2 bg-red-50/80 px-4 py-2.5 rounded-xl backdrop-blur-sm border border-red-200/50"
                      >
                        <motion.svg
                          className="w-5 h-5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
                        </motion.svg>
                        <span>{errors[item.field]}</span>
                      </motion.div>
                    ) : item.field === 'linkedIn' && (
                      <motion.p 
                        className="text-sm text-gray-400/80 mt-2 flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <svg className="w-4 h-4 text-blue-400/80" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        <span>We'll analyze your LinkedIn profile for optimization opportunities</span>
                      </motion.p>
                    )}
                  </motion.div>
                ))}

                <motion.button
                  onClick={validatePersonalInfo}
                  whileHover={{ 
                    scale: 1.02,
                    filter: 'brightness(1.1)',
                    background: [
                      'linear-gradient(to right, #3b82f6, #6366f1)',
                      'linear-gradient(to right, #6366f1, #3b82f6)'
                    ] 
                  }}
                  className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-xl font-bold shadow-2xl hover:shadow-[0_0_30px_5px_rgba(99,102,241,0.3)] mt-8 relative overflow-hidden group"
                  disabled={isLoading}
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <motion.div 
                          className="relative w-6 h-6"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        >
                          <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse" />
                          <svg className="w-full h-full" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
                              opacity="0.5"
                            />
                            <path
                              fill="currentColor"
                              d="M4 12c0 4.4 3.6 8 8 8s8-3.6 8-8h2c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2V4C8.7 4 6 6.7 6 10s2.7 6 6 6s6-2.7 6-6h2c0 4.4-3.6 8-8 8s-8-3.6-8-8z"
                            />
                          </svg>
                        </motion.div>
                        <span>AI Analysis in Progress...</span>
                      </>
                    ) : (
                      <>
                        <span>Start AI Assessment</span>
                        <motion.div
                          className="ml-2"
                          animate={{ 
                            x: [0, 4, 0],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{ 
                            duration: 0.8, 
                            repeat: Infinity,
                            times: [0, 0.5, 1]
                          }}
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9.009 4.929c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </motion.div>
                      </>
                    )}
                  </div>
                  
                  {/* AI Energy Pulse Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.3, 0],
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </motion.button>

                <motion.p 
                  className="text-center text-sm text-gray-400/80 mt-6 flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <svg className="w-5 h-5 text-green-400/80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/>
                  </svg>
                  <span>256-bit SSL Encryption • GDPR Compliant • Zero Data Sharing</span>
                </motion.p>
              </div>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence mode='wait' initial={false}>
            <motion.div
              key={currentStep}
              initial={{ x: currentStep > prevSection.current ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: currentStep > prevSection.current ? -100 : 100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="pb-8"
            >
              {/* Progress Indicator with Pulse Animation */}
              <div className="mb-8 text-center space-y-2">
                <div className="flex items-center justify-between px-4 mb-2">
                  <span className="text-sm font-medium text-blue-600 flex items-center gap-1">
                    <span className="hidden sm:inline">Section</span> 
                    <span className="bg-blue-100 px-2 py-1 rounded-md">
  {currentStep === -1 ? 1 : currentStep + 1}/{questions.length}
</span>
                  </span>
                  <span className="text-sm font-medium text-blue-600 flex items-center">
                    <span className="hidden sm:inline">Progress</span> 
                    <span className="bg-blue-100 px-2 py-1 rounded-md ml-1">
                      {Math.round(((currentStep + 1) / questions.length) * 100)}%
                    </span>
                  </span>
                </div>
                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${((currentStep + 1) / questions.length) * 100}%`,
                      transition: { 
                        duration: 0.8, 
                        ease: "easeOut",
                        delay: 0.2
                      }
                    }}
                  >
                    <div className="absolute inset-0 bg-white opacity-20 animate-pulse" />
                  </motion.div>
                </div>
              </div>

              {/* Section Header with Shimmer Effect */}
              <motion.div 
                className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg text-center mb-8 relative overflow-hidden"
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-blue-50 to-transparent animate-shimmer" />
                <div className="mb-4 inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Section {currentStep}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent relative">
                  {questions[currentStep -1].section}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-10" />
                </h2>
                <p className="text-gray-500 text-sm max-w-md mx-auto flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {questions[currentStep].questions.length} key assessment points
                </p>
              </motion.div>

              {/* Questions with Enhanced Interaction */}
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto border border-gray-100 relative"
                initial={{ opacity: 0, scale: 0.97 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.3 }}
              >
                {questions[currentStep -1].questions.map((q, questionIndex) => (
                  <motion.div 
                    key={questionIndex} 
                    className="mb-6 last:mb-0 group relative"
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.3, delay: questionIndex * 0.1 }}
                  >
                    <div className="flex items-start mb-3 space-x-2">
                      <motion.div 
                        className="flex-shrink-0 w-6 h-6 bg-blue-50 text-blue-600 rounded-md flex items-center justify-center text-sm font-bold cursor-help"
                        whileHover={{ scale: 1.1 }}
                        title="Question number"
                      >
                        {questionIndex + 1}
                      </motion.div>
                      <p className="font-semibold text-gray-800 text-lg relative pr-8">
                        {q.question}
                        {q.tip && (
                          <span className="absolute right-0 top-1 text-blue-400 opacity-75 hover:opacity-100 cursor-help">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l1.828 1.829a1 1 0 101.415-1.415L11 9.586V6z" />
                            </svg>
                          </span>
                        )}
                      </p>
                    </div>
                    {q.tip && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="ml-8 mb-4 px-4 py-2 bg-blue-50 border-l-4 border-blue-300 rounded-r-lg flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 mt-1 text-blue-500">✨</div>
                        <p className="text-sm text-blue-600 font-medium">{q.tip}</p>
                      </motion.div>
                    )}
                    <div className="space-y-2 ml-8">
                      {q.options.map((option, optionIndex) => (
                        <motion.button
                          key={optionIndex}
                          onClick={() => handleAnswer(questionIndex, optionIndex)}
                          className={`w-full text-left p-4 rounded-xl transition-all duration-200 relative overflow-hidden
                            ${answers[`${currentStep}-${questionIndex}`] === optionIndex 
                              ? 'bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-lg'
                              : 'bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200'}`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center space-x-3 relative z-10">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                              ${answers[`${currentStep}-${questionIndex}`] === optionIndex ? 'border-white' : 'border-gray-300'}`}>
                              {answers[`${currentStep}-${questionIndex}`] === optionIndex && (
                                <motion.div 
                                  className="w-2 h-2 bg-white rounded-full"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ type: 'spring', stiffness: 300 }}
                                />
                              )}
                            </div>
                            <span className="text-sm font-medium">{option}</span>
                          </div>
                          {answers[`${currentStep}-${questionIndex}`] === optionIndex && (
                            <div className="absolute inset-0 bg-white opacity-10" />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced Navigation with Keyboard Support */}
              <div className="mt-8 flex justify-between max-w-2xl mx-auto gap-4">
                <motion.button 
                  onClick={previousSection} 
                  disabled={currentStep === 0} 
                  className={`flex items-center px-6 py-3 rounded-xl font-medium gap-2 transition-all
                    ${currentStep === 0 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-white text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg hover:-translate-x-1'}`}
                  whileHover={{ scale: currentStep === 0 ? 1 : 1.05 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Previous
                </motion.button>
                
                {currentStep < questions.length - 1 ? (
                  <motion.button 
                    onClick={nextSection} 
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-xl font-medium gap-2 shadow-md hover:shadow-lg hover:translate-x-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Next
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.button>
                ) : (
                  <motion.button 
                    onClick={() => alert('Calculating PBS...')} 
                    className="flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-xl font-medium gap-2 shadow-md hover:shadow-lg hover:scale-[1.02]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </motion.div>
                    Calculate My PBS
                  </motion.button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Score Ranges */}
        <motion.section 
          className="py-16 px-4"
          variants={fadeInUp}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Understanding Your Score</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { title: "Low Visibility", range: "Below 40", tip: "Complete Profile, Add Keywords", color: "bg-red-50 border-red-200" },
                { title: "Needs Optimization", range: "40-59", tip: "Engage with Content, Get Recommendations", color: "bg-orange-50 border-orange-200" },
                { title: "Developing Brand", range: "60-74", tip: "Optimize SEO, Strengthen Network", color: "bg-yellow-50 border-yellow-200" },
                { title: "Strong Personal Brand", range: "75-89", tip: "Increase Thought Leadership", color: "bg-green-50 border-green-200" },
                { title: "Influencer", range: "90-100", tip: "Maintain Consistency", color: "bg-blue-50 border-blue-200" },
              ].map((score, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`${score.color} p-6 rounded-xl border shadow-sm`}
                >
                  <h3 className="text-xl font-semibold mb-2">{score.title}</h3>
                  <p className="text-gray-600 font-medium mb-2">{score.range}</p>
                  <p className="text-sm text-gray-500">{score.tip}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Disclaimer */}
        <div className="text-center py-8 text-sm text-gray-500">
          <p>
            By using this tool, you agree to our{' '}
            <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a> and{' '}
            <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalculateScore; 