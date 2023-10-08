import React from "react";
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMailFill,
  RiPhoneFill,
} from "react-icons/ri";

const Contact = () => {
  return (
    <div className="bg-slate-800  md:p-20 p-5" id="contact">
      <div className="h-[5px] w-[60px] bg-orange-600  rounded-r-3xl" />
      <h1 className="headtext__base text-orange-600   my-3 text-semibold  text-[48px]">
        Contact
      </h1>

      <div className="flex flex-col">
        <div className=" my-8">
          <div className=" flex md:flex-row flex-col md:gap-[100px] g-[30px] md:max-w-[900px]">
            <div className="flex-1  text-white text-[25px] flex flex-col items-start">
              <h1 className=" text-xl uppercase font-[600] text-white text-[20px] mb-[20px]">
                Call
              </h1>
              <span className="text-gray-400 text-[18px] flex flex-row gap-4 items-center cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="bg-gray-900  flex items-center  justify-center rounded-full h-[50px] w-[50px]">
                  <RiPhoneFill className="text-[25px]" />
                </div>
                (+49) 015 7815 02431
              </span>
            </div>
            <div className=" flex-1 text-white text-[25px] flex flex-col items-start">
              <h1 className=" text-xl  uppercase font-[600] text-white text-[20px] mb-[20px]">
                E-mail
              </h1>
              <span className="text-gray-400 cursor-pointer text-[18px] flex flex-row gap-4 items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="bg-gray-900  flex items-center justify-center rounded-full h-[50px] w-[50px]">
                  <RiMailFill className="text-[25px]" />
                </div>
                fabiusyy@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-between items-center  ">
          <div className=" text-[23px] text-white">Social Media</div>
          <div className=" flex flex-row text-[23px]  text-white">
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
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
