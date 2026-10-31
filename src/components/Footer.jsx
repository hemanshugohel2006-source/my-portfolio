import { ArrowUp, Heart, Code, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-indigo-400">
            HG
          </div>
          <div>
            <div className="font-bold text-white">
              {personalInfo.name} • {personalInfo.title}
            </div>
            <div className="text-slate-500 text-[11px]">
              © {new Date().getFullYear()} Hemanshu Gohel. Engineered with performance in mind.
            </div>
          </div>
        </div>

        {/* Tech Stack & Attribution */}
        <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px]">
          <span>Built with React 19 + Tailwind CSS + Vite</span>
        </div>

        {/* Links & Back to top */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer flex items-center gap-1.5"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px] font-mono">Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
