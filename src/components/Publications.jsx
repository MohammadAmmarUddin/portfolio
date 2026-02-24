import { FiExternalLink } from "react-icons/fi";

const Publications = () => {
  return (
    <section
      name="publications"
      id="publications"
      className="relative py-28 bg-[#060b1a] text-white overflow-hidden"
    >
      {/* Section Container */}
      <div className="max-w-6xl mx-auto px-6">
        {/* ================= TITLE ================= */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Academic <span className="text-cyan-400">Publications</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mt-4 rounded-full shadow-[0_0_15px_#00eeff]" />
        </div>

        {/* ================= PUBLICATION CARD ================= */}
        <div className="relative bg-[#0b1120]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 flex flex-col md:flex-row gap-10 hover:border-cyan-400/40 transition duration-500">
          {/* LEFT SIDE (Date + ID) */}
          <div className="md:w-1/4 border-r border-white/5 pr-6">
            <p className="text-xs tracking-widest text-gray-400 uppercase">
              Jan 2025
            </p>
            <h3 className="text-2xl font-bold text-gray-600 mt-3">PUB-2025</h3>
          </div>

          {/* RIGHT SIDE (Content) */}
          <div className="md:w-3/4 space-y-6">
            {/* Conference Name */}
            <p className="text-sm tracking-widest text-cyan-400 uppercase">
              2025 5th International Conference on Evolutionary Computing and
              Mobile Sustainable Networks (ICECMSN)
            </p>

            {/* Paper Title */}
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
              XAI-TransNet: Blood Cell Identification Using Deep Transfer
              Learning and Explainable AI Techniques
            </h3>

            {/* Publication Info */}
            <p className="text-xs text-gray-500 tracking-wider">
              Published: 2025 • IEEE Xplore Digital Library
            </p>

            {/* Abstract */}
            <p className="text-gray-400 leading-relaxed">
              This research introduces XAI-TransNet, a deep transfer learning
              framework for automated blood cell identification enhanced with
              Explainable AI (XAI) techniques. The study focuses on improving
              diagnostic accuracy while maintaining interpretability and
              transparency in medical decision-making systems.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1 text-xs rounded-full bg-white/5 border border-white/10">
                #Deep Learning
              </span>
              <span className="px-4 py-1 text-xs rounded-full bg-white/5 border border-white/10">
                #Transfer Learning
              </span>
              <span className="px-4 py-1 text-xs rounded-full bg-white/5 border border-white/10">
                #Explainable AI
              </span>
              <span className="px-4 py-1 text-xs rounded-full bg-white/5 border border-white/10">
                #Medical AI
              </span>
            </div>

            {/* Link */}
            <div className="pt-6 border-t border-white/5 flex justify-end">
              <a
                href="https://ieeexplore.ieee.org/document/11381641"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-white transition font-medium"
              >
                READ FULL PAPER
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
