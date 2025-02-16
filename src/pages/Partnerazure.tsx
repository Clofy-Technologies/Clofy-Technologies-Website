import { FaMicrosoft, FaChartLine, FaHandsHelping } from 'react-icons/fa';

const Partnerazure = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  CLOFY Technologies Joins Microsoft for Startups!
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We're thrilled to announce that <strong>CLOFY Technologies</strong> is now part of the <strong>Microsoft for Startups program!</strong><br /><br />
                  This partnership provides access to Azure cloud credits, technical support, and market opportunities. We're leveraging Microsoft's ecosystem to deliver enterprise-grade solutions and accelerate digital transformation.<br /><br />
                  <strong>Thank you, Microsoft, for powering our innovation journey!</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0">
              <img
                src="\about-image.png"
                alt="Microsoft partnership"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 text-4xl text-blue-600">
              <FaMicrosoft className="inline-block" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Azure Integration</h3>
            <p className="text-gray-600">Seamless integration with Microsoft Azure services</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 text-4xl text-blue-600">
              <FaChartLine className="inline-block" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Enterprise Solutions</h3>
            <p className="text-gray-600">Scalable cloud architecture for business growth</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 text-4xl text-blue-600">
              <FaHandsHelping className="inline-block" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Technical Support</h3>
            <p className="text-gray-600">Dedicated Microsoft-certified engineers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerazure;
