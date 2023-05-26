import React from "react";
import {
  RiCompasses2Fill,
  RiDatabase2Fill,
  RiReactjsFill,
} from "react-icons/ri";

const Technology = () => {
  return (
    <div className="p-20 bg-black" id="technology">
      <div className="h-[5px] w-[60px] bg-orange-600  rounded-r-3xl" />
      <h1 className="headtext__base text-orange-600   my-3 text-semibold  text-[48px]">
        Technology
      </h1>
      <p className=" text-[20px] leading-10 text-white mt-5 mb-8">
        I have worked with a range a technologies in the web development world.
        From Back-end To Design
      </p>

      <div className="flex flex-wrap md:flex-row flex-col gap-[30px]">
        <div className="flex-1">
          <RiReactjsFill className="text-orange-600 text-[50px]" />
          <h1 className="font-[600] text-white text-[30px]">Front-End</h1>

          <p className="text-gray-200 mt-5 text-[20px]">
            Experiece with React.js and NextJS
          </p>
        </div>
        <div className="flex-1">
          <RiDatabase2Fill className="text-orange-600 text-[50px]" />
          <h1 className="font-[600] text-white text-[30px]">Back-End</h1>
          <p className="text-gray-200 mt-5 text-[20px]">
            Experience with Django, Node and Databases
          </p>
        </div>
        <div className="flex-1">
          <RiCompasses2Fill className="text-orange-600 text-[50px]" />
          <h1 className="font-[600] text-white text-[30px]">UI/UX</h1>
          <p className="text-gray-200 mt-5 text-[20px]">
            Experience with tools like Figma, Photoshop and Illustrator
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
