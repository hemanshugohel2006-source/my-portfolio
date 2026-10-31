import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

export default function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const bootLogs = [
    "Initializing developer runtime v2.4.0...",
    "Loading Hemanshu Gohel profile data...",
    "Mounting full-stack architecture modules...",
    "Configuring interactive developer terminal...",
    "System ready. Welcome to the portfolio."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 5;
        return Math.min(100, prev + increment);
      });
    }, 180);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev < bootLogs.length - 1 ? prev + 1 : prev));
    }, 700);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-slate-100 overflow-hidden select-none">
      {/* Background ambient glow effects */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      
      {/* Decorative subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="relative z-10 w-full max-w-md px-6 flex flex-col items-center">
        {/* Animated Avatar / Logo badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-6"
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[2px] shadow-2xl shadow-indigo-500/30">
            <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
              <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-indigo-300 via-white to-cyan-200 bg-clip-text text-transparent">
                HG
              </span>
            </div>
          </div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute -inset-1 rounded-2xl border border-indigo-400/20 border-dashed pointer-events-none"
          />
        </motion.div>

        {/* Developer Name & Title */}
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold tracking-tight text-white mb-1 text-center"
        >
          Hemanshu Gohel
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs uppercase tracking-widest text-indigo-400 font-medium mb-6 text-center"
        >
          Full Stack Developer & Software Engineer
        </motion.p>

        {/* Boot Terminal Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full bg-slate-900/90 border border-slate-800 rounded-xl p-4 shadow-xl backdrop-blur-md mb-6"
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-slate-400">system-boot.sh</span>
            </div>
            <span className="flex items-center gap-1 text-indigo-400 font-mono">
              <Terminal className="w-3 h-3" />
              LIVE
            </span>
          </div>

          <div className="space-y-1.5 font-mono text-xs text-slate-300 min-h-[72px]">
            {bootLogs.slice(0, currentStep + 1).map((log, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start gap-2"
              >
                {index === currentStep && progress < 100 ? (
                  <span className="text-cyan-400 animate-pulse">❯</span>
                ) : (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                )}
                <span className={index === currentStep ? "text-cyan-300 font-medium" : "text-slate-400"}>
                  {log}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress Bar & Status */}
        <div className="w-full space-y-2 mb-6">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-400 animate-spin" />
              Loading Experience...
            </span>
            <span className="text-indigo-400 font-semibold">{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden p-[1px]">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-cyan-400 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Skip Button */}
        {onFinish && (
          <motion.button
            onClick={onFinish}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
          >
            <span>Skip to Portfolio</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        )}
      </div>
    </div>
  );
}
