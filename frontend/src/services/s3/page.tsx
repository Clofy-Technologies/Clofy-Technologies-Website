import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function ServiceS3() {
  const navigate = useNavigate();
  return (
    <>
      <section className="pb-[120px] pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-8 border-b-2 border-blue-200 pb-4">
            Multi-Cloud Support
          </h1>

          <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
            <img
              src="\Multi-Cloud Support copy.png"
              alt="Multi-Cloud Support"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Services Offered
            </h2>
            <ul className="list-disc pl-6 space-y-4">
              <li className="text-gray-700 text-lg">
                <strong>Hybrid Cloud Solutions:</strong> Seamless integration of multiple cloud platforms
              </li>
              <li className="text-gray-700 text-lg">
                <strong>Cross-Platform Management:</strong> Unified management for Azure, AWS, and GCP
              </li>
              <li className="text-gray-700 text-lg">
                <strong>Cloud Interoperability:</strong> Enhanced integration between different cloud environments
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Business Continuity
              </h3>
              <p className="text-gray-600">
                Diversified cloud reliance for improved system resilience
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Operational Agility
              </h3>
              <p className="text-gray-600">
                Flexible adaptation to dynamic business requirements
              </p>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready for Multi-Cloud Transformation?
            </h2>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            onClick={() => navigate('/contact-us')}>
              Start Cloud Integration
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
