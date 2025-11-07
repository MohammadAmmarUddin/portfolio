import AOS from "aos";
import { SlActionRedo } from "react-icons/sl";
AOS.init();

const Services = () => {
  return (
    <div name="services" className="pt-32 p-4 relative">
      {/* soft gradient overlay */}
      <div className="absolute inset-0 pointer-events-none"></div>

      <h2 className="text-center text-4xl mb-10 font-semibold text-sky-500 drop-shadow-[0_0_10px_#00eeff]">
        My Services
      </h2>
      <hr className="mb-6 border-[#00eeff]/40 w-1/2 mx-auto" />

      <div className="lg:flex p-3 lg:p-0 justify-between gap-10 relative z-10">
        {/* Frontend */}
        <div
          data-aos="fade-up-right"
          data-aos-duration="1000"
          className="relative lg:w-1/2 mb-8 lg:mb-0"
        >
          {/* glow light behind */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-1/3 bg-[#00eeff]/30 blur-3xl rounded-full opacity-70"></div>

          {/* glass card */}
          <div className="relative rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#00eeff]/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-10 text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-[#00eeff]/30 space-y-2">
            <h2 className="text-xl md:text-3xl font-semibold mb-6 text-sky-400">
              Frontend Services
            </h2>
            <div className="space-y-2">
              {[
                "Integrate third-party APIs (e.g., SMS) with Axios for seamless communication.",
                "Build responsive, interactive UIs with React and Next.js.",
                "Optimize performance with TanstackQuery and efficient state management.",
                "Develop mobile-first, SEO-friendly apps using HTML, CSS, and JavaScript.",
              ].map((text, i) => (
                <span key={i} className="flex items-start">
                  <SlActionRedo className="mr-2 mt-1 text-[#00eeff]" />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Backend */}
        <div
          data-aos="fade-up-left"
          data-aos-duration="1000"
          className="relative lg:w-1/2"
        >
          {/* glow light behind */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-1/3 bg-[#00eeff]/50 blur-3xl rounded-full opacity-70"></div>

          {/* glass card */}
          <div className="relative rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#00eeff]/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-10 text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-[#00eeff]/30 space-y-2">
            <h2 className="text-xl md:text-3xl font-semibold mb-6 text-sky-400">
              Backend Services
            </h2>
            <div className="space-y-2">
              {[
                "Create scalable APIs and backend systems using Node.js, Express.js, and MongoDB.",
                "Design and manage databases with MySQL, MariaDB, and MongoDB.",
                "Implement secure JWT authentication and role-based access control.",
                "Deploy applications using Docker, CapRover, and cloud services for continuous delivery.",
              ].map((text, i) => (
                <span key={i} className="flex items-start">
                  <SlActionRedo className="mr-2 mt-1 text-[#00eeff]" />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
