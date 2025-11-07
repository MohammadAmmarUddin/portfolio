import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import dp from "/ammar.png";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Header = () => {
  return (
    <div
      name="home"
      className="relative flex flex-col md:flex-row items-center justify-between pt-28 md:pt-32 px-6 md:px-16 mb-20"
    >
      {/* Background Glow Circles */}
      <div className="absolute top-10 left-1/4 w-52 h-52 bg-[#00eeff]/30 rounded-full filter blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-pink-400/50 rounded-full filter blur-3xl animate-pulse-slow pointer-events-none" />

      {/* Left Text Section */}
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="md:w-1/2 flex flex-col space-y-6 text-center md:text-left relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
          Hello, I'm <br />
          <span className="text-[#00eeff] lg:text-6xl">
            Mohammad Ammar Uddin
          </span>
        </h2>

        <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#00eeff]">
          <TypeAnimation
            sequence={[
              "I build things for the web.",
              1500,
              "Full-Stack Developer",
              1500,
              "MERN Stack Developer",
              1500,
              "Backend Developer",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
          Junior Software Engineer | Full-Stack Developer | Problem Solver.
          Motivated and detail-oriented with hands-on experience in building
          scalable web applications. Proficient in C/C++, JavaScript,
          TypeScript, and Python. Passionate about solving complex problems and
          delivering clean, maintainable code.{" "}
          <a
            href="https://www.linkedin.com/in/mohammad-ammar-uddin"
            className="text-[#00eeff] underline hover:text-white transition"
          >
            Learn More
          </a>
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-2">
          <a href="https://www.linkedin.com/in/mohammad-ammar-uddin">
            <FaLinkedin className="text-4xl text-[#00eeff] hover:text-white hover:shadow-lg hover:shadow-[#00eeff]/50 transition duration-300" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61551789883517">
            <FaFacebook className="text-4xl text-[#00eeff] hover:text-white hover:shadow-lg hover:shadow-[#00eeff]/50 transition duration-300" />
          </a>
          <a href="https://github.com/ammarcse50">
            <FaGithub className="text-4xl text-[#00eeff] hover:text-white hover:shadow-lg hover:shadow-[#00eeff]/50 transition duration-300" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=8801883128299">
            <FaWhatsapp className="text-4xl text-[#00eeff] hover:text-white hover:shadow-lg hover:shadow-[#00eeff]/50 transition duration-300" />
          </a>
        </div>

        {/* Resume Button */}
        <a
          className="block lg:hidden mt-6"
          href="/Mohammad_Ammar_Uddin_FullStackDeveloper.pdf"
          download
        >
          <button className="btn font-semibold hover:shadow-xl hover:shadow-[#00eeff]/50 text-lg btn-outline border-[#00eeff] transition duration-500 text-white hover:bg-[#00eeff] rounded-lg px-6 py-3">
            Resume
          </button>
        </a>
      </div>

      {/* Right Image Section */}
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="md:w-1/3 relative mx-auto mt-10 md:mt-0"
      >
        {/* Glass Effect Around Image */}
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white/60 backdrop-blur-md shadow-[0_0_60px_#00eeff] animate-pulse-slow"></div>
        <img
          src={dp}
          className="relative rounded-full border-4 border-[#00eeff]/60 shadow-lg"
          alt="Ammar"
        />
      </div>
    </div>
  );
};

export default Header;
