import React from "react";
import { Briefcase, Calendar, MapPin, GraduationCap, ArrowUpRight } from "lucide-react";
import { experienceTimeline } from "../data/portfolioData";

export default function Experience({ onOpenResume }) {
  return (
    <section id="experience" className="py-20 relative bg-slate-900/30 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 text-xs font-mono font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Track record of continuous engineering learning, open-source work, and computer science foundations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-indigo-500/20 space-y-10">
          {experienceTimeline.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:bg-indigo-500 group-hover:scale-125 transition-all shadow-md shadow-indigo-500/50" />

              {/* Timeline Card */}
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 group-hover:border-slate-700 transition-all space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.role}
                  </h3>
                  <div className="text-xs font-medium text-slate-400 mt-0.5">
                    {item.organization}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition-all hover:border-indigo-500 cursor-pointer shadow-md"
          >
            <span>Download Detailed Resume (PDF / View)</span>
            <ArrowUpRight className="w-4 h-4 text-indigo-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
