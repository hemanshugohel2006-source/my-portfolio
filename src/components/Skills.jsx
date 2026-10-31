import React, { useState } from "react";
import { 
  Layers, 
  Search, 
  Code2, 
  Server, 
  Database, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  Zap
} from "lucide-react";
import { skillsData } from "../data/portfolioData";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Skills", icon: Layers },
    { id: "frontend", label: "Frontend", icon: Code2 },
    { id: "backend", label: "Backend", icon: Server },
    { id: "database", label: "Database", icon: Database },
    { id: "devops", label: "DevOps & Cloud", icon: Terminal },
  ];

  // Aggregate skills
  const allSkills = [
    ...skillsData.frontend.map(s => ({ ...s, category: "frontend" })),
    ...skillsData.backend.map(s => ({ ...s, category: "backend" })),
    ...skillsData.database.map(s => ({ ...s, category: "database" })),
    ...skillsData.devops.map(s => ({ ...s, category: "devops" })),
  ];

  const filteredSkills = allSkills.filter(skill => {
    const matchesCategory = activeCategory === "all" || skill.category === activeCategory;
    const matchesQuery = 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="skills" className="py-20 relative bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
            <Zap className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tech Stack & Competencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Modern technologies, libraries, and frameworks I leverage to engineer resilient software systems.
          </p>
        </div>

        {/* Controls: Category Selector & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 w-full sm:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter tech stack (e.g. React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-800/90 flex items-center justify-center text-indigo-400 group-hover:text-cyan-300 group-hover:bg-slate-800 transition-colors">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-sm text-white tracking-tight">
                        {skill.name}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-semibold text-indigo-400">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-normal line-clamp-2">
                    {skill.description}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mt-3.5">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-500 space-y-2 font-mono text-xs">
              <div>No technologies match "{searchQuery}"</div>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="text-indigo-400 underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* Quick Highlights Footer */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-indigo-400 shrink-0" />
            <div className="text-xs text-slate-300">
              <span className="font-semibold text-white">Full-Stack Readiness:</span> From front-end design systems to SQL migrations and REST endpoints.
            </div>
          </div>
          <a
            href="#projects"
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
          >
            See skills implemented in projects →
          </a>
        </div>

      </div>
    </section>
  );
}
