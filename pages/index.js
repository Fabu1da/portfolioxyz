import NavBar from "./widget/navBar";
import Footer from "./widget/footer";
import Image from "next/image";
import hero from "../public/1.jpg";
const projects = [
  {
    id: 1,
    name: "Facebook clone",
    Description:
      "Facebook design and post with image and some other feature on this clone",
    image:
      "https://user-images.githubusercontent.com/43209472/128313417-8fe0926f-4dbb-422b-96cc-ab15f0e0c300.png",
    date: "01/20/2022",
    gitHub: "Fabu1da",
  },
  {
    id: 2,
    name: "Tinder clone",
    Description: "Dating app clone",
    image: "https://miro.medium.com/max/1200/1*N194HG_g0Awe40QYvXf6xw.jpeg",
    date: "01/20/2022",
    gitHub: "Fabu1da",
  },
  {
    id: 3,
    name: "Simple Portfolio Design",
    Description: "simple portifolio, designed using Nextjs, TailwindCss",
    image:
      "https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/346/posts/32708/image/portfolio_template3.jpg",
    date: "01/20/2022",
    gitHub: "Fabu1da",
  },
  {
    id: 4,
    name: "Simple Shoping cart design & Product list",
    Description:
      "Simple Shoping cart design & Product list, designed using ReactJs, TailwindCss",
    image:
      "https://media.licdn.com/dms/image/C4E22AQHehVtCjrq_hw/feedshare-shrink_2048_1536/0/1661805794745?e=1683158400&v=beta&t=hnDoNNJtpSIg0nC-OqI5IU0izYi8eEwCS1O5HO2q7eM",
    date: "18/05/2022",
    gitHub: "Fabu1da",
  },
];

export default function Home() {
  const stl = "style";
  return (
    <>
      <NavBar />
      <div className="md:h-screen bg-gray-900  font-bold py-20 ">
        {/* containt */}
        <div className="container  md:flex  justify-center items-center mx-auto relative overflow-hidden h-max  md:h-full ">
          <div className=" flex justify-center  overflow-hidden md:px-14">
            <div className="relative h-98 w-12  ">
              <div className="absolute bottom-0 left-0 h-36 w-full bg-blue-600/[.06] rounded-bl-lg"></div>
            </div>

            <div className="relative overflow-hidden  rounded-tl-lg rounded-br-lg w-96  border-t-6 border-indigo-200 border-t-indigo-500">
              <Image
                src={hero}
                alt=""
                className=" p-0 scale-125 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150  duration-300"
              />
            </div>
            <div className="relative h-full w-12  ">
              <div className="absolute top-0 right-0 h-24 w-full bg-green-600/[.06] rounded-tr-lg"></div>
            </div>
          </div>
          <div className=" p-8 md:w-1/2 ">
            <h1 className="text-4xl md:text-6xl shadow-md text-white font-bold">
              Fabien
              <span className="text-blue-600">Kavuganyi</span>
            </h1>
            <div className="my-4 under-title text-gray-600 text-2xl text-italic">
              Frontend developer
            </div>
            <div className="transition ease-in-out duration-500 delay-150 text-gray-400 font-light border-l-8  border-gray-400 hover:border-l-8 pl-3 hover:border-blue-500 whitespace-normal">
              Front end developer who focuses on writing clean, elegant and
              effective code. Love HTML, CSS, NextJs, ReactJs and JavaScripts
            </div>
            <div className="">
              <div className="text-white mt-5">Main Technologies</div>
              <div className="flex gap-3 mt-5">
                <span className="border bg-slate-300 shadow-lg rounded-full px-5 py-2">
                  React
                </span>
                <span className="border bg-slate-300 shadow-lg rounded-full px-5 py-2">
                  HTML
                </span>
                <span className="border bg-slate-300 shadow-lg rounded-full px-5 py-2">
                  CSS
                </span>
                <span className="border bg-slate-300 shadow-lg rounded-full px-5 py-2">
                  JavaScript
                </span>
              </div>

              <div>
                <button className="px-5 py-3 border-gray-500 border rounded-full text-white mt-5 ">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col p-8">
        <div className="text-center text-6xl font-bold my-8">Skills</div>
        <div className="grid grid-cols-2 w-full gap-2 md:grid-cols-4 md:gap-6 md:w-2/3 mx-auto my-5">
          <div className="flex  flex-col px-5 items-center  justify-center rounded-lg hover:shadow-lg shadow-2xl h-40">
            <div className="text-xl md:text-3xl font-bold">
              <i className="fa-solid fa-angle-left"></i>
              HTML5
              <i className="fa-solid fa-angle-right"></i>
            </div>
            <div className="mb-1 text-lg font-light  dark:text-white">98%</div>
            <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-6 bg-gray-600 rounded-full dark:bg-gray-300"></div>
            </div>
          </div>

          <div className="flex  flex-col px-5 items-center  justify-center rounded-lg hover:shadow-lg shadow-2xl h-40">
            <div className="text-xl md:text-3xl font-bold">ReactJs</div>
            <div className="mb-1 text-lg font-light  dark:text-white">98%</div>
            <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-6 bg-gray-600 rounded-full dark:bg-gray-300"></div>
            </div>
          </div>

          <div className="flex  flex-col px-5 items-center  justify-center rounded-lg hover:shadow-lg shadow-2xl h-40">
            <div className="text-xl md:text-3xl font-bold">Django</div>
            <div className="mb-1 text-lg font-light  dark:text-white">98%</div>
            <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-6 bg-gray-600 rounded-full dark:bg-gray-300"></div>
            </div>
          </div>
          <div className="flex flex-col px-5 items-center  justify-center rounded-lg hover:shadow-lg shadow-2xl  h-40">
            <div className="text-xl md:text-3xl font-bold">CSS</div>
            <div className="mb-1 text-lg font-light  dark:text-white">95%</div>
            <div className="w-full  h-6 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-6 bg-gray-600 rounded-full dark:bg-gray-300"></div>
            </div>
          </div>
          <div className="flex flex-col px-5 items-center  justify-center rounded-lg hover:shadow-lg shadow-2xl  h-40">
            <div className="text-xl md:text-3xl font-bold">JavaScript</div>

            <div className="mb-1 text-lg font-light  dark:text-white">80%</div>
            <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-6 bg-gray-600 rounded-full dark:bg-gray-300"></div>
            </div>
          </div>

          <div className="flex flex-col px-5 items-center  justify-center rounded-lg hover:shadow-lg shadow-2xl  h-40">
            <div className="text-xl md:text-3xl font-bold">NextJs</div>
            <div className="mb-1 text-lg font-light  dark:text-white">80%</div>
            <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-6 bg-gray-600 rounded-full dark:bg-gray-300"></div>
            </div>
          </div>
        </div>

        <div className="flex  justify-center my-5">
          <a className="flex justify-center items-center animate-bounce rounded-full bg-gray-900 text-white w-12 h-12 border">
            <i className="fa-solid fa-angles-down text-gray-100"></i>
          </a>
        </div>
      </div>

      <div className="bg-gray-300 flex flex-col p-8">
        <div className="text-center text-6xl font-bold my-8">Projects</div>
        <div className="grid grid-cols-2 w-full gap-2 md:grid-cols-4 md:gap-6 md:w-7/8 mx-auto my-5">
          {/* <span className="text-2xl font-bold">Comming soom</span> */}

          {projects.map((project) => {
            return (
              <div
                className="relative rounded-md overflow-hidden shadow-2xl "
                key={project.id}
              >
                <div className=" md:h-40 overflow-hidden">
                  <img src={project.image} className="scale-125" />
                </div>
                <div className="">
                  <div className="px-2 text-amber-700 font-semibold text-lg">
                    {project.name}
                  </div>
                  <div className="px-2 text-sm mb-12">
                    {project.Description}
                  </div>
                  <div className="flex p-2 justify-center absolute bottom-0 w-full bg-green-900 text-white">
                    GitHub : {project.gitHub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
