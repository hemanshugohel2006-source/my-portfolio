import React from "react";
import { 
  CheckCircle, 
  Code2, 
  Cpu, 
  Globe, 
  Laptop, 
  Sparkles, 
  GraduationCap, 
  Terminal,
  Award,
  ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

export default function About({ onOpenResume }) {
  const engineeringValues = [
    {
      title: "Clean & Maintainable Code",
      desc: "Writing modular, strongly typed, and self-documenting code with comprehensive documentation and predictable state.",
      icon: Code2,
      color: "text-indigo-400"
    },
    {
      title: "Performance & Efficiency",
      desc: "Obsessed with optimizing Core Web Vitals, minimizing bundle sizes, memoizing renders, and achieving sub-100ms API responses.",
      icon: Cpu,
      color: "text-cyan-400"
    },
    {
      title: "End-to-End Architecture",
      desc: "Bridging the gap between polished UI interactions, resilient backend pipelines, secure authentication, and cloud databases.",
      icon: Globe,
      color: "text-emerald-400"
    },
    {
      title: "Agile & Growth Mindset",
      desc: "Continuous learner actively staying ahead with modern paradigms, AI tools, developer ergonomics, and open-source ecosystems.",
      icon: Sparkles,
      color: "text-amber-400"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 text-xs font-mono font-medium">
            <Laptop className="w-3.5 h-3.5" />
            <span>Developer Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Hemanshu Gohel
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Passionate software engineer blending robust software fundamentals with modern web engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Background */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index} className="text-slate-300">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Current location: {personalInfo.location}</span>
                </div>

                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 cursor-pointer"
                >
                  <span>View Full Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick Education Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 to-indigo-950/40 border border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                  Academic Foundation
                </div>
                <div className="text-base font-bold text-white">
                  B.Tech in Computer Science & Engineering
                </div>
                <p className="text-xs text-slate-400">
                  Solid coursework in Data Structures, Relational Databases, Computer Networks, and Distributed Systems.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Principles & Values */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {engineeringValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 transition-all space-y-3 group"
                >
                  <div className={`p-2.5 rounded-xl bg-slate-800/80 w-fit ${val.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
