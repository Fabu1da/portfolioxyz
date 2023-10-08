import React from "react";
import Image from "next/image";
import hero from "../../../public/11.png";

import {
  SiHtml5,
  SiBootstrap,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
const Feature = ({ handleDownload }) => {
  return (
    <div className="md:flex  justify-center   items-center mx-auto relative md:h-[80vh]">
      <div className="flex justify-center  md:px-14">
        <div className="border-2 border-transparent h-[200px] w-[400px] bg-[#ffffff2f] rounded-[1rem] relative">
          <div className="relative h-98 w-12  ">
            <div className="absolute bottom-0 left-0 h-36 w-full bg-blue-600/[.06] rounded-bl-lg"></div>
          </div>
          <div className=" absolute bottom-0 overflow-hidden  flex aspect-square scale-[130%]  flex-col    items-center justify-center">
            <Image
              src={hero}
              alt=""
              className="absolute bottom-0 brightness-75  hover:-translate-y-1 hover:scale-[110%] drop-shadow-2xl shadow-slate-300 duration-300 "
            />
          </div>
          <div className="relative h-full w-12  ">
            <div className="absolute top-0 right-0 h-24 w-full bg-green-600/[.06] rounded-tr-lg"></div>
          </div>
        </div>
      </div>
      <div className=" p-8 md:w-1/2 ">
        <h1 className="text-4xl md:text-6xl text-white font-bold">
          Fabien <span className="text-blue-600">Kavuganyi</span>
        </h1>
        <div className="my-4 under__title text-gray-200 text-2xl text-italic">
          Frontend developer
        </div>
        <div className="transition ease-in-out duration-500 delay-150 text-white font-light border-l-8  border-gray-400 hover:border-l-8 pl-3 hover:border-blue-500 whitespace-normal">
          Front end developer who focuses on writing clean, elegant and
          effective code. Love HTML, CSS, NextJs, ReactJs and JavaScripts
        </div>

        <p className="my-5 text-gray-200 under__title">Main Technology </p>
        <div className="flex text-white flex-wrap flex-row  justify-start flex-1 gap-3 mb-10 ">
          <SiHtml5 style={{ fontSize: "50px", color: "#f06529" }} />
          <SiCss3 style={{ fontSize: "50px", color: "#800000" }} />
          <SiJavascript style={{ fontSize: "50px", color: "#F0DB4F" }} />
          <SiBootstrap style={{ fontSize: "50px", color: "#e040fb" }} />
          <SiTailwindcss style={{ fontSize: "50px", color: "#e3342f" }} />
          <SiReact style={{ fontSize: "50px", color: "#61dbfb" }} />
          <SiNextdotjs style={{ fontSize: "50px", color: "#45ce05" }} />
        </div>
        <button
          onClick={handleDownload}
          className="border-2 border-orange-800 px-10 py-5 rounded-full text-orange-800 hover:text-white hover:bg-orange-800 mt-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
        >
          Get My CV here
        </button>
      </div>
    </div>
  );
};

export default Feature;
