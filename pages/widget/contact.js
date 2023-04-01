import React from "react";

const Contact = () => {
  return (
    <div className="bg-slate-800  p-8" id="contact">
      <div className="text-center text-6xl text-white font-bold my-8">
        Contact / Social Media
      </div>
      <div className="flex justify-center gap-10 p-10">
        <div className="p-10 shadow-xl rounded-2xl bg-slate-900 text-white">
          <h1 className=" text-xl text-white font-bold mb-5">
            Personal Contact
          </h1>
          <div className=" flex flex-col">
            <span className="">(+49) 015 7815 02431</span>
            <span className="">fabiusyy@gmail.com</span>
          </div>
        </div>
        <div className="p-10 border border-gray-600 rounded-2xl shadow-2xl text-white">
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
