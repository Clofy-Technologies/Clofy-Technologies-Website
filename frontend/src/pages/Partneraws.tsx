import { FaAws, FaShieldAlt, FaHandsHelping } from 'react-icons/fa';

const Partneraws = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  CLOFY Technologies Joins AWS Activate Program!
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We're proud to announce that <strong>CLOFY Technologies</strong> is now part of the prestigious <strong>AWS Activate Program!</strong><br /><br />
                  This partnership gives us access to AWS's advanced cloud tools and resources, enabling us to enhance our training programs and deliver scalable cloud solutions. Together, we're empowering businesses to leverage cutting-edge cloud technology.<br /><br />
                  <strong>Thank you, AWS Activate Program, for helping us drive cloud innovation forward!</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0">
              <img
                src="\AWS activate for Startups_Clofy_Transparent.png"
                alt="AWS partnership"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 text-4xl text-orange-600">
              <FaAws className="inline-block" />
            </div>
            <h3 className="mb-3 text-xl font-bold">AWS Cloud Expertise</h3>
            <p className="text-gray-600">Certified solutions using Amazon Web Services infrastructure</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 text-4xl text-orange-600">
              <FaShieldAlt className="inline-block" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Secure Architecture</h3>
            <p className="text-gray-600">Enterprise-grade security with AWS best practices</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 text-4xl text-orange-600">
              <FaHandsHelping className="inline-block" />
            </div>
            <h3 className="mb-3 text-xl font-bold">AWS Support</h3>
            <p className="text-gray-600">24/7 support from AWS-certified cloud experts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partneraws;
