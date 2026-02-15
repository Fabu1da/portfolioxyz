import React, { useRef } from "react";
import styles from "./project.module.css";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const listProject = [
  {
    title: "AI-Powered Agent",
    body: "A modern real-time chat application powered by OpenAI's GPT-4o-mini API. Built with React 19 and TypeScript, featuring a sleek dark neon UI, persistent chat history with localStorage, and full mobile responsiveness. Demonstrates API integration, state management with React hooks, error handling, and professional UX design. Users can chat with an intelligent AI assistant, copy responses, and maintain conversation history across sessions.",
    tags: ["TypeScript", "React", "OpenAI API", "LLM", "Tailwind CSS", "Vite"],
    img: "/fig9.png",
    url: "https://aiagentf.netlify.app/",
    codeurl: "https://github.com/Fabu1da/AIagents.git",
  },
  {
    title: "Harmonize: Data Harmonization System",
    body: "Comprehensive data harmonization framework using LLMs. Benchmarked with COMA, GPT-5, embeddings, clustering, and ensemble methods for schema matching across multiple datasets.",
    tags: ["Python", "LLM", "OpenAI API", "Machine Learning"],
    img: "/fig8.webp",
    url: "",
    codeurl: "https://github.com/Fabu1da/harmonize",
  },
  {
    title: "GPT AI Application",
    body: "AI-powered tool for testing prompts and exploring OpenAI's capabilities. Intuitive interface for prompt engineering without coding.",
    tags: ["React", "OpenAI API", "Responsive Design"],
    img: "/fig2.png",
    url: "https://master--bespoke-sprite-65ca51.netlify.app/",
    codeurl: "https://github.com/Fabu1da/gpt3_web",
  },
  {
    title: "Restaurant Management Platform",
    body: "Complete online restaurant platform with menu browsing, food ordering, and promotional newsletters. Modern UI with user-friendly navigation.",
    tags: ["React", "CSS", "E-commerce"],
    img: "/fig1.png",
    url: "https://646d317afb2eba0007921bf5--magenta-clafoutis-87a529.netlify.app/",
    codeurl: "https://github.com/Fabu1da/restaurentapp",
  },
  {
    title: "Movie Discovery App",
    body: "Search and discover movies with detailed descriptions. Features include recommendations and watchlist functionality powered by OMDB API.",
    tags: ["React", "OMDB API", "Modern UI"],
    img: "/fig5.png",
    url: "https://master--guileless-toffee-3dc976.netlify.app/",
    codeurl: "https://github.com/Fabu1da/movie_app.git",
  },
  {
    title: "Banking Application",
    body: "Modern fintech platform for account management, transfers, payments, and investments. Built with Next.js and Tailwind CSS for optimal performance.",
    tags: ["Next.js", "Tailwind CSS", "Finance"],
    img: "/fig3.png",
    url: "https://master--tiny-pika-a4977a.netlify.app/",
    codeurl: "https://github.com/Fabu1da/bankapp",
  },
  {
    title: "REST API Backend",
    body: "Production-ready e-commerce backend with comprehensive REST endpoints. Includes authentication, product management, and transaction handling.",
    tags: ["Django", "Python", "REST API"],
    img: "/fig7.png",
    url: "",
    codeurl: "https://github.com/Fabu1da/backend.git",
  },
  {
    title: "E-commerce Platform",
    body: "Full-featured e-commerce application with product categorization, shopping cart, and checkout functionality. Responsive and performant.",
    tags: ["React", "Tailwind CSS", "E-commerce"],
    img: "/fig4.png",
    url: "https://monumental-bubblegum-94aff5.netlify.app/",
    codeurl: "https://github.com/Fabu1da/shopping-web.git",
  },
  {
    title: "Currency Exchange Tool",
    body: "Real-time currency converter with visual charts for currency trend analysis. Integrates live exchange rates from market APIs.",
    tags: ["React", "API Integration", "Charts"],
    img: "/fig6.png",
    url: "https://remarkable-buttercream-31f941.netlify.app/",
    codeurl: "https://github.com/Fabu1da/exchange_app.git",
  },
];

const Project = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 350;
    } else {
      current.scrollLeft += 350;
    }
  };

  const ProjectCard = ({ project: { title, body, tags, img, url, codeurl } }) => {
    return (
      <div className={`${styles.projectCard} group`}>
        <div className={`${styles.projectImageContainer}`}>
          <img
            src={img}
            alt={title}
            className={styles.projectImage}
          />
          <div className={styles.projectOverlay}>
            <div className={styles.projectLinks}>
              <a
                href={codeurl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectButton}
                title="View Code"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectButton}
                  title="Live Preview"
                >
                  <ExternalLink size={16} />
                  <span>Live</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className={styles.projectContent}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.projectDescription}>{body}</p>

          <div className={styles.projectTags}>
            {tags.map((tag, idx) => (
              <span key={idx} className={styles.projectTag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg__black py-8">
      <div className={`${styles.projectsWrapper}`}>
        {/* Navigation Buttons */}
        <div className={styles.navButtons}>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => scroll("left")}
            title="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => scroll("right")}
            title="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Projects Container */}
        <div className={styles.projectContainer} ref={scrollRef}>
          {listProject.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
