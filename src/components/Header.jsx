import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import dp from "/ammar.png";

// ✅ Correct links
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between
      pt-28 md:pt-36 px-6 md:px-16 mb-24 overflow-visible"
    >
      {/* Background Ambient Glows */}
      <div className="absolute -top-10 left-1/4 w-56 h-56 bg-cyan-500/30 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-72 h-72 bg-pink-500/40 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      {/* ================= LEFT CONTENT ================= */}
      <div
        data-aos="fade-right"
        className="md:w-1/2 flex flex-col gap-6 text-center md:text-left z-10"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Hello, I'm <br />
          <span className="text-cyan-400 lg:text-6xl drop-shadow-lg">
            Mohammad Ammar Uddin
          </span>
        </h1>

        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-cyan-300">
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
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
          I am a Software Engineer with expertise in full-stack development and
          a strong passion for building scalable, reliable systems.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-5 pt-2">
          {[
            {
              icon: FaLinkedin,
              link: "https://www.linkedin.com/in/mohammad-ammar-uddin",
            },
            {
              icon: FaFacebook,
              link: "https://www.facebook.com/profile.php?id=61551789883517",
            },
            { icon: FaGithub, link: "https://github.com/ammarcse50" },
            {
              icon: FaWhatsapp,
              link: "https://api.whatsapp.com/send?phone=8801883128299",
            },
          ].map(({ icon: Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-cyan-400/10 transition duration-300"
            >
              <Icon className="text-3xl text-cyan-400 hover:text-white hover:drop-shadow-lg transition duration-300" />
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4 pt-4">
          {/* ✅ Route change */}
          <RouterLink to="/whatmademeunique">
            <button
              className="px-7 py-3 text-sm sm:text-base font-semibold text-cyan-400
              border border-cyan-400 rounded-xl
              hover:bg-cyan-400 hover:text-black transition duration-500
              hover:shadow-[0_0_30px_rgba(0,238,255,0.7)] backdrop-blur-md"
            >
              What Made Me Unique
            </button>
          </RouterLink>
        </div>
      </div>

      {/* ================= RIGHT IMAGE (DO NOT REMOVE ANYTHING) ================= */}
      <div
        data-aos="fade-left"
        className="md:w-1/3 relative flex justify-center items-center mt-20 md:mt-0 overflow-visible"
      >
        {/* Outer halo */}
        <div className="absolute w-[340px] h-[340px] rounded-full bg-cyan-400/10 animate-halo" />

        {/* Orbit rings */}
        <div className="absolute w-[300px] h-[300px] rounded-full border border-cyan-400/30 animate-spin-slow" />
        <div className="absolute w-[250px] h-[250px] rounded-full border border-purple-500/30 animate-reverse-spin" />

        {/* Floating particles */}
        <span className="pointer-events-none absolute -top-6 -left-6 w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-80" />
        <span className="pointer-events-none absolute bottom-[5%] right-[8%] w-2 h-2 bg-pink-400 rounded-full animate-float-slow opacity-70" />
        <span className="pointer-events-none absolute top-[15%] right-[6%] w-2.5 h-2.5 bg-purple-400 rounded-full animate-float opacity-60" />

        {/* Glass orb */}
        <div className="absolute w-64 h-64 rounded-full bg-white/10 backdrop-blur-2xl border border-white/30 shadow-[inset_0_0_60px_rgba(0,238,255,0.5)]" />

        {/* Profile image */}
        <div className="relative w-52 h-52 rounded-full overflow-hidden shadow-[0_0_40px_rgba(0,238,255,0.9)] group">
          <img
            src={dp}
            alt="Ammar"
            className="w-full h-full object-cover scale-110
            group-hover:scale-125 transition duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/20 opacity-70" />
        </div>

        {/* Name tag under pic */}
        <div className="absolute -bottom-12 text-center">
          <p className="text-cyan-400 tracking-[.3em] text-xs uppercase">
            Full-Stack Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
