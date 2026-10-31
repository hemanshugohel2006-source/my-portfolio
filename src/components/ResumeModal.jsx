import React from "react";
import { X, Printer, Download, Mail, ExternalLink, GraduationCap, Code2, Briefcase } from "lucide-react";
import { personalInfo, skillsData, projectsData, experienceTimeline } from "../data/portfolioData";

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Action Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-slate-950/90 border-b border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-indigo-400">RESUME_PREVIEW.PDF</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="p-8 sm:p-12 text-slate-100 space-y-8 bg-slate-950/40">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-indigo-400 mt-1">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-3">
              <span>{personalInfo.email}</span>
              <span>•</span>
              <span>{personalInfo.location}</span>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">
                GitHub
              </a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold border-b border-slate-800/80 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Software Engineer and Full Stack Developer with experience engineering scalable web applications, responsive user interfaces, and robust backend microservices. Proficient in React, Node.js, TypeScript, PostgreSQL, and cloud deployments.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold border-b border-slate-800/80 pb-1">
              Education
            </h2>
            <div className="space-y-1">
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <span className="font-bold text-white">Bachelor of Technology (B.Tech) in Computer Science & Engineering</span>
                <span className="font-mono text-slate-400 text-xs">2022 - 2026</span>
              </div>
              <div className="text-xs text-slate-400">
                Core Coursework: Data Structures & Algorithms, Database Systems, Computer Networks, Operating Systems, Object-Oriented Programming.
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold border-b border-slate-800/80 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-bold text-slate-200">Frontend: </span>
                <span className="text-slate-400">React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Framer Motion, HTML5/CSS3</span>
              </div>
              <div>
                <span className="font-bold text-slate-200">Backend: </span>
                <span className="text-slate-400">Node.js, Express.js, RESTful APIs, WebSockets, Python</span>
              </div>
              <div>
                <span className="font-bold text-slate-200">Databases: </span>
                <span className="text-slate-400">PostgreSQL, MongoDB, MySQL, Redis</span>
              </div>
              <div>
                <span className="font-bold text-slate-200">DevOps & Tools: </span>
                <span className="text-slate-400">Git & GitHub, Docker, CI/CD, Vite, Linux Bash, Postman</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold border-b border-slate-800/80 pb-1">
              Key Projects
            </h2>
            {projectsData.slice(0, 3).map((proj) => (
              <div key={proj.id} className="space-y-1 text-xs">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-white text-sm">{proj.title}</span>
                  <span className="font-mono text-indigo-400 text-[11px]">{proj.tags.slice(0, 3).join(", ")}</span>
                </div>
                <p className="text-slate-300">
                  {proj.description}
                </p>
                <div className="text-slate-400 text-[11px]">
                  Key Highlights: {proj.highlights.join(" • ")}
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold border-b border-slate-800/80 pb-1">
              Experience & Activities
            </h2>
            {experienceTimeline.map((exp, idx) => (
              <div key={idx} className="space-y-0.5 text-xs">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-white">{exp.role}</span>
                  <span className="font-mono text-slate-400 text-[11px]">{exp.period}</span>
                </div>
                <div className="text-indigo-400 font-medium text-[11px]">{exp.organization}</div>
                <p className="text-slate-300 text-[11px]">{exp.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
