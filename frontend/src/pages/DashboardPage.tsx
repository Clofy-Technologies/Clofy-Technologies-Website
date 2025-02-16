import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaChartBar, FaThumbsUp, FaTrophy, FaLinkedin } from 'react-icons/fa';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const handleShareProfile = () => {
    // Replace 'YOUR_LINKEDIN_POST_URL' with the actual URL of the LinkedIn post upload section
    window.open('https://www.linkedin.com/in/mowsikan-hariharasudhan-589055292/overlay/create-post/');
  };

  const handleExploreInsights = () => {
    // Navigate to the insights page
    navigate('/insights');
  };

  const handlePricingClick = () => {
    // Navigate to the pricing page
    navigate('/pricing');
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <button
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  onClick={handlePricingClick}
                >
                  Pricing
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* User Profile Section */}
          <section className="bg-white shadow rounded-lg p-6 mb-8">
            <div className="flex items-center">
              <img src="https://via.placeholder.com/80" alt="User Avatar" className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-gray-600">Digital Marketing Expert</p>
                <p className="text-gray-600">New York, USA</p>
              </div>
            </div>
          </section>

          {/* KPI Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <KpiCard icon={<FaChartBar />} title="Overall Score" value="85" indicator="↑ 5%" />
            <KpiCard icon={<FaThumbsUp />} title="Social Media Score" value="78" indicator="↑ 3%" />
            <KpiCard icon={<FaTrophy />} title="Content Quality Score" value="82" indicator="↑ 4%" />
          </section>

          {/* Performance Overview */}
          <section className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <PerformanceCard title="Total Followers" metric="12K" trend="↑ 8%" />
              <PerformanceCard title="Engagement Rate" metric="4.5%" trend="↑ 2%" />
              <PerformanceCard title="Content Shares" metric="320" trend="↑ 10%" />
            </div>
          </section>

          {/* Competitor Analysis */}
          <section className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Competitor Analysis</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Competitor
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Score
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Followers
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Engagement
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Competitor A</td>
                    <td className="px-6 py-4 whitespace-nowrap">80</td>
                    <td className="px-6 py-4 whitespace-nowrap">10K</td>
                    <td className="px-6 py-4 whitespace-nowrap">3.8%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Competitor B</td>
                    <td className="px-6 py-4 whitespace-nowrap">75</td>
                    <td className="px-6 py-4 whitespace-nowrap">8K</td>
                    <td className="px-6 py-4 whitespace-nowrap">4.0%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Competitor C</td>
                    <td className="px-6 py-4 whitespace-nowrap">82</td>
                    <td className="px-6 py-4 whitespace-nowrap">15K</td>
                    <td className="px-6 py-4 whitespace-nowrap">4.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Recent Activities */}
          <section className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaUser className="w-5 h-5 text-gray-400 mr-2" />
                <span>New follower: Jane Smith</span>
              </li>
              <li className="flex items-center">
                <FaChartBar className="w-5 h-5 text-gray-400 mr-2" />
                <span>Your post "5 Tips for Better Engagement" is trending</span>
              </li>
              <li className="flex items-center">
                <FaTrophy className="w-5 h-5 text-gray-400 mr-2" />
                <span>Analytics report for Last 7 Days is ready</span>
              </li>
            </ul>
          </section>

          {/* Recommendations */}
          <section className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
            <ul className="space-y-4">
              <li className="bg-blue-50 p-4 rounded">
                <h3 className="text-lg font-semibold mb-2">Increase Posting Frequency</h3>
                <p className="text-gray-600">Try to post at least 3 times per week to keep your audience engaged.</p>
              </li>
              <li className="bg-green-50 p-4 rounded">
                <h3 className="text-lg font-semibold mb-2">Engage More with Your Audience</h3>
                <p className="text-gray-600">Respond to comments and messages promptly to build relationships with your followers.</p>
              </li>
              <li className="bg-yellow-50 p-4 rounded">
                <h3 className="text-lg font-semibold mb-2">Optimize Your Profile SEO</h3>
                <p className="text-gray-600">Use relevant keywords in your profile description and posts to improve your search visibility.</p>
              </li>
            </ul>
          </section>

          {/* CTA Buttons */}
          <section className="flex justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={handleShareProfile}
            >
              <FaLinkedin className="w-5 h-5 mr-2" />
              Share Profile
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              onClick={handleExploreInsights}
            >
              Explore More Insights
            </motion.button>
          </section>
        </div>
      </main>
    </div>
  );
};

const KpiCard: React.FC<{ icon: React.ReactNode; title: string; value: string; indicator: string }> = ({
  icon,
  title,
  value,
  indicator,
}) => (
  <motion.div
    className="bg-white shadow rounded-lg p-6"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="bg-blue-500 text-white p-3 rounded-full">{icon}</div>
      <div className={`text-sm font-semibold ${indicator.includes('↑') ? 'text-green-500' : 'text-red-500'}`}>
        {indicator}
      </div>
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-3xl font-bold">{value}</p>
  </motion.div>
);

const PerformanceCard: React.FC<{ title: string; metric: string; trend: string }> = ({ title, metric, trend }) => (
  <motion.div
    className="bg-white shadow rounded-lg p-6"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-3xl font-bold mb-2">{metric}</p>
    <div className={`text-sm font-semibold ${trend.includes('↑') ? 'text-green-500' : 'text-red-500'}`}>{trend}</div>
  </motion.div>
);

export default DashboardPage; 