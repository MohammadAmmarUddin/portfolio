import { Link } from "react-scroll";

const Navbar = () => {
  const navlinks = (
    <>
      <Link
        to="home"
        activeClass="bg-[#00eeff] text-black text-2xl rounded-lg"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <li>
          <a className=" text-2xl">Home</a>
        </li>{" "}
      </Link>
      <Link
        to="about"
        activeClass="bg-[#00eeff] text-black text-2xl rounded-lg"
        spy={true}
        smooth={true}
        offset={-40}
        duration={500}
      >
        <li>
          <a className=" text-2xl">About Me</a>
        </li>{" "}
      </Link>
      <Link
        to="experience"
        activeClass="bg-[#00eeff] text-black text-2xl rounded-lg"
        spy={true}
        smooth={true}
        offset={5}
        duration={500}
      >
        <li>
          <a className="text-2xl">Experience</a>
        </li>{" "}
      </Link>
      <Link
        to="services"
        activeClass="bg-[#00eeff] text-black text-2xl rounded-lg"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        <li>
          <a className=" text-2xl">Services</a>
        </li>{" "}
      </Link>
      <Link
        to="portfolio"
        activeClass="bg-[#00eeff] text-black text-2xl rounded-lg"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <li>
          <a className=" text-2xl">Portfolio</a>
        </li>{" "}
      </Link>
      <Link
        to="contact"
        activeClass="bg-[#00eeff] text-black text-2xl rounded-lg"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <li>
          <a className=" text-2xl">Contact</a>
        </li>{" "}
      </Link>

      <a
        className="hidden lg:block"
        href="/Mohammad_Ammar_Uddin_FullStackDeveloper.pdf"
        download={true}
      >
        <button className="btn font-semibold hover:shadow-xl hover:shadow-[#00eeff] text-xl btn-outline border-[#00eeff] transition duration-1000 text-white  hover:bg-[#00eeff]">
          Resume
        </button>
      </a>
    </>
  );
  return (
    <div className="!fixed !top-0 z-[1000] w-full py-4  bg-base-100 shadow-lg  ">
      <div className="flex justify-between max-w-6xl mx-auto">
        <div className="">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 `}
            >
              {navlinks}
            </ul>
          </div>
          <a
            href="home"
            className="px-3 hover:animate-pulse transition duration-1000 hover:text-[#00eeff] rounded-xl text-5xl font-bold font-signature text-sky-500 "
          >
            A <span className="text-white ">mmar</span>
          </a>
        </div>
        <div className="hidden lg:flex ">
          <ul className="menu menu-horizontal">{navlinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
