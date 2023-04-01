import React from "react";

const Contact = () => {
  return (
    <div className="bg-slate-800  p-2 pb-8 md:p-8" id="contact">
      <div className="text-center text-4xl text-white font-bold my-8">
        Contact / Social Media
      </div>

      <div className="grid grid-cols-2 w-full gap-2 md:grid-cols-2 md:gap-6 md:w-7/8 mx-auto md:my-5">
        <div className="relative rounded-md overflow-hidden shadow-2xl p-3 md:p-10 text-white ">
          <h1 className=" text-xl text-white font-bold mb-5">
            Personal Contact
          </h1>
          <div className=" flex flex-col">
            <span className="">(+49) 015 7815 02431</span>
            <span className="">fabiusyy@gmail.com</span>
          </div>
        </div>

        <div className="relative rounded-md overflow-hidden shadow-2xl p-3 md:p-10 text-white ">
          <h1 className=" text-xl text-white font-bold mb-5">Social Media</h1>
          <div className=" flex flex-col">
            <span>Facebook : Fabu1da</span>
            <span>instagram : Fabu1da</span>
            <span>LinkedIn : Kavuganyi Fabien</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
