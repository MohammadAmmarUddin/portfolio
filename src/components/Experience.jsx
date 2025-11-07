import { SlActionRedo } from "react-icons/sl";

const Experience = () => {
  return (
    <div
      name="experience"
      className="relative py-20 bg-gradient-to-b from-black-900 to-black overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/30 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <h2 className="text-center text-4xl mb-10 font-semibold text-sky-400">
          Experience
        </h2>

        <div className="mx-auto md:w-9/12 bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-10 rounded-2xl text-white">
          <div className="md:flex items-center justify-between mb-4">
            <h2 className="font-bold md:text-xl text-center">@Digital Lab</h2>
            <p className="text-center text-gray-300">Chittagong, Bangladesh</p>
          </div>

          <div className="md:flex items-center justify-between mb-6">
            <h2 className="md:text-xl italic text-center text-sky-300">
              Trainee Jr. Software Engineer
            </h2>
            <p className="text-center text-gray-400">
              January 2025 – March 2025
            </p>
          </div>

          <div className="space-y-3">
            <span className="flex items-start">
              <SlActionRedo className="mr-2 mt-1 text-sky-400" />
              Engineered scalable web apps with Next.js, Prisma, and Redis,
              optimizing queries and caching for high performance.
            </span>

            <span className="flex items-start">
              <SlActionRedo className="mr-2 mt-1 text-sky-400" />
              Integrated SMS APIs and built an async SMS Scheduler with DB
              locking, reducing message delivery conflicts by 90%.
            </span>

            <span className="flex items-start">
              <SlActionRedo className="mr-2 mt-1 text-sky-400" />
              Gained deep expertise in RDBMS, focusing on transactions,
              concurrency, and data integrity across full-stack applications.
            </span>

            <span className="flex items-start">
              <SlActionRedo className="mr-2 mt-1 text-sky-400" />
              Deployed and maintained apps using Docker, CapRover, and
              cloud/Linux environments, cutting deployment time by 50%.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
