import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      Icon: Mail,
      label: "Email",
      value: "fabiusyy@gmail.com",
      href: "mailto:fabiusyy@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      Icon: Phone,
      label: "Phone",
      value: "+49 157 8150 2431",
      href: "tel:+4915781502431",
      color: "from-green-500 to-emerald-500",
    },
    {
      Icon: MapPin,
      label: "Location",
      value: "Landshut, Germany",
      color: "from-orange-500 to-red-500",
    },
  ];

  const socialLinks = [
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/kavuganyi-fabien-717a46202/",
      label: "LinkedIn",
    },
    { Icon: Github, href: "https://github.com/Fabu1da", label: "GitHub" },
    { Icon: Mail, href: "mailto:fabiusyy@gmail.com", label: "Email" },
  ];

  return (
    <div className="bg__black py-20 px-4 md:px-8" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 animate-in">
          <div className="flex items-end gap-4 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
            <h2 className="headtext__base text-4xl md:text-5xl">Get in Touch</h2>
          </div>
          <p className="subtext max-w-3xl">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you want to collaborate, have a question, or just want to say hi – feel free to reach out!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, idx) => {
            const Icon = method.Icon;
            return (
              <div key={idx} className="card group hover:border-blue-400">
                <a
                  href={method.href}
                  className="relative z-10 flex items-start gap-4"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition`}
                  >
                    <Icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                      {method.label}
                    </p>
                    <p className="text-white font-semibold group-hover:text-blue-400 transition line-clamp-2">
                      {method.value}
                    </p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left - Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's work together
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm passionate about creating innovative solutions and collaborating with talented teams. 
              If you have an exciting project or just want to discuss potential opportunities, I'd love to hear from you.
            </p>

            {/* Quick Stats */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-gray-300">Available for freelance & full-time roles</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-gray-300">Usually respond within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-gray-300">Based in Passau, Germany</span>
              </div>
            </div>
          </div>

          {/* Right - CTA */}
          <div className="card border-l-4 border-l-blue-500 flex flex-col justify-between min-h-96">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">
                Ready to start a project?
              </h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Send me an email or reach out through any of my social profiles. 
                I'm excited to collaborate and bring your ideas to life.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:fabiusyy@gmail.com"
                className="btn-primary flex items-center justify-center gap-2 w-full group"
              >
                <Send className="group-hover:-translate-x-1 transition" size={18} />
                Send Email
              </a>

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social, idx) => {
                  const Icon = social.Icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 h-12 rounded-lg bg-gradient-to-r from-blue-500/10 to-orange-500/10 border border-blue-500/30 hover:border-blue-400 flex items-center justify-center text-blue-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-orange-500/20 transition group"
                      title={social.label}
                    >
                      <Icon className="group-hover:scale-110 transition" size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Fabien Kavuganyi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
