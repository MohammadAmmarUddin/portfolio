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
      className="relative pt-28 md:pt-36 mb-24 overflow-visible"
    >
      {/* Background Ambient Glows */}
      <div className="absolute -top-10 left-1/4 w-56 h-56 bg-cyan-500/30 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-72 h-72 bg-pink-500/40 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      {/* ✅ CENTERED CONTAINER (matches About section) */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
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
            I am a Software Engineer with expertise in full-stack development
            and a strong passion for building scalable, reliable systems.
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
          {/* Outer Halo */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-400/10 animate-halo" />

          {/* Orbit Rings */}
          <div className="absolute w-[380px] h-[380px] rounded-full border border-cyan-400/30 animate-spin-slow" />
          <div className="absolute w-[330px] h-[330px] rounded-full border border-purple-500/30 animate-reverse-spin" />

          {/* Main Circular Frame */}
          <div className="relative w-80 h-80 rounded-full p-2 bg-gradient-to-tr from-cyan-500/40 to-purple-500/30">
            {/* Inner Circle */}
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0b1120]">
              <img
                src={dp}
                alt="Ammar"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700 ease-out"
              />
            </div>
          </div>

          {/* EXPERIENCE CARD */}
          <div className="absolute bottom-4 right-0 translate-x-6 bg-black/70 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10 shadow-xl">
            <p className="text-[10px] tracking-widest text-gray-400 uppercase">
              Experience
            </p>
            <p className="text-cyan-400 text-lg font-semibold">1+ Years</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
