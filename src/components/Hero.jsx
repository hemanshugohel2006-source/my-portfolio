import React, { useState } from "react";
import { 
  ArrowRight, 
  Terminal, 
  Code, 
  Mail, 
  Check, 
  Copy, 
  Sparkles, 
  ChevronRight,
  Cpu,
  Layers,
  ShieldCheck,
  Zap
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

export default function Hero({ onOpenTerminal, onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState("code");

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const codeSnippet = `// engineer.profile.ts
import { Developer } from '@hemanshu/core';

export const engineer: Developer = {
  name: "${personalInfo.name}",
  role: "Full Stack Software Engineer",
  focus: ["React 19", "Next.js", "Node.js", "System Design"],
  location: "${personalInfo.location}",
  status: "available_for_hire",
  sayHello: () => {
    return "Let's build something exceptional together!";
  }
};`;

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Decorative Matrix grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Introduction */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Open to Software Engineering Opportunities</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">{personalInfo.name}</span>.
                <br />
                <span className="text-slate-300 font-bold text-3xl sm:text-4xl lg:text-5xl">
                  Building Scalable, High-Impact Web Applications.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl font-normal leading-relaxed pt-1">
                {personalInfo.tagline} Focused on React, modern TypeScript, distributed backend microservices, and human-friendly interactive interfaces.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 text-sm font-semibold transition-all hover:translate-y-[-1px] cursor-pointer group"
              >
                <Terminal className="w-4 h-4 text-cyan-400 group-hover:rotate-6 transition-transform" />
                <span>Launch Terminal</span>
              </button>

              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800/70 text-slate-300 text-xs font-mono transition-all cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>{personalInfo.email}</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Social Links & Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 pt-4 text-slate-400 text-xs"
            >
              <span className="font-mono text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Code & Architecture Inspector */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden backdrop-blur-md"
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">developer-suite</span>
                </div>
                
                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      activeTab === "code" ? "bg-indigo-600 text-white font-medium" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    code.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("metrics")}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      activeTab === "metrics" ? "bg-indigo-600 text-white font-medium" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    telemetry
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm">
                {activeTab === "code" ? (
                  <div className="text-slate-300 overflow-x-auto leading-relaxed">
                    <pre className="text-xs">
                      <span className="text-slate-500">// TypeScript Dev Specification</span>
                      {"\n"}
                      <span className="text-indigo-400">const</span>{" "}
                      <span className="text-cyan-300">portfolio</span> = {"{\n"}
                      {"  "}engineer: <span className="text-emerald-300">"{personalInfo.name}"</span>,{"\n"}
                      {"  "}role: <span className="text-amber-200">"Full Stack Web Developer"</span>,{"\n"}
                      {"  "}stack: [
                      <span className="text-indigo-300">"React"</span>,{" "}
                      <span className="text-indigo-300">"Node.js"</span>,{" "}
                      <span className="text-indigo-300">"PostgreSQL"</span>,{" "}
                      <span className="text-indigo-300">"Tailwind"</span>
                      ],{"\n"}
                      {"  "}corePrinciples: [
                      <span className="text-emerald-300">"Clean Architecture"</span>,{" "}
                      <span className="text-emerald-300">"Rapid Delivery"</span>
                      ],{"\n"}
                      {"  "}contact: <span className="text-cyan-300">"{personalInfo.email}"</span>,{"\n"}
                      {"  "}hireStatus: <span className="text-emerald-400">"READY_FOR_DEPLOYMENT"</span>
                      {"\n}"};
                    </pre>

                    <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <Zap className="w-3.5 h-3.5" />
                        Compilation: 0 Errors
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">React 19 + Vite</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3.5 py-1">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                        <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5 mb-1">
                          <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                          Codebase Cadence
                        </div>
                        <div className="text-lg font-bold text-white font-mono">650+ Commits</div>
                        <div className="text-[10px] text-emerald-400 mt-0.5">High consistency</div>
                      </div>
                      <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                        <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5 mb-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          Code Quality
                        </div>
                        <div className="text-lg font-bold text-white font-mono">99.8%</div>
                        <div className="text-[10px] text-indigo-400 mt-0.5">TypeScript strict</div>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
                      <div className="text-xs text-slate-300 font-medium flex items-center justify-between">
                        <span>Frontend Systems (React/Next)</span>
                        <span className="text-indigo-400 font-mono">95%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[95%] h-full bg-indigo-500 rounded-full" />
                      </div>
                      <div className="text-xs text-slate-300 font-medium flex items-center justify-between pt-1">
                        <span>Backend Services (Node/Express/APIs)</span>
                        <span className="text-cyan-400 font-mono">90%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[90%] h-full bg-cyan-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Hero Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-800/80"
        >
          {personalInfo.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-all hover:bg-slate-900/60"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
