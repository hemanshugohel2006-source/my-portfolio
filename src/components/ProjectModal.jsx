import React from "react";
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Globe } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative h-60 w-full overflow-hidden bg-slate-950 border-b border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-indigo-600/90 text-white shadow-sm inline-block mb-2">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Detailed Narrative */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
              Overview & Architecture
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Architecture Highlights */}
          {project.highlights && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                Technical Highlights & Milestones
              </h4>
              <div className="space-y-2">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 border border-slate-700/80 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Repository</span>
            </a>

            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Project</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
