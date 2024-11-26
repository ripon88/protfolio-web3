import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="glass-effect flex justify-between items-center h-20 max-w-full  px-4">
      <h1 className="text-3xl py-2 font-bold text-gredient">Rezaul Karim</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex md:items-center text-lg">
        {["Home", "Projects", "Skills", "Contact me"].map((item, index) => (
          <Link
            key={index}
            to={item === "Projects" ? "MyProjects" : item}
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onClick={closeNav}
          >
            <li className="cursor-pointer p-4 hover:bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 hover:bg-clip-text hover:text-transparent duration-400">
              {item}
            </li>
          </Link>
        ))}
        <li className=" hover:text-[#00df9a] duration-400">
          <ThemeToggle />
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer ">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          nav
            ? "fixed left-0 top-0 w-[70%] h-full bg-[#2bbd8f] opacity-90 ease-out duration-500 z-[100000]"
            : "fixed left-[-100%]"
        } md:hidden`}
      >
        <ul className="pt-24 uppercase">
          {["Home", "Projects", "Skills", "Contact me"].map((item, index) => (
            <Link
              key={index}
              to={item === "Projects" ? "MyProjects" : item}
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={closeNav}
            >
              <li className="p-4 duration-400 text-center border-b border-b-[#ffffff]">
                {item}
              </li>
            </Link>
          ))}
          <li className="p-4 duration-400 text-center border-b border-b-[#ffffff]">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
