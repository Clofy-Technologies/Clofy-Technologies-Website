import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function ServiceS6() {
  const navigate = useNavigate();
  return (
    <>
      <section className="pb-[120px] pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-8 border-b-2 border-blue-200 pb-4">
            Cloud & DevOps Implementation
          </h1>

          <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
            <img
              src="\Cloud and DevOps Services.png"
              alt="DevOps Implementation"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Implementation Services
            </h2>
            <ul className="list-disc pl-6 space-y-4">
              <li className="text-gray-700 text-lg">
                <strong>CI/CD Pipelines:</strong> Automated build, test, and deployment workflows
              </li>
              <li className="text-gray-700 text-lg">
                <strong>Infrastructure as Code:</strong> Consistent environment provisioning
              </li>
              <li className="text-gray-700 text-lg">
                <strong>Monitoring & Logging:</strong> Real-time system insights and analytics
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Deployment Speed
              </h3>
              <p className="text-gray-600">
                Accelerated release cycles with automated pipelines
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Operational Efficiency
              </h3>
              <p className="text-gray-600">
                Streamlined development and operations collaboration
              </p>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Transform Your DevOps?
            </h2>
            <a className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
             href="https://forms.office.com/r/vFmbpCrAEv?origin=lprLink">
              
              Start Implementation
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
