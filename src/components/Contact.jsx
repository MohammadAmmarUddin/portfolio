import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const handleSubmitMessage = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "2e78d586-95c4-4cac-8549-780f82495b0b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Thanks for contacting!",
        text: "We got your message!",
        icon: "success",
        background: "#0b1120",
        color: "#22d3ee",
        confirmButtonColor: "#22d3ee",
      });
      event.target.reset();
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 md:py-32 overflow-visible bg-transparent"
      name="contact"
    >
      {/* Background Ambient Glows (Matches Header) */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ✅ CENTERED CONTAINER (Matches Header) */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <div className="h-1.5 w-20 bg-cyan-400 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* ================= LEFT CONTENT ================= */}
          <div data-aos="fade-right" className="lg:w-1/2 space-y-10">
            <div>
              <h3 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                Let's <br />
                <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                  Connect
                </span>
              </h3>
              <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-md">
                I am always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="bg-cyan-400/10 p-4 rounded-2xl border border-cyan-400/20 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-500">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
                    Email Me
                  </p>
                  <p className="text-white text-lg font-medium break-all">
                    ammaruofficial@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="bg-cyan-400/10 p-4 rounded-2xl border border-cyan-400/20 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-500">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
                    Location
                  </p>
                  <p className="text-white text-lg font-medium">
                    Chattogram, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons (Matches Header Style) */}
            <div className="flex gap-4 pt-4">
              {[
                {
                  icon: FaLinkedin,
                  link: "https://www.linkedin.com/in/mohammad-ammar-uddin",
                },
                {
                  icon: FaFacebook,
                  link: "https://www.facebook.com/profile.php?id=61551789883517",
                },
                {
                  icon: FaGithub,
                  link: "https://github.com/MohammadAmmarUddin",
                },
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
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-500"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div data-aos="fade-left" className="lg:w-1/2 w-full relative">
            {/* The form box uses the same backdrop blur and dark background as the Header's experience card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <form
              onSubmit={handleSubmitMessage}
              className="relative bg-[#0b1120]/80 backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6"
            >
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400 ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-gray-600"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-gray-600"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white h-36 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none placeholder:text-gray-600"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 text-sm sm:text-base font-bold text-cyan-400 border border-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition duration-500 hover:shadow-[0_0_30px_rgba(0,238,255,0.6)] uppercase tracking-widest"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
