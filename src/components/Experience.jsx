import { SlActionRedo } from "react-icons/sl";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-20 bg-gradient-to-b from-black-900 to-black overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] md:w-[520px] h-[360px] md:h-[520px] bg-sky-500/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl mb-12 font-semibold text-sky-400 tracking-wide">
          Experience
        </h2>

        {/* ===== ScaleBridger ===== */}
        <div className="mx-auto md:w-9/12 bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl p-6 md:p-10 rounded-2xl text-white transition-all duration-300 md:hover:border-sky-400/40 md:hover:shadow-sky-500/10 mb-10">
          {/* Company */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
            <h3 className="font-semibold text-lg md:text-xl text-center md:text-left">
              @ScaleBridger
            </h3>
            <p className="text-center md:text-right text-gray-400 text-sm">
              Austin, TX 78731, USA
            </p>
          </div>

          {/* Role */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
            <h4 className="italic text-sky-300 text-center md:text-left font-medium">
              Junior Software Engineer
            </h4>
            <p className="text-center md:text-right text-gray-400 text-sm">
              April 2025 – Present
            </p>
          </div>

          {/* Points */}
          <ul className="space-y-4 text-sm md:text-base leading-relaxed">
            <li className="flex gap-3">
              <SlActionRedo className="mt-1 text-sky-400 shrink-0" />
              Built a production-grade OTA automation platform integrating
              Airbnb, Booking.com, Guesty, and Avantio APIs for real-time sync of
              reservations, availability, and pricing.
            </li>

            <li className="flex gap-3">
              <SlActionRedo className="mt-1 text-sky-400 shrink-0" />
              Developed scalable backend services with Express.js, MongoDB,
              TypeORM, and Redis, improving background job reliability and
              multi-channel data consistency.
            </li>

            <li className="flex gap-3">
              <SlActionRedo className="mt-1 text-sky-400 shrink-0" />
              Implemented secure authentication using Google OAuth, JWT, RBAC,
              and built real-time SSR dashboards with Next.js and WebSockets.
            </li>

            <li className="flex gap-3">
              <SlActionRedo className="mt-1 text-sky-400 shrink-0" />
              Integrated Stripe & CCAvenue and automated SMS/email workflows
              with Twilio and SendGrid.
            </li>
          </ul>
        </div>

        {/* ===== Digital Lab ===== */}
        <div className="mx-auto md:w-9/12 bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl p-6 md:p-10 rounded-2xl text-white transition-all duration-300 md:hover:border-sky-400/40 md:hover:shadow-sky-500/10">
          {/* Company */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
            <h3 className="font-semibold text-lg md:text-xl text-center md:text-left">
              @Digital Lab
            </h3>
            <p className="text-center md:text-right text-gray-400 text-sm">
              Chittagong, Bangladesh
            </p>
          </div>

          {/* Role */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
            <h4 className="italic text-sky-300 text-center md:text-left font-medium">
              Trainee Jr. Software Engineer
            </h4>
            <p className="text-center md:text-right text-gray-400 text-sm">
              January 2025 – March 2025
            </p>
          </div>

          {/* Points */}
          <ul className="space-y-4 text-sm md:text-base leading-relaxed">
            <li className="flex gap-3">
              <SlActionRedo className="mt-1 text-sky-400 shrink-0" />
              Engineered scalable apps with Next.js, Prisma, and Redis,
              optimizing queries and caching.
            </li>

            <li className="flex gap-3">
              <SlActionRedo className="mt-1 text-sky-400 shrink-0" />
              Built an async SMS scheduler with DB locking, reducing conflicts
              by 90%.
            </li>

            <li className="flex gap-3">
              <SlActionRedo className="mt-1 text-sky-400 shrink-0" />
              Developed strong expertise in RDBMS, transactions, and data
              integrity.
            </li>

            <li className="flex gap-3">
              <SlActionRedo className="mt-1 text-sky-400 shrink-0" />
              Deployed apps using Docker, CapRover, and Linux servers, cutting
              deployment time by 50%.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
