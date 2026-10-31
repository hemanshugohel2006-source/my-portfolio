import React, { useState, useRef, useEffect } from "react";
import { 
  Terminal as TerminalIcon, 
  Maximize2, 
  Minimize2, 
  Copy, 
  Check, 
  RotateCcw, 
  Play, 
  Sparkles,
  Command
} from "lucide-react";
import confetti from "canvas-confetti";
import { personalInfo, skillsData, projectsData } from "../data/portfolioData";

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const [isCopied, setIsCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const [outputLines, setOutputLines] = useState([
    { text: "Hemanshu Gohel Developer CLI [Version 2.4.0]", type: "system" },
    { text: "Type 'help' to see available commands or click the quick action chips below.", type: "system" },
    { text: "", type: "break" }
  ]);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [outputLines]);

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    // Add to command history
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    const userLine = { text: `user@hemanshu:~$ ${cmd}`, type: "command" };
    let responseLines = [];

    const lower = cmd.toLowerCase();
    const [action, ...args] = lower.split(" ");

    switch (action) {
      case "help":
        responseLines = [
          { text: "Available System Commands:", type: "header" },
          { text: "  about         - Information about Hemanshu Gohel", type: "info" },
          { text: "  skills        - List technical competencies and frameworks", type: "info" },
          { text: "  projects      - Display recent software engineering projects", type: "info" },
          { text: "  contact       - Output email, GitHub, and LinkedIn handles", type: "info" },
          { text: "  cat resume    - Render a text summary of Hemanshu's credentials", type: "info" },
          { text: "  whoami        - Display current user and permissions", type: "info" },
          { text: "  date          - Output current local system timestamp", type: "info" },
          { text: "  sudo hire     - Submit a recruitment request (with fireworks!)", type: "info" },
          { text: "  repo          - Print the official portfolio GitHub repository link", type: "info" },
          { text: "  clear         - Wipe the terminal output buffer", type: "info" },
        ];
        break;

      case "about":
        responseLines = [
          { text: `[Developer Profile: ${personalInfo.name}]`, type: "header" },
          { text: `Title: ${personalInfo.title}`, type: "info" },
          { text: `Location: ${personalInfo.location}`, type: "info" },
          { text: `Tagline: ${personalInfo.tagline}`, type: "info" },
          { text: `Bio: ${personalInfo.bio[0]}`, type: "info" },
        ];
        break;

      case "skills":
        responseLines = [
          { text: "[Core Engineering Competencies]", type: "header" },
          { text: "Frontend:  React.js (95%), JavaScript ES6+ (92%), TypeScript (88%), Tailwind CSS (96%), Next.js (86%)", type: "info" },
          { text: "Backend:   Node.js (90%), Express.js (92%), REST APIs (94%), Python (82%), WebSockets (85%)", type: "info" },
          { text: "Databases: PostgreSQL (88%), MongoDB (90%), Redis (82%), MySQL (85%)", type: "info" },
          { text: "Cloud/Dev: Docker, Git, CI/CD, Vercel, Linux Bash", type: "info" }
        ];
        break;

      case "projects":
        responseLines = [
          { text: "[Featured Projects]", type: "header" },
          ...projectsData.map(p => ({
            text: `• ${p.title} (${p.category}) - ${p.description}`,
            type: "info"
          }))
        ];
        break;

      case "contact":
        responseLines = [
          { text: "[Contact Coordinates]", type: "header" },
          { text: `Email:    ${personalInfo.email}`, type: "highlight" },
          { text: `GitHub:   ${personalInfo.github}`, type: "info" },
          { text: `LinkedIn: ${personalInfo.linkedin}`, type: "info" },
          { text: `Status:   ${personalInfo.status}`, type: "info" }
        ];
        break;

      case "cat":
        if (args.join(" ") === "resume") {
          responseLines = [
            { text: "================ RESUME SUMMARY ================", type: "header" },
            { text: `NAME:     ${personalInfo.name}`, type: "info" },
            { text: `EDUCATION: B.Tech in Computer Science & Engineering (2022-2026)`, type: "info" },
            { text: `CORE:      React, Node.js, TypeScript, PostgreSQL, Tailwind`, type: "info" },
            { text: `PROJECTS:  OmniTask AI, DevPulse Metrics, PulseCommerce, CodeNexus`, type: "info" },
            { text: `CONTACT:   ${personalInfo.email}`, type: "highlight" },
            { text: "================================================", type: "header" }
          ];
        } else {
          responseLines = [{ text: `cat: ${args.join(" ")}: No such file or directory. Try 'cat resume'`, type: "error" }];
        }
        break;

      case "whoami":
        responseLines = [
          { text: "guest@hemanshu-portfolio (Privileges: Read, Interactive Execution, Hire Access)", type: "info" }
        ];
        break;

      case "date":
        responseLines = [
          { text: new Date().toString(), type: "info" }
        ];
        break;

      case "repo":
        responseLines = [
          { text: `Repository: https://github.com/hemanshugohel2006-source/my-portfolio`, type: "highlight" }
        ];
        break;

      case "sudo":
        if (args.includes("hire") || args.includes("hireme")) {
          // Trigger confetti!
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
          responseLines = [
            { text: ">>> ACCESS GRANTED: WELCOME ABOARD! <<<", type: "success" },
            { text: `Recruitment protocol initiated. Sending handshake packet to ${personalInfo.email}`, type: "success" },
            { text: "Let's build innovative, high-impact products together!", type: "highlight" }
          ];
        } else {
          responseLines = [
            { text: "sudo: user is not in the sudoers file. However, 'sudo hire' is strictly permitted!", type: "error" }
          ];
        }
        break;

      case "clear":
        setOutputLines([]);
        setInputVal("");
        return;

      default:
        responseLines = [
          { text: `zsh: command not found: ${cmd}. Type 'help' for available commands.`, type: "error" }
        ];
        break;
    }

    setOutputLines(prev => [...prev, userLine, ...responseLines, { text: "", type: "break" }]);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInputVal("");
        } else {
          setHistoryIndex(nextIndex);
          setInputVal(commandHistory[nextIndex]);
        }
      }
    }
  };

  const copyTerminalOutput = () => {
    const raw = outputLines.map(l => l.text).join("\n");
    navigator.clipboard.writeText(raw);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const quickChips = ["help", "about", "skills", "projects", "sudo hire", "clear"];

  return (
    <section id="terminal" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Developer Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive Developer Terminal
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore Hemanshu's portfolio via interactive CLI commands, view diagnostics, or execute simulated tasks.
          </p>
        </div>

        {/* Quick Action Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1">
            <Command className="w-3 h-3" />
            Quick Run:
          </span>
          {quickChips.map((chip) => (
            <button
              key={chip}
              onClick={() => handleCommand(chip)}
              className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              ${chip}
            </button>
          ))}
        </div>

        {/* Terminal Container */}
        <div className={`max-w-4xl mx-auto bg-slate-950/95 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md transition-all ${
          isExpanded ? "min-h-[550px]" : "min-h-[380px]"
        }`}>
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-slate-400">hemanshu@portfolio: ~ (zsh)</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyTerminalOutput}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Copy terminal contents"
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => handleCommand("clear")}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Clear buffer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title={isExpanded ? "Collapse" : "Expand"}
              >
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-slate-300 overflow-y-auto max-h-[480px] space-y-1.5"
            onClick={() => inputRef.current?.focus()}
          >
            {outputLines.map((line, idx) => {
              if (line.type === "break") return <div key={idx} className="h-2" />;
              
              let color = "text-slate-300";
              if (line.type === "command") color = "text-cyan-400 font-semibold";
              if (line.type === "header") color = "text-indigo-400 font-bold";
              if (line.type === "success") color = "text-emerald-400 font-semibold";
              if (line.type === "highlight") color = "text-amber-300 font-medium";
              if (line.type === "error") color = "text-rose-400";
              if (line.type === "system") color = "text-slate-400";

              return (
                <div key={idx} className={`leading-relaxed ${color} whitespace-pre-wrap break-all`}>
                  {line.text}
                </div>
              );
            })}

            {/* Prompt Input Row */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-emerald-400 font-semibold shrink-0">user@hemanshu:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type command (e.g. 'help', 'skills', 'sudo hire')..."
                className="flex-1 bg-transparent border-none text-white focus:outline-none font-mono text-xs sm:text-sm placeholder-slate-600"
                autoComplete="off"
                spellCheck="false"
              />
            </div>

            <div ref={terminalEndRef} />
          </div>
        </div>

      </div>
    </section>
  );
}
