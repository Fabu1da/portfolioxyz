import { useState } from "react";
import {
  RiMenu3Line,
  RiCloseLine,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiHome2Line,
  RiProjector2Line,
  RiCodeLine,
  RiUser2Line,
  RiArchiveDrawerLine,
  RiContactsLine,
} from "react-icons/ri";
const NavBar = () => {
  const [smallScreenNav, setSmallScreenNav] = useState(false);
  const usehandleNavigation = () => {
    setSmallScreenNav((currentstate) => !currentstate);
  };
  return (
    <div className=" h-full   flex mx-2 content-center items-center z-10 fixed">
      <div className="bg-black md:h-[80%]  md:rounded-full shadow-md shadow-gray-600 flex content-between items-center z-10 fixed">
        <div className="flex flex-col justify-between items-center  mx-auto">
          <div className="bg-gray-700 text-gray-100 text-4xl p-2">FK</div>
          <div className=" flex flex-1 flex-col text-4xl   text-gray-100">
            <a className="p-2 " href="#home">
              <RiHome2Line />
            </a>

            <a className="p-2" href="#project">
              <RiProjector2Line />
            </a>
            <a className="p-2" href="#technology">
              <RiCodeLine />
            </a>
            <a className="p-2" href="#about">
              <RiUser2Line />
            </a>
            <a className="p-2" href="#achievement">
              <RiArchiveDrawerLine />
            </a>
            <a className="p-2" href="#contact">
              <RiContactsLine />
            </a>
          </div>
          <div className="text-gray-600  text-4xl flex flex-col gap-3">
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
    </div>
  );
};

export default NavBar;
