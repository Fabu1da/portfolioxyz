import React, { useRef } from "react";
import fig1 from "../../../public/fig1.png";
import fig2 from "../../../public/fig2.png";
import fig3 from "../../../public/fig3.png";
import fig4 from "../../../public/fig4.png";
import fig5 from "../../../public/fig5.png";
import fig6 from "../../../public/fig6.png";
import fig7 from "../../../public/fig7.png";
import Image from "next/image";
import styles from "./project.module.css";
import {
  RiArrowRightUpLine,
  RiCodeFill,
  RiArrowDropRightLine,
  RiArrowDropLeftLine,
} from "react-icons/ri";

// https://64e5fe9346a8560b7f016367--remarkable-buttercream-31f941.netlify.app/
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
    title: "OMDB Movie App",
    body: "It is a movie publishing application where you can go and search for new movies read description and whatch them, this simple app is developed using reactjs and vanila css. the data is being fetched using omdb free api, it has functionalities like recommendations, add to watch list",
    tags: "ReactJS | Vanilla Css",
    img: fig5,
    url: "https://master--guileless-toffee-3dc976.netlify.app/",
    codeurl: "https://github.com/Fabu1da/movie_app.git",
  },

  {
    title: "HooBank Application",
    body: "The Bank Application is a user-friendly platform for managing finances, including account management, funds transfer, bill payment, mobile deposits, loan applications, investment management, and secure support.",
    tags: "NextJS | TailwindCss",
    img: fig3,
    url: "https://master--tiny-pika-a4977a.netlify.app/",
    codeurl: "https://github.com/Fabu1da/bankapp",
  },
  {
    title: "Django Rest API",
    body: "complete REST API using Django. this is an ecommerce backend with full functionality, like product categories, login endpoint, product view endpoint, product create endpoint. it free anyone can use it for any purpose or upgrade it as he/she needs",
    tags: "Python Django",
    img: fig7,
    url: "",
    codeurl: "https://github.com/Fabu1da/backend.git",
  },

  {
    title: "E-commerce web app",
    body: "Ecommerce is a method of buying and selling goods and services online. in this era everything has to be modernize. in that case businesses need a platform which can be accessible by everyone at any time. this simple e-commerce web app has basic functionality of an e-commerce system such as categories, cart and checkout",
    tags: "ReactJs | TailwindCss",
    img: fig4,
    url: "https://monumental-bubblegum-94aff5.netlify.app/",
    codeurl: "https://github.com/Fabu1da/shopping-web.git",
  },

  {
    title: "Money Exchange web app",
    body: "Exchange currency app help user to exchange money from any currency to preferable currency, this is a simple app i made using reactjs and  vanilla css, i fetched data from exchangerate restapi. the app has chart to help with in tracking how the currency value compares to Euro",
    tags: "ReactJs | Vanilla Css",
    img: fig6,
    url: "https://remarkable-buttercream-31f941.netlify.app/",
    codeurl: "https://github.com/Fabu1da/exchange_app.git",
  },
];

const Project = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 110;
    } else {
      current.scrollLeft += 110;
    }
  };

  const ProjectCard = ({
    project: { title, body, tags, img, url, codeurl },
  }) => {
    return (
      <div className=" relative min-w-[410px] mr-[2rem]" id="project">
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
          </a>
          {url && (
            <a
              href={url}
              className=" bg-orange-600 py-1 px-3 rounded-2xl text-white flex flex-row items-center justify-center"
            >
              Live preview <RiArrowRightUpLine />
            </a>
          )}
        </div>
      </div>
    );
  };
  return (
    <>
      <div className={`${styles.project}`}>
        <div className={`${styles.project__container}`} ref={scrollRef}>
          {listProject.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <div className="w-[92%] mx-auto my-[20px] flex justify-end gap-5">
        <button
          type="button"
          className="text-white border px-4 border-gray-700 rounded-md  hover:bg-neutral-800"
          onClick={() => scroll("left")}
        >
          <RiArrowDropLeftLine className="text-[30px]" />
        </button>
        <button
          type="button"
          className="text-white border py-1 px-4 border-gray-700 rounded-md hover:bg-neutral-800"
          onClick={() => scroll("right")}
        >
          <RiArrowDropRightLine className="text-[30px]" />
        </button>
      </div>
    </>
  );
};

export default Project;
