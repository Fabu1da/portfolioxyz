import { useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#project" },
    { label: "Technology", href: "#technology" },
    { label: "About", href: "#about" },
    { label: "Achievement", href: "#achievement" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-orange-500 rounded-xl flex items-center justify-center font-bold text-white text-lg group-hover:shadow-lg group-hover:shadow-blue-500/50 transition">
              FK
            </div>
            <span className="font-bold text-white text-lg hidden sm:inline">Fabien</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-gray-300 hover:text-white transition relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/kavuganyi-fabien-717a46202/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition transform"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Fabu1da"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition transform"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:fabiusyy@gmail.com"
              className="text-gray-400 hover:text-white hover:scale-110 transition transform"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/50 border-t border-slate-700 pb-4 animate-in">
            <div className="flex flex-col">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-700/50 transition border-b border-slate-700/30 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 py-4 flex gap-4 justify-center border-t border-slate-700/30 mt-4">
                <a
                  href="https://www.linkedin.com/in/kavuganyi-fabien-717a46202/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                  title="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Fabu1da"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                  title="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="mailto:fabiusyy@gmail.com"
                  className="text-gray-400 hover:text-white transition"
                  title="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
