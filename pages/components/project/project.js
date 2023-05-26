import React from "react";
import fig1 from "../../../public/fig1.png";
import fig2 from "../../../public/fig2.png";
import fig3 from "../../../public/fig3.png";
import Image from "next/image";
import { RiArrowRightUpLine, RiCodeFill } from "react-icons/ri";
const listProject = [
  {
    title: "GPT AI application",
    body: "The OpenAI Playground is a web-based tool that makes it easy to test prompts and get familiar with how the API works. With the Playground, you can start using GPT-3 without writing a single line of code  you provide the prompt in plain English. Just about everything you could do by calling the API, you can also do in the Playground.",
    tags: "React | css",
    img: fig2,
    url: "https://master--bespoke-sprite-65ca51.netlify.app/",
    codeurl: "https://github.com/Fabu1da/gpt3_web",
  },

  {
    title: "Gericht Restaurant application",
    body: "it is an online platform that allows user to order food, check the menu and latest information of the restaurant, user can register for the newsfeed that will prompt the upcoming promotion of the restaurant",
    tags: "React | css",
    img: fig1,
    url: "https://646d317afb2eba0007921bf5--magenta-clafoutis-87a529.netlify.app/",
    codeurl: "https://github.com/Fabu1da/restaurentapp",
  },
  {
    title: "HooBank Application",
    body: "The Bank Application is a user-friendly platform for managing finances, including account management, funds transfer, bill payment, mobile deposits, loan applications, investment management, and secure support.",
    tags: "NextJS | TailwindCss",
    img: fig3,
    url: "https://master--tiny-pika-a4977a.netlify.app/",
    codeurl: "https://github.com/Fabu1da/bankapp",
  },
];

const Project = () => {
  const ProjectCard = ({
    project: { title, body, tags, img, url, codeurl },
  }) => {
    return (
      <div
        className="border tansition__black border-gray-800 rounded-md overflow-hidden flex-1 "
        id="project"
      >
        <Image src={img} alt="" />

        <div className="headtext__base text-orange-600 p-5">{title}</div>
        <div className="h-[5px] w-[60px] bg-orange-600 ml-5 rounded-r-3xl" />
        <div className="text-white p-5 font-sans font-normal text-[20px]">
          {body}
        </div>
        <div className="text-gray-500 p-5 flex items-center justify-between">
          <span>{tags}</span>{" "}
          <a
            href={codeurl}
            className=" bg-orange-600 py-1 px-3 rounded-2xl text-white flex flex-row items-center justify-center"
          >
            code <RiCodeFill />
          </a>{" "}
          <a
            href={url}
            className=" bg-orange-600 py-1 px-3 rounded-2xl text-white flex flex-row items-center justify-center"
          >
            Live preview <RiArrowRightUpLine />
          </a>{" "}
        </div>
      </div>
    );
  };
  return (
    <div className=" flex md:flex-row flex-col flex-wrap h-max gap-5  md:p-20 p-5 ">
      {listProject.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Project;
