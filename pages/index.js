import NavBar from "./widget/navBar";
import Project from "./components/project/project";
import Image from "next/image";
import hero from "../public/1.jpg";
import Contact from "./widget/contact";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMysql,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import { ArrowRight, Cloud } from "lucide-react";
import Technology from "./components/technology/technology";
import About from "./components/aboutme/about";
import Achievement from "./components/achivement/achievement";

export default function Home() {
  const handleDownload = () => {
    const filename = "Fabien_Kavuganyi_cv.pdf";
    const a = document.createElement("a");
    a.href =
      "https://drive.google.com/file/d/1lTguyb2nFA7sTgpjvLKg7hwTXx7g4m7I/view?usp=share_link";
    a.setAttribute("download", filename);
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <>
      <NavBar />
      <div className="main__bg pb-8" id="home">
        {/* Hero Section */}
        <div className="container mx-auto px-4 md:px-8 pt-32 pb-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-9 gap-12 items-center min-h-[600px]">
            {/* Left - Image */}
            <div className="flex  col-span-4  justify-center md:justify-end order-2 md:order-1 animate-float">
              <div className="relative w-72 h-96 group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative rounded-3xl overflow-hidden border-2 border-blue-500/30 hover-glow">
                  <Image
                    src={hero}
                    alt="Fabien Kavuganyi"
                    priority
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 md:order-2 col-span-5 animate-in">
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="badge">
                  👋 Welcome to my portfolio
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                Fabien <span className="gradient-text">Kavuganyi</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-400 mb-6 font-light">
                Full-Stack Developer | React | Node.js | Azure
              </p>

              {/* Description */}
              <p className="text-lg text-gray-300 mb-8 leading-relaxed border-l-4 border-blue-500 pl-6">
                Building exceptional web applications with <span className="text-blue-400 font-semibold">modern technologies</span>. 
                3+ years of experience in React.js, Node.js, and cloud solutions. 
                Passionate about clean code and scalable architecture.
              </p>

              {/* Tech Stack */}
              <div className="mb-10">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="group hover-glow">
                    <SiReact className="text-3xl text-blue-400 transition" title="React" />
                  </div>
                  <div className="group hover-glow">
                    <SiNextdotjs className="text-3xl text-gray-300 transition" title="Next.js" />
                  </div>
                  <div className="group hover-glow">
                    <SiNodedotjs className="text-3xl text-green-400 transition" title="Node.js" />
                  </div>
                  <div className="group hover-glow">
                    <SiTailwindcss className="text-3xl text-cyan-400 transition" title="Tailwind CSS" />
                  </div>
                  <div className="group hover-glow">
                    <SiMysql className="text-3xl text-orange-400 transition" title="MySQL" />
                  </div>
                  <div className="group hover-glow">
                    <Cloud className="text-3xl text-blue-500 transition" title="Azure" />
                  </div>
                  <div className="group hover-glow">
                    <SiJavascript className="text-3xl text-yellow-400 transition" title="JavaScript" />
                  </div>
                  <div className="group hover-glow">
                    <SiPython className="text-3xl text-yellow-300 transition" title="Python" />
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDownload}
                  className="btn-primary inline-flex items-center justify-center gap-2 group"
                >
                  Download CV
                  <ArrowRight className="group-hover:translate-x-1 transition" size={18} />
                </button>
                <a
                  href="#contact"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section Header */}
        <div className="container mx-auto px-4 md:px-8 mt-20">
          <div className="animate-in">
            <div className="flex items-end gap-4 mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
              <h2 className="headtext__base text-4xl md:text-5xl">Featured Projects</h2>
            </div>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl">
              Explore a selection of my recent projects showcasing my expertise in full-stack development
            </p>
          </div>
          <Project />
        </div>
      </div>

      <Technology />
      <About />
      <Achievement />
      <Contact />
    </>
  );
}
