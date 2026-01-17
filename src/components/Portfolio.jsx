import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  console.log("portfolios", portfolios);

  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => setPortfolios(data));
  }, []);
  return (
    <div name="portfolio" className="pt-32 mb-10">
      <h2 className="text-center text-4xl mb-10 font-semibold text-sky-500">
        Portfolio
      </h2>
      <div className="projects p-5 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {portfolios.slice(0, visibleCount).map((data) => (
          <ProjectCard data={data} key={data.id}></ProjectCard>
        ))}
      </div>

      {visibleCount < portfolios.length && (
        <div className="flex justify-center">
          <button
            onClick={loadMore}
            className="btn font-semibold  hover:shadow-xl hover:shadow-[#00eeff] text-xl btn-outline border-[#00eeff] transition duration-1000 text-white  hover:bg-[#00eeff]"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
