import { useEffect } from "react";
import AOS from "aos";
import { SlActionRedo } from "react-icons/sl";
import "aos/dist/aos.css";

const services = [
  {
    title: "Full Stack Product Development",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3",
    items: [
      "Ship full-scale products using React / Next.js with scalable backends.",
      "Integrate payments, real-time systems, and API gateways.",
      "API-first architecture with clean system design.",
      "Fully responsive, accessible UI/UX.",
      "Performance optimization, caching, and scale tuning.",
    ],
  },
  {
    title: "CI/CD & DevOps Automation",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.dnKkNkwxRb1EU6qt3oxAewHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    items: [
      "Build delivery pipelines with GitHub Actions CI/CD.",
      "Automate builds, tests, and rollouts with zero-downtime deployments.",
      "Progressive delivery using canary releases and feature flags.",
      "Test automation with enforced quality gates.",
      "Release governance, observability, and production monitoring.",
    ],
  },

  {
    title: "Cloud & Platform Engineering",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.Dra71NKSVOOG29uahX5g3gHaF7?rs=1&pid=ImgDetMain&o=7&rm=3",
    items: [
      "Microservice architecture with scalable container orchestration.",
      "Service discovery, secure networking, and traffic management.",
      "Security hardening, secrets management, and access control.",
    ],
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      name="services"
      className="relative pt-28 pb-20 px-4 text-white overflow-hidden"
    >
      {/* Neon glow */}
      {/* Soft ambient edge light */}
      <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-sky-500/10 blur-[180px] opacity-0 group-hover:opacity-100 hover:shadow-sky-500/10 transition-all duration-700" />

      {/* Section Header */}
      <div data-aos="fade-up" className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-sky-400 tracking-wide">
          My Services
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          High-impact engineering & delivery solutions
        </p>
        <div className="mt-5 h-[2px] w-32 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto" />
      </div>

      {/* Static Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-sky-500/20"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Image */}
            <div className="relative h-[240px] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative p-7 flex flex-col gap-5">
              <h3 className="text-xl font-bold text-sky-400">
                {service.title}
              </h3>

              <div className="space-y-3 text-sm text-gray-300">
                {service.items.map((item, i) => (
                  <p key={i} className="flex gap-2 leading-relaxed">
                    <SlActionRedo className="text-sky-400 mt-1 flex-shrink-0" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
