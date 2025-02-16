import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function ServiceS4() {
  const navigate = useNavigate();
  return (
    <>
      <section className="pb-[120px] pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-8 border-b-2 border-blue-200 pb-4">
            SaaS End-to-End Services
          </h1>

          <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
            <img
              src="\SaaS End-to-End Services.png"
              alt="SaaS Solutions"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Full-Cycle SaaS Development
            </h2>
            <ul className="list-disc pl-6 space-y-4">
              <li className="text-gray-700 text-lg">
                <strong>CSP Selection & Integration:</strong> Optimal cloud platform strategy and implementation
              </li>
              <li className="text-gray-700 text-lg">
                <strong>Application Deployment:</strong> Scalable SaaS solution deployment and configuration
              </li>
              <li className="text-gray-700 text-lg">
                <strong>Multi-Tenant Architecture:</strong> Secure and efficient shared infrastructure design
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Accelerated Time-to-Market
              </h3>
              <p className="text-gray-600">
                Rapid deployment of cloud-native SaaS applications
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Cost Efficiency
              </h3>
              <p className="text-gray-600">
                Optimized resource utilization and operational costs
              </p>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Build Your SaaS Solution?
            </h2>
            <a className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
             href="https://forms.office.com/r/vFmbpCrAEv?origin=lprLink">
              Start SaaS Development
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
