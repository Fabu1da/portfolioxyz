import React, { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

const About = () => {
  const [expandedExp, setExpandedExp] = useState(null);

  const experiences = [
    {
      period: "Nov 2023 – Present",
      role: "Full-Stack Developer",
      company: "Numbero GmbH",
      location: "Germany",
      color: "from-blue-500 to-cyan-500",
      highlights: ["React.js & Node.js", "Azure Cloud", "Nginx Load Balancing"],
      details: [
        "Developed and maintained full-stack web applications using React.js and Node.js",
        "Deployed and managed applications on Microsoft Azure cloud platform",
        "Configured Nginx for load balancing and reverse proxy to optimize performance",
        "Implemented RESTful APIs and integrated third-party services",
        "Collaborated with cross-functional teams using Agile methodologies",
      ],
    },
    {
      period: "Dec 2020 – Oct 2021",
      role: "Web Developer",
      company: "Next Generation Developers",
      location: "Rwanda",
      color: "from-purple-500 to-pink-500",
      highlights: ["HTML5, CSS3", "JavaScript", "Responsive Design"],
      details: [
        "Built responsive websites using HTML5, CSS3, and JavaScript",
        "Developed mobile-first designs ensuring cross-browser compatibility",
        "Optimized website performance and loading speeds",
        "Worked directly with clients to gather requirements and deliver solutions",
        "Maintained and updated existing web applications",
      ],
    },
    {
      period: "Mar 2020 – Jan 2021",
      role: "Frontend Developer",
      company: "Deelzil Co. Ltd",
      location: "Rwanda",
      color: "from-orange-500 to-red-500",
      highlights: ["UI Development", "Figma Design", "Web Performance"],
      details: [
        "Designed and implemented user interfaces from Figma mockups",
        "Created reusable UI components for consistent design across projects",
        "Improved web performance through code optimization and best practices",
        "Collaborated with backend developers to integrate APIs",
        "Participated in code reviews and team knowledge sharing sessions",
      ],
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] },
    { category: "Backend", items: ["Node.js", "Express", "REST APIs", "MySQL"] },
    { category: "Cloud & DevOps", items: ["Microsoft Azure", "Nginx", "CI/CD", "Netlify"] },
    { category: "Tools", items: ["Git", "Figma", "Power BI", "VS Code"] },
  ];

  return (
    <div className="bg__black py-20 px-4 md:px-8" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16  animate-in">
          <div className="flex items-end gap-4 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
            <h2 className="headtext__base text-4xl md:text-5xl">About Me</h2>
          </div>
          <p className="subtext max-w-3xl">
            Full-stack developer with 3+ years of professional experience building and deploying production web applications. 
            I specialize in <span className="text-blue-400 font-semibold">React.js</span>, <span className="text-green-400 font-semibold">Node.js</span>, and 
            <span className="text-blue-500 font-semibold"> Microsoft Azure</span>, with hands-on expertise in scalable architectures and cloud solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Key Stats */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-orange-500"></div>
              Quick Facts
            </h3>
            <div className="card">
              <p className="text-gray-300">📍 <span className="text-white font-semibold">Landshut, Germany</span></p>
            </div>
            <div className="card">
              <p className="text-gray-300">💼 <span className="text-white font-semibold">3+ Years Experience</span></p>
            </div>
            <div className="card">
              <p className="text-gray-300">🎓 <span className="text-white font-semibold">M.Sc. Computer Science</span></p>
            </div>
            <div className="card">
              <p className="text-gray-300">🌍 <span className="text-white font-semibold">4 Languages</span></p>
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-pink-500"></div>
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="card">
                  <h4 className="font-semibold text-blue-400 mb-4 text-sm uppercase tracking-wider">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-orange-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300 hover:border-blue-400 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Work Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-orange-500 rounded-full"></div>
            Professional Journey
          </h3>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className="group card hover:border-blue-400 cursor-pointer transition-all duration-300"
                onClick={() => setExpandedExp(expandedExp === idx ? null : idx)}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${exp.color} bg-opacity-20 border border-${exp.color}`}>
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                    <p className="text-blue-400 font-semibold mb-3">{exp.company} • {exp.location}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span key={highlight} className="badge text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`text-blue-400 transition-transform duration-300 ${expandedExp === idx ? 'rotate-180' : ''}`}>
                    <ChevronDown size={24} />
                  </div>
                </div>
                
                {/* Expandable Details */}
                <div className={`overflow-hidden transition-all duration-300 ${expandedExp === idx ? 'max-h-96 mt-4 pt-4 border-t border-slate-700' : 'max-h-0'}`}>
                  <ul className="space-y-2">
                    {exp.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-start gap-3 text-gray-300">
                        <Check className="text-green-400 mt-1 flex-shrink-0" size={16} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="card-row grid md:grid-cols-2 gap-6">
          <div className="card border-l-4 border-l-blue-500">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Current Education</p>
            <h4 className="text-lg font-bold text-white mb-2">M.Sc. Computer Science</h4>
            <p className="text-gray-400 mb-3">University of Passau, Germany</p>
            <p className="text-sm text-gray-500">Oct 2021 – Present</p>
          </div>
          <div className="card border-l-4 border-l-orange-500">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Previous Education</p>
            <h4 className="text-lg font-bold text-white mb-2">B.Sc. Information Technology</h4>
            <p className="text-gray-400 mb-3">St. Lawrence University, Uganda</p>
            <p className="text-sm text-gray-500">2019 – 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
