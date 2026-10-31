import React, { useState } from "react";
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight, 
  Layers,
  Info
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { projectsData } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    "All",
    "Full Stack & AI",
    "Web App & Analytics",
    "E-Commerce & SaaS",
    "Developer Tools",
    "Fintech & Web3"
  ];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 text-xs font-mono font-medium">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Software Engineering Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Selected applications showcasing full-stack capabilities, modern UI architectures, and scalable data handling.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/90 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div>
                {/* Project Image Banner */}
                <div 
                  className="relative h-48 w-full overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-slate-950/80 text-indigo-300 backdrop-blur-md border border-indigo-500/30">
                      {project.badge}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="p-1.5 rounded-lg bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:bg-slate-800 transition-colors"
                      title="Quick architecture preview"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-indigo-400">
                    <span>{project.category}</span>
                  </div>

                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/40 text-slate-400">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between gap-3 text-xs">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="font-medium text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white transition-colors"
                    title="View Live Demonstration"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
