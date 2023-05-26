import { useState } from "react";
import {
  RiMenu3Line,
  RiCloseLine,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";
const NavBar = () => {
  const [smallScreenNav, setSmallScreenNav] = useState(false);
  const usehandleNavigation = () => {
    setSmallScreenNav((currentstate) => !currentstate);
  };
  return (
    <div className="bg-black w-full z-10 fixed">
      <div className="flex justify-between items-center md:px-20 mx-auto">
        <div className="bg-gray-700 text-gray-100 text-4xl p-2">FK</div>
        <div className=" hidden  md:block text-gray-100">
          <a className="p-2" href="#home">
            Home
          </a>

          <a className="p-2" href="#project">
            Projects
          </a>
          <a className="p-2" href="#technology">
            Technology
          </a>
          <a className="p-2" href="#about">
            About Me
          </a>
          <a className="p-2" href="#achievement">
            Achievement
          </a>
          <a className="p-2" href="#contact">
            Contact
          </a>
        </div>
        <div className="text-gray-600 text-4xl flex gap-3">
          <a href="https://www.instagram.com/fabu1da/">
            <RiInstagramFill />
          </a>
          <a href="https://www.facebook.com/kavuganyi.fabius/">
            <RiFacebookFill />
          </a>
          <a href="https://www.linkedin.com/in/kavuganyi-fabien-717a46202/">
            <RiLinkedinFill />
          </a>
          <a href="https://github.com/Fabu1da">
            <RiGithubFill />
          </a>
        </div>
        <div className="md:hidden text-gray-100 text-4xl mr-2">
          {smallScreenNav ? (
            <RiCloseLine onClick={usehandleNavigation} />
          ) : (
            <RiMenu3Line onClick={usehandleNavigation} />
          )}
        </div>
      </div>
      {smallScreenNav && (
        <div className="text-white flex flex-col transition duration-150 ease-in-out">
          <a className="p-4 border-b border-b-gray-800" href="#home">
            Home
          </a>
          {/* <a className="p-2" href="">
            Feature
          </a> */}
          <a className="p-4 border-b border-b-gray-800" href="#project">
            Projects
          </a>
          <a className="p-4 border-b border-b-gray-800" href="#technology">
            Technology
          </a>
          <a className="p-4 border-b border-b-gray-800" href="#achievement">
            Achievement
          </a>
          <a className="p-4" href="#contact">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
