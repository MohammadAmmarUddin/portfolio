import { useState } from "react";
import { Link } from "react-scroll";

const NAV_OFFSET = -90; // fixed navbar offset

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const navlinks = (
    <>
      <li>
        <Link
          to="home"
          spy
          smooth
          offset={NAV_OFFSET}
          duration={500}
          onClick={closeMenu}
          activeClass="bg-[#00eeff] text-black rounded-lg"
          className="cursor-pointer text-2xl px-3 py-1"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to="about"
          spy
          smooth
          offset={NAV_OFFSET}
          duration={500}
          onClick={closeMenu}
          activeClass="bg-[#00eeff] text-black rounded-lg"
          className="cursor-pointer text-2xl px-3 py-1"
        >
          About Me
        </Link>
      </li>

      <li>
        <Link
          to="experience"
          spy
          smooth
          offset={NAV_OFFSET}
          duration={500}
          onClick={closeMenu}
          activeClass="bg-[#00eeff] text-black rounded-lg"
          className="cursor-pointer text-2xl px-3 py-1"
        >
          Experience
        </Link>
      </li>

      {/* <li>
        <Link
          to="services"
          spy
          smooth
          offset={NAV_OFFSET}
          duration={500}
          onClick={closeMenu}
          activeClass="bg-[#00eeff] text-black rounded-lg"
          className="cursor-pointer text-2xl px-3 py-1"
        >
          Services
        </Link>
      </li> */}

      <li>
        <Link
          to="portfolio"
          spy
          smooth
          offset={NAV_OFFSET}
          duration={500}
          onClick={closeMenu}
          activeClass="bg-[#00eeff] text-black rounded-lg"
          className="cursor-pointer text-2xl px-3 py-1"
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          to="publications"
          spy
          smooth
          offset={NAV_OFFSET}
          duration={500}
          onClick={closeMenu}
          activeClass="bg-[#00eeff] text-black rounded-lg"
          className="cursor-pointer text-2xl px-3 py-1"
        >
          Publication
        </Link>
      </li>

      <li>
        <Link
          to="contact"
          spy
          smooth
          offset={NAV_OFFSET}
          duration={500}
          onClick={closeMenu}
          activeClass="bg-[#00eeff] text-black rounded-lg"
          className="cursor-pointer text-2xl px-3 py-1"
        >
          Contact
        </Link>
      </li>

      <li className="hidden lg:block ml-4">
        <a
          href="/Mohammad_Ammar_Uddin_FullStackDeveloper.pdf"
          download
          className="btn font-semibold text-xl btn-outline border-[#00eeff] text-white transition duration-700 hover:bg-[#00eeff] hover:text-black hover:shadow-xl hover:shadow-[#00eeff]"
        >
          Resume
        </a>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 z-[1000] w-full bg-base-100 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-4">
        {/* Logo */}
        <Link
          to="home"
          smooth
          offset={NAV_OFFSET}
          duration={500}
          className="px-3 text-5xl font-bold font-signature text-sky-500 cursor-pointer hover:text-[#00eeff] transition duration-700"
        >
          A<span className="text-white">mmar</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex menu menu-horizontal items-center gap-1">
          {navlinks}
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="lg:hidden absolute top-full left-4 right-4 mt-2 menu p-4 shadow bg-base-100 rounded-box z-[999]">
          {navlinks}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
