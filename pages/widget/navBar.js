const navBar = () =>{
return(
   
      <div class="bg-black w-full fixed">
        <div class="flex justify-between items-center px-20 mx-auto">
            <div class="bg-gray-700 text-gray-100 text-4xl p-2">
                FK
            </div>
            <div class=" hidden text-gray-100">
                <a class="p-2"  href="">Home</a>
                <a class="p-2"  href="">Feature</a>
                <a class="p-2"  href="">Skills</a>
                <a class="p-2"  href="">Work</a>
                <a class="p-2"  href="">Contact</a>
            </div>
            <div class="text-gray-600 text-4xl">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
            <div class="md:hidden text-gray-100 text-4xl">
              <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    </div>
    
)
}

export default navBar;