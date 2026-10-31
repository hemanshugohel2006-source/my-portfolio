import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import InteractiveTerminal from "./InteractiveTerminal";
import Contact from "./Contact";
import Footer from "./Footer";
import ResumeModal from "./ResumeModal";
import { Terminal, FileText, ArrowUp } from "lucide-react";

export default function Dashboard() {
  const [showResume, setShowResume] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "terminal", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenTerminal = () => {
    const terminalEl = document.getElementById("terminal");
    if (terminalEl) {
      terminalEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setShowResume(true)}
        onOpenTerminal={handleOpenTerminal}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setShowResume(true)}
          onOpenTerminal={handleOpenTerminal}
        />
        <About onOpenResume={() => setShowResume(true)} />
        <Skills />
        <Projects />
        <Experience onOpenResume={() => setShowResume(true)} />
        <InteractiveTerminal />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}

      {/* Floating Fast Access Dock */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2 bg-slate-900/90 border border-slate-800 p-1.5 rounded-full shadow-2xl backdrop-blur-md">
        <button
          onClick={handleOpenTerminal}
          className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 transition-all cursor-pointer shadow-sm"
          title="Open Developer Terminal"
        >
          <Terminal className="w-4 h-4" />
        </button>

        <button
          onClick={() => setShowResume(true)}
          className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-indigo-400 hover:text-indigo-300 transition-all cursor-pointer shadow-sm"
          title="View Resume"
        >
          <FileText className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
