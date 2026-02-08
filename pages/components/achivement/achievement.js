import React from "react";
import { GraduationCap, Sparkles, CheckCircle, Briefcase } from "lucide-react";

const Achievement = () => {
  const achievements = [
    {
      Icon: GraduationCap,
      type: "Education",
      title: "B.Sc. Information Technology",
      subtitle: "St. Lawrence University, Uganda",
      year: "2021",
      color: "from-blue-500 to-cyan-500",
      description: "Graduated with foundation in IT and software development",
    },
    {
      Icon: Briefcase,
      type: "Experience",
      title: "3+ Years Professional Experience",
      subtitle: "Full-Stack Developer",
      year: "2020-2023",
      color: "from-green-500 to-emerald-500",
      description: "Built production applications with React, Node.js, and Azure",
    },
    {
      Icon: Sparkles,
      type: "Current",
      title: "M.Sc. Computer Science",
      subtitle: "University of Passau, Germany",
      year: "In Progress",
      color: "from-orange-500 to-red-500",
      description: "Advanced studies in computer science and software engineering",
    },
    {
      Icon: CheckCircle,
      type: "Certification",
      title: "Cypress - From Zero to Hero",
      subtitle: "Professional Testing Certification",
      year: "2023",
      color: "from-purple-500 to-pink-500",
      description: "Advanced end-to-end testing with modern tools",
    },
  ];

  return (
    <div className="bg__black py-20 px-4 md:px-8" id="achievement">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 animate-in">
          <div className="flex items-end gap-4 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
            <h2 className="headtext__base text-4xl md:text-5xl">Achievements</h2>
          </div>
          <p className="subtext max-w-3xl">
            A summary of my educational milestones, professional accomplishments, and ongoing development journey.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.Icon;
            return (
              <div
                key={idx}
                className="card group border-l-4 border-l-transparent hover:border-l-blue-500 relative overflow-hidden"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition duration-300`}
                ></div>

                <div className="relative">
                  {/* Header with Icon and Type */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition`}
                    >
                      <Icon className="text-white text-2xl" />
                    </div>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-orange-500/10 border border-blue-500/30 rounded-full text-xs font-semibold text-blue-300">
                      {achievement.type}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-blue-400 font-semibold text-sm mb-2">
                    {achievement.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Year/Status */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 -webkit-background-clip:text -webkit-text-fill-color:transparent bg-clip:text">
                      {achievement.year}
                    </span>
                    <CheckCircle className="text-green-400" size={20} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="card border-t-2 border-t-blue-500/50">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text mb-2">3+</p>
              <p className="text-gray-400">Years of Experience</p>
            </div>
            <div className="text-center border-l border-r border-slate-700">
              <p className="text-3xl font-bold gradient-text mb-2">7+</p>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text mb-2">∞</p>
              <p className="text-gray-400">Always Learning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
