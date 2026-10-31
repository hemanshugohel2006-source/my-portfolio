import React, { useState, useEffect } from "react";
import { 
  Code2, 
  Terminal, 
  FolderGit2, 
  Layers, 
  Briefcase, 
  Mail, 
  User, 
  Menu, 
  X, 
  FileText,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Navbar({ onOpenResume, onOpenTerminal, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Layers },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Terminal", href: "#terminal", icon: Terminal, action: onOpenTerminal },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const handleNavClick = (e, item) => {
    if (item.action) {
      e.preventDefault();
      item.action();
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[2px] shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <span className="font-mono text-sm font-bold bg-gradient-to-r from-indigo-300 to-cyan-200 bg-clip-text text-transparent">
                HG
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-slate-100 tracking-tight text-sm sm:text-base group-hover:text-indigo-400 transition-colors">
              <span>{personalInfo.name}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for work" />
            </div>
            <div className="text-[11px] font-mono text-slate-400 hidden sm:block">
              Full Stack Engineer
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 p-1.5 rounded-full backdrop-blur-md shadow-inner">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/30"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/70"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-400" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-5 bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-indigo-400 transition-colors"
                >
                  <Icon className="w-4 h-4 text-indigo-400" />
                  <span>{item.name}</span>
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-800 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium bg-indigo-600 text-white hover:bg-indigo-500"
              >
                <Sparkles className="w-4 h-4" />
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
