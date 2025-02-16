import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, BarChart, TrendingUp, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReportPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const tabs = [
    { id: 'monthly', label: 'Monthly' },
    { id: 'quarterly', label: '3 Months' },
    { id: 'yearly', label: 'Yearly' }
  ];

  const metricsData = {
    monthly: { profileViews: '15,200', engagement: '4.2%', growth: '8.5%', connections: '320' },
    quarterly: { profileViews: '45,600', engagement: '4.5%', growth: '9.2%', connections: '980' },
    yearly: { profileViews: '150,200', engagement: '4.2%', growth: '8.5%', connections: '3,200' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20 pb-16 px-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div {...fadeInUp} className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>
          <button className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-5 h-5 mr-2" />
            PDF Export
          </button>
        </motion.div>

        {/* Cover Section */}
        <motion.div {...fadeInUp} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-12 shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-noise opacity-20" />
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="text-6xl font-bold mb-4"
            >
              85/100
            </motion.div>
            <h1 className="text-4xl font-bold mb-4">Strategic Storyteller</h1>
            <p className="text-xl opacity-90">
              Influenced 10,000+ professionals this {activeTab.replace('ly', '')}
            </p>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div {...fadeInUp} className="flex gap-4 mb-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Metrics Grid */}
        <motion.div {...fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <MetricCard
            icon={<BarChart className="w-6 h-6" />}
            title="Profile Views"
            value={metricsData[activeTab].profileViews}
          />
          <MetricCard
            icon={<TrendingUp className="w-6 h-6" />}
            title="Engagement Rate"
            value={metricsData[activeTab].engagement}
          />
          <MetricCard
            icon={<FileText className="w-6 h-6" />}
            title="Content Posts"
            value="24"
          />
          <MetricCard
            icon={<BarChart className="w-6 h-6" />}
            title="New Connections"
            value={metricsData[activeTab].connections}
          />
        </motion.div>

        {/* Content Highlights */}
        <motion.div {...fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Content Highlights</h2>
          <div className="space-y-6">
            <ContentPost
              title="The Future of Remote Work"
              likes="1.2K"
              comments="86"
              shares="150"
            />
            <ContentPost
              title="AI in Modern Business"
              likes="980"
              comments="45"
              shares="98"
            />
          </div>
        </motion.div>

        {/* Score Breakdown */}
        <motion.div {...fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Score Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">Category</th>
                  <th className="px-6 py-3 text-left">Score</th>
                  <th className="px-6 py-3 text-left">Recommendations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ['Headline', '75/100', 'Add more industry keywords'],
                  ['Summary', '80/100', 'Include storytelling elements'],
                  ['Network', '70/100', 'Connect with industry leaders'],
                ].map(([category, score, recommendation], index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{category}</td>
                    <td className="px-6 py-4">{score}</td>
                    <td className="px-6 py-4 text-blue-600">{recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Recommendations</h2>
          <ul className="list-disc pl-6 space-y-4 text-gray-600">
            <li>Post 3x weekly to increase engagement</li>
            <li>Add 10+ endorsements for key skills</li>
            <li>Optimize your profile summary with action-driven keywords</li>
          </ul>
        </motion.div>

        <motion.div {...fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Lessons & Growth Insights</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Top Lessons</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Consistency in posting schedule</li>
                <li>Audience engagement patterns</li>
                <li>Quality content outperforms quantity</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Growth Insights</h3>
              <p className="text-gray-600">
                Expand your expertise in digital marketing to improve credibility and 
                audience trust. Focus on data-driven content strategies.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Persona Identification</h2>
          <p className="text-xl text-blue-600 font-semibold mb-2">
            Your Content Persona: <span className="text-purple-600">The Strategist</span>
          </p>
          <p className="text-gray-600">
            Inspiration: Simon Sinek, Mel Robbins
          </p>
        </motion.div>

        <motion.div {...fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Roadmap for Next Year</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">Connections</h3>
              <p className="text-gray-600">Grow your network by 25%</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-green-600">Engagement</h3>
              <p className="text-gray-600">Achieve 5% increase in engagement</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-purple-600">Content</h3>
              <p className="text-gray-600">Publish 20 high-value posts</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const MetricCard: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({
  icon,
  title,
  value,
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{icon}</div>
      <div className="font-medium text-gray-600">{title}</div>
    </div>
    <div className="text-3xl font-bold text-gray-800">{value}</div>
  </motion.div>
);

const ContentPost: React.FC<{ title: string; likes: string; comments: string; shares: string }> = ({
  title,
  likes,
  comments,
  shares,
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="p-6 rounded-lg bg-gray-50 border border-gray-200"
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="flex gap-6 text-gray-600">
      <span>👍 {likes}</span>
      <span>💬 {comments}</span>
      <span>🔄 {shares}</span>
    </div>
  </motion.div>
);

export default ReportPage; 