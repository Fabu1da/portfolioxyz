const navBar = () => {
  return (
    <div className="bg-black w-full z-10 fixed">
      <div className="flex justify-between items-center md:px-20 mx-auto">
        <div className="bg-gray-700 text-gray-100 text-4xl p-2">FK</div>
        <div className=" text-gray-100">
          <a className="p-2" href="#home">
            Home
          </a>
          {/* <a className="p-2" href="">
            Feature
          </a> */}
          <a className="p-2" href="#skills">
            Skills
          </a>
          <a className="p-2" href="#projects">
            Work
          </a>
          <a className="p-2" href="#contact">
            Contact
          </a>
        </div>
        <div className="text-gray-600 text-4xl flex gap-3">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div className="md:hidden text-gray-100 text-4xl mr-2">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default navBar;
