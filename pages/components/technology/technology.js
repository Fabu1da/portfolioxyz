import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiFigma,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiExpress,
} from "react-icons/si";
import { Cloud, Sparkles, Database, Layout, Server, Palette } from "lucide-react";

const Technology = () => {
  const techCategories = [
    {
      title: "Frontend",
      Icon: Layout,
      color: "from-blue-500 to-cyan-500",
      description: "Building modern, responsive user interfaces with cutting-edge frameworks",
      technologies: [
        { name: "React.js", Icon: SiReact },
        { name: "Next.js", Icon: SiNextdotjs },
        { name: "Tailwind CSS", Icon: SiTailwindcss },
      ],
    },
    {
      title: "Backend",
      Icon: Server,
      color: "from-green-500 to-emerald-500",
      description: "Developing scalable server-side applications and RESTful APIs",
      technologies: [
        { name: "Node.js", Icon: SiNodedotjs },
        { name: "Express", Icon: SiExpress },
        { name: "MySQL", Icon: SiMysql },
      ],
    },
    {
      title: "Cloud & DevOps",
      Icon: Cloud,
      color: "from-purple-500 to-pink-500",
      description: "Deploying and managing applications on cloud platforms",
      technologies: [
        { name: "Microsoft Azure", Icon: Cloud },
        { name: "Netlify", Icon: Sparkles },
        { name: "Git & CI/CD", Icon: SiGit },
      ],
    },
    {
      title: "Design & Tools",
      Icon: Palette,
      color: "from-orange-500 to-red-500",
      description: "Creating intuitive designs and prototypes",
      technologies: [
        { name: "Figma", Icon: SiFigma },
        { name: "Git", Icon: SiGit },
        { name: "VS Code", Icon: Sparkles },
      ],
    },
  ];

  return (
    <div className="bg__black py-20 px-4 md:px-8" id="technology">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 animate-in">
          <div className="flex items-end gap-4 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
            <h2 className="headtext__base text-4xl md:text-5xl">Technologies</h2>
          </div>
          <p className="subtext max-w-3xl">
            I specialize in a modern tech stack spanning frontend, backend, and cloud infrastructure. 
            From React and Next.js to Node.js and Azure, I build complete solutions with the latest technologies.
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {techCategories.map((category, idx) => {
            const Icon = category.Icon;
            return (
              <div
                key={idx}
                className="group card border-l-4 border-l-transparent hover:border-l-blue-500 relative overflow-hidden"
              >
                {/* Background glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition duration-300`}
                ></div>

                <div className="relative">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition`}>
                    <Icon className="text-white" size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">{category.description}</p>

                  {/* Tech List */}
                  <div className="space-y-3">
                    {category.technologies.map((tech, techIdx) => {
                      const TechIcon = tech.Icon;
                      return (
                        <div
                          key={techIdx}
                          className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700 transition group/item"
                        >
                          <TechIcon className="text-blue-400 group-hover/item:text-orange-400 transition" size={18} />
                          <span className="text-gray-300 group-hover/item:text-white transition">{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Highlight */}
        <div className="card border-t-2 border-t-blue-500/50">
          <div className="flex items-start gap-4">
            <div className="text-3xl">⚡</div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Expertise Areas</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {["Full-Stack Development", "REST APIs", "Responsive Design", "Cloud Deployment", "Database Design", "Performance Optimization"].map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
