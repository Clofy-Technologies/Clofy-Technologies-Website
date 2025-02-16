import React from 'react';
import { motion } from 'framer-motion';
import { Download, LayoutDashboard, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ScoreResult: React.FC = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const scoreCards = [
    { title: "Low Visibility", range: "Below 40", tip: "Complete Profile, Add Keywords", color: "bg-red-100 border-red-200 text-red-800" },
    { title: "Needs Optimization", range: "40-59", tip: "Engage with Content, Get Recommendations", color: "bg-orange-100 border-orange-200 text-orange-800" },
    { title: "Developing Brand", range: "60-74", tip: "Optimize SEO, Strengthen Network", color: "bg-yellow-100 border-yellow-200 text-yellow-800" },
    { title: "Strong Personal Brand", range: "75-89", tip: "Increase Thought Leadership, Post More", color: "bg-green-100 border-green-200 text-green-800" },
    { title: "Influencer", range: "90-100", tip: "Consistent Engagement, Use LinkedIn Features", color: "bg-blue-100 border-blue-200 text-blue-800" }
  ];

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

  const handleViewReport = () => {
    navigate('/report');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20 pb-16 px-4 overflow-y-auto">
      {/* Score Display Section */}
      <motion.div 
        className="max-w-4xl mx-auto mb-16 mt-8"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 opacity-50" />
          
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-blue-600 mb-8">Your LinkedIn Personal Branding Score</h1>
            
            <motion.div 
              className="text-7xl font-bold text-blue-600 mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
            >
              85
            </motion.div>
            
            <p className="text-xl text-gray-600 mb-8">
              Your personal brand is strong! See your detailed report and next steps below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={handleViewReport}
              >
                <Download className="w-5 h-5" />
                View Detailed Report
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                onClick={() => navigate('/dashboard')}
              >
                <LayoutDashboard className="w-5 h-5" />
                Go to Dashboard
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Settings className="w-5 h-5" />
                Optimize Profile
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Score Classification */}
      <motion.section 
        className="max-w-7xl mx-auto mb-16"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Score Classification</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {scoreCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`${card.color} p-6 rounded-xl border shadow-sm`}
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="font-medium mb-2">{card.range}</p>
              <p className="text-sm">{card.tip}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Time-based Scores */}
      <motion.section 
        className="max-w-7xl mx-auto mb-16"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Score Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {timeScores.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-sm text-center"
            >
              <h4 className="text-xl font-semibold text-green-800 mb-2">{item.period}</h4>
              <p className="text-3xl font-bold text-green-600">{item.score}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Scoring Categories Table */}
      <motion.section 
        className="max-w-7xl mx-auto"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Scoring Categories & Weightage</h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scoring Factors</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {scoringCategories.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.weight}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{item.factors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ScoreResult; 