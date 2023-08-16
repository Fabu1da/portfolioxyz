import React from "react";

const About = () => {
  return (
    <div className="bg-black md:px-20 px-5" id="about">
      <div className="border border-gray-900 p-10 rounded-3xl shadow-2xl shadow-gray-900">
        <div className="h-[5px] w-[60px] bg-orange-600  rounded-r-3xl" />
        <h1 className="headtext__base text-orange-600   my-3 text-semibold  text-[48px]">
          About Me
        </h1>
        <p className="text-gray-400 text-[20px]">
          Have more than 3 years of experience in creating and maintaining
          functional, attractive and responsive web applications. Clear
          understanding for new technologies and best design practices. I have
          knowledge of popular frameworks such as React , Django and experience
          with REST API.
        </p>
        <h4 className="text-white font-[600] text-[20px] text-center md:text-left my-5">
          Work timeline
        </h4>
        <div className="flex md:flex-row flex-col gap-10">
          <div className="md:flex-1 flex flex-col md:items-start items-center">
            <div className="flex md:flex-row items-center w-full flex-col">
              <span className="text-white flex-1 mr-4">
                Mar, 2017 – Sept, 2019
              </span>{" "}
              <div className="w-full flex-1 h-[2px]  bg-orange-600  rounded-l-full" />
            </div>
            <p className="text-gray-400">Web developer</p>
            <p className=" text-green-600">Kigalishowz ltd</p>
            <div className="md:hidden block mt-3">
              <div className="w-[2px] flex-1 h-[50px] bg-blue-600 " />
            </div>
          </div>

          <div className="md:flex-1  flex flex-col md:items-start items-center">
            <div className="flex md:flex-row  items-center  w-full flex-col">
              <span className="text-white flex-1 mr-4">
                Apr, 2019 – Apr, 2020
              </span>{" "}
              <div className="w-full flex-1 h-[2px] bg-orange-600 rounded-l-full" />
            </div>
            <p className="text-gray-400">Full-stack developer</p>
            <p className=" text-green-600">Deelzil ltd</p>
            <div className="md:hidden block mt-3">
              <div className="w-[2px] flex-1 h-[50px] bg-blue-600 " />
            </div>
          </div>

          <div className="md:flex-1  flex flex-col md:items-start items-center">
            <div className=" flex md:flex-row w-full flex-col items-center">
              <span className="text-white flex-1 mr-4">
                Dec, 2020 – Oct, 2021
              </span>{" "}
              <div className="w-full flex-1 h-[2px] bg-orange-600 rounded-l-full" />
            </div>
            <p className="text-gray-400">Front-end developer</p>
            <p className=" text-green-600">Next Generation developer</p>
            <div className="md:hidden block mt-3">
              <div className="w-[2px] flex-1 h-[50px] bg-blue-600 " />
            </div>
          </div>

          <div className=" md:text-left  text-center">
            <p className="text-gray-400">Current</p>
            <p className=" text-yellow-600">Searching For Job/Studing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
