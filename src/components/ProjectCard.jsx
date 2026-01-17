import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const ProjectCard = ({ data }) => {
  const { img, title, desc, live, link1, link2, link3 } = data;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="card card-compact border xl:p-3 bg-base-100 shadow-xl hover:shadow-lg hover:shadow-[#00eeff] flex flex-col h-full"
    >
      {/* Image */}
      <figure>
        <img
          src={img}
          alt={title}
          className="w-full h-[200px] object-cover rounded-lg"
        />
      </figure>

      {/* Body */}
      <div className="card-body flex flex-col justify-between flex-1">
        <div>
          <h2 className="card-title">{title}</h2>

          {/* 🔥 Clamped Description */}
          <p className="text-lg font-semibold line-clamp-3 overflow-hidden text-ellipsis min-h-[72px]">
            {desc}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between flex-wrap gap-3 mt-4">
          {live && (
            <a href={live} target="_blank" rel="noreferrer">
              <button className="btn font-semibold hover:shadow-xl hover:shadow-[#00eeff] text-lg btn-outline border-[#00eeff] transition duration-700 text-white hover:bg-[#00eeff]">
                Live Site
              </button>
            </a>
          )}

          {!live && link1 && (
            <a href={link1} target="_blank" rel="noreferrer">
              <button className="btn font-semibold hover:shadow-xl hover:shadow-[#00eeff] text-lg btn-outline border-[#00eeff] transition duration-700 text-white hover:bg-[#00eeff]">
                Demo
              </button>
            </a>
          )}

          {!live && link2 && (
            <a href={link2} target="_blank" rel="noreferrer">
              <button className="btn font-semibold hover:shadow-xl hover:shadow-[#00eeff] text-lg btn-outline border-[#00eeff] transition duration-700 text-white hover:bg-[#00eeff]">
                Client
              </button>
            </a>
          )}

          {!live && link3 && (
            <a href={link3} target="_blank" rel="noreferrer">
              <button className="btn font-semibold hover:shadow-xl hover:shadow-[#00eeff] text-lg btn-outline border-[#00eeff] transition duration-700 text-white hover:bg-[#00eeff]">
                Server
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
