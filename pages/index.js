import NavBar from "./widget/navBar";
// import Footer from "./widget/footer";
import Project from "./components/project/project";

import Image from "next/image";
import hero from "../public/1.jpg";

import Contact from "./widget/contact";
import {
  SiHtml5,
  SiBootstrap,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
import Technology from "./components/technology/technology";
import About from "./components/aboutme/about";
import Achievement from "./components/achivement/achievement";
// const cv_url = "https://localhost:3000/pdf/Fabien_Kavuganyi_cv.pdf";

export default function Home() {
  const handleDownload = () => {
    const filename = "Fabien_Kavuganyi_cv.pdf";
    const a = document.createElement("a");
    a.href =
      "https://drive.google.com/file/d/1bt6uBVRtyi7K7q8t4FZbdo9Rp_LQvNJm/view?usp=share_link";
    a.setAttribute("download", filename);
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  return (
    <>
      <NavBar />
      <div className="main__bg font-bold pt-28 pb-8  " id="home">
        {/* containt */}
        <div className="container  md:flex  justify-center items-center mx-auto relative overflow-hidden h-max  md:h-full ">
          <div className=" flex justify-center  overflow-hidden md:px-14">
            <div className="relative h-98 w-12  ">
              <div className="absolute bottom-0 left-0 h-36 w-full bg-blue-600/[.06] rounded-bl-lg"></div>
            </div>

            <div className="relative overflow-hidden  rounded-tl-lg rounded-br-lg w-96  border-t-6 border-indigo-200 border-t-indigo-500">
              <Image
                src={hero}
                alt=""
                className=" p-0 scale-125 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150  duration-300"
              />
            </div>
            <div className="relative h-full w-12  ">
              <div className="absolute top-0 right-0 h-24 w-full bg-green-600/[.06] rounded-tr-lg"></div>
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
        <div className="ml-20 h-[5px] w-[60px] bg-orange-600 mt-20  rounded-r-3xl" />
        <h1 className="headtext__base text-orange-600 ml-20 my-3 text-semibold  text-[48px]">
          Project
        </h1>

        <Project />
      </div>
      <Technology />
      <About />
      <Achievement />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}
