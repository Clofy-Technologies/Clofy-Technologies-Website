import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function ServiceS8() {
  const navigate = useNavigate();
  return (
    <>
      <section className="pb-[120px] pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-8 border-b-2 border-blue-200 pb-4">
            Low-Code/No-Code Development Services
          </h1>

          <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
            <img
              src="\Low-CodeNo-Code Development Services.png"
              alt="Low-Code Development"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Rapid Application Development
            </h2>
            <ul className="list-disc pl-6 space-y-4">
              <li className="text-gray-700 text-lg">
                <strong>Visual Development Tools:</strong> Drag-and-drop interface builders
              </li>
              <li className="text-gray-700 text-lg">
                <strong>Pre-Built Templates:</strong> Accelerated solution deployment
              </li>
              <li className="text-gray-700 text-lg">
                <strong>Workflow Automation:</strong> Streamlined business process digitization
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Accelerated Development
              </h3>
              <p className="text-gray-600">
                Rapid prototyping and deployment of business applications
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Cost Efficiency
              </h3>
              <p className="text-gray-600">
                Reduced development time and resource requirements
              </p>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Accelerate Your Development?
            </h2>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors" 
            onClick={() => navigate('/contact-us')}>
              Start Building
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
