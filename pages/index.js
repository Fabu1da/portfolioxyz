import NavBar from './widget/navBar'
import Image from "next/image"
import hero from "../public/1.jpeg"

export default function Home() {
  const stl = "style";
  return (
    <>
    <div class="md:h-screen bg-gray-900  font-bold ">
      <NavBar />
      {/* containt */}
      <div class="container  md:flex  justify-center items-center mx-auto relative overflow-hidden h-max  md:h-full ">
        <div class=" flex justify-center  overflow-hidden md:px-14">
            <div class="relative h-98 w-12  ">
                <div class="absolute bottom-0 left-0 h-36 w-full bg-blue-600/[.06] rounded-bl-lg"></div>
            </div>

            <div class="relative overflow-hidden  rounded-tl-lg rounded-br-lg  w-80 bg-green-100 border-t-6 border-indigo-200 border-t-indigo-500">
            <Image  src={hero} alt="" class=" p-0 scale-125 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150  duration-300" />
           
            </div>
            <div class="relative h-full w-12  ">
                <div class="absolute top-0 right-0 h-24 w-full bg-green-600/[.06] rounded-tr-lg"></div>
            </div>
            
        </div>
        <div class=" p-8 md:w-1/2 ">
            <h1 class="text-4xl md:text-6xl shadow-md text-white font-bold">
                Fabien 
                <span class="text-blue-600">
                    Kavuganyi
                </span> 
            </h1>
            <div class="my-4 under-title text-gray-600 text-2xl text-italic">Frontend developer</div>
            <div class="transition ease-in-out duration-500 delay-150 text-gray-400 font-light border-l-8 pl-3 border-gray-400 hover:border-l-8 pl-3 hover:border-blue-500 whitespace-normal">
                Front end developer who focuses on writing clean, elegant and effective code. Love HTML, CSS, NextJs and JavaScripts
            </div>
        </div>
    </div>
    </div>

      
<div class="bg-white flex flex-col p-8">
    <div class="text-center text-6xl font-bold my-8">Skills</div>
    <div class="grid md:grid-cols-4 gap-6 w-2/3 mx-auto my-5">
        <div class="flex  flex-col px-5 items-center  justify-center rounded-lg hover:shadow-lg shadow-2xl h-40">
          <div class="text-3xl font-bold">
            <i class="fa-solid fa-angle-left"></i>
              HTML5
            <i class="fa-solid fa-angle-right"></i>
          </div>
          <div class="mb-1 text-lg font-light text-sm dark:text-white">98%</div>
            <div class="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
              <div class="h-6 bg-gray-600 rounded-full dark:bg-gray-300" ></div>
            </div>
        </div>
        <div class="flex flex-col px-5 items-center  justify-center rounded-lg hover:shadow-lg shadow-2xl  h-40">
          <div class="text-3xl font-bold">
            CSS
          </div>
          <div class="mb-1 text-lg font-light text-sm dark:text-white">95%</div>
          <div class="w-full  h-6 bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="h-6 bg-gray-600 rounded-full dark:bg-gray-300" ></div>
          </div>
        </div>
        <div class="flex flex-col px-5 items-center  justify-center rounded-lg hover:shadow-lg shadow-2xl  h-40">
          <div class="text-3xl font-bold">
            JQuery
          </div>

          <div class="mb-1 text-lg font-light text-sm dark:text-white">80%</div>
          <div class="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="h-6 bg-gray-600 rounded-full dark:bg-gray-300" ></div>
          </div>
        </div>

        <div class="flex flex-col px-5 items-center  justify-center rounded-lg hover:shadow-lg shadow-2xl  h-40">
          <div class="text-3xl font-bold">
            NextJs
          </div>
          <div class="mb-1 text-lg font-light text-sm dark:text-white">80%</div>
          <div class="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="h-6 bg-gray-600 rounded-full dark:bg-gray-300" ></div>
          </div>
        </div>
      </div>

      <div class="flex  justify-center my-5">
        <a class="flex justify-center items-center animate-bounce rounded-full bg-gray-900 text-white w-12 h-12 border">
          <i class="fa-solid fa-angles-down"></i>
        </a>
      </div>
</div>


<div class="bg-gray-300 flex flex-col p-8">
  <div class="text-center text-6xl font-bold my-8">Projects</div>
  <div class="flex justify-center items-center h-80 ">
      <span class="text-2xl font-bold">Comming soom</span>
  </div>
  
  
</div>



</>
  )
}
