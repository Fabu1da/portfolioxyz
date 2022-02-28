const navBar = () =>{
return(
   
      <div className="bg-black w-full z-10 fixed">
        <div className="flex justify-between items-center md:px-20 mx-auto">
            <div className="bg-gray-700 text-gray-100 text-4xl p-2">
                FK
            </div>
            <div className=" hidden text-gray-100">
                <a className="p-2"  href="">Home</a>
                <a className="p-2"  href="">Feature</a>
                <a className="p-2"  href="">Skills</a>
                <a className="p-2"  href="">Work</a>
                <a className="p-2"  href="">Contact</a>
            </div>
            <div className="text-gray-600 text-4xl">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="md:hidden text-gray-100 text-4xl">
              <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    </div>
    
)
}

export default navBar;