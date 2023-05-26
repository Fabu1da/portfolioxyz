import React from "react";
import { GoVerified } from "react-icons/go";
import { HiAcademicCap } from "react-icons/hi";
const Achievement = () => {
  return (
    <div className="md:p-20 p-5 bg-black" id="achievement">
      <div className="h-[5px] w-[60px] bg-orange-600  rounded-r-3xl" />
      <h1 className="headtext__base text-orange-600   my-3 text-semibold  text-[48px]">
        Personal Achievements
      </h1>

      <div className="flex md:flex-row flex-col gap-[20px] mt-10">
        <div className="border border-gray-900 p-10 rounded-3xl shadow-2xl shadow-gray-900">
          <HiAcademicCap className=" mb-3 text-white text-[50px]" />
          <h1 className="text-green-600 text-[20px] font-[600]">Bachelor</h1>
          <h4 className="text-white">Informtion Technology</h4>
          <p className="text-gray-500 text-[40px] font-[800] text-center">
            2021
          </p>
        </div>
        <div className="border border-gray-900 p-10 rounded-3xl shadow-2xl shadow-gray-900">
          <GoVerified className=" mb-3 text-white text-[50px]" />

          <h1 className="text-green-600 text-[20px] font-[600]">Cypress</h1>
          <h4 className="text-white">From Zero to Hero</h4>
          <p className="text-gray-500 text-[40px] font-[800] text-center">
            2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
