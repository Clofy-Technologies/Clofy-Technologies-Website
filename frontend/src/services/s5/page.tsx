import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function ServiceS5() {
  const navigate = useNavigate();
  return (
    <>
      <section className="pb-[120px] pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-8 border-b-2 border-blue-200 pb-4">
            Cloud Cost Optimization Services
          </h1>

          <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
            <img
              src="\Cloud Cost Optimization Services.png"
              alt="Cloud Cost Optimization"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Optimization Strategies
            </h2>
            <ul className="list-disc pl-6 space-y-4">
              <li className="text-gray-700 text-lg">
                <strong>Resource Right-Sizing:</strong> Match cloud resources to actual workload requirements
              </li>
              <li className="text-gray-700 text-lg">
                <strong>Usage Monitoring:</strong> Real-time tracking of cloud resource utilization
              </li>
              <li className="text-gray-700 text-lg">
                <strong>Reserved Instances Management:</strong> Strategic purchase planning for cost savings
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Cost Visibility
              </h3>
              <p className="text-gray-600">
                Detailed breakdown and analysis of cloud expenditures
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Automated Savings
              </h3>
              <p className="text-gray-600">
                Implement auto-scaling and scheduling for idle resources
              </p>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Optimize Your Cloud Costs?
            </h2>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            onClick={() => navigate('/contact-us')}>
              Start Cost Analysis
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
