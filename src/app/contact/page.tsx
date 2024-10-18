import Heading from "@/components/Heading";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="mb-20 ">
      <section className="bg-neutral-950">
        <div className="py-2 lg:py-2 mb-8 lg:mb-2 px-4 mx-auto max-w-screen-md">
          <Heading title=" Let's Talk Crypto" />
          <form action="#" className="space-y-8 mt-10">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm 0 border   text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-black border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm  rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-black border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium  text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500 bg-black border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="border text-sm font-medium w-full my-4 relative border-neutral-200 border-white/[0.2]  text-white px-6 py-4 rounded-full"
            >
              Send message
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>
          </form>
        </div>
      </section>

      <section className="bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <Heading
              title="Find Us Here"
              subtitle="Your Gateway to Vedark Support"
            />
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d461795.684417534!2d55.679367!3d25.278026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5929a229f1c75%3A0xb28ae30eb6bb813a!2sSharjah%20Media%20City%20(Shams)!5e0!3m2!1sen!2sin!4v1710591057154!5m2!1sen!2sin"
                  width="100%"
                  height="480"
                  loading="lazy"
                ></iframe>
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-slate-100">
                      Our Address
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Shams Business Center, Sharjah Media City free Zone, Al
                      Messaned, Sharjah, UAE.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-slate-100">
                      Hours
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Monday - Friday: 9am - 5pm
                    </p>
                    <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                    <p className="mt-1 text-gray-600">Sunday: Closed</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-slate-100">
                      Contact
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Email: vedarksouq@gmail.com
                    </p>
                    <a className="mt-1 text-gray-600" href="tel:971508201569">
                      Phone: +971 50 820 1569
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
