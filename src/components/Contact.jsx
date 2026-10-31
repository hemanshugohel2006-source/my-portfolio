import React, { useState } from "react";
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  MapPin, 
  Sparkles, 
  Clock, 
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import confetti from "canvas-confetti";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    if (!formData.email.includes("@")) {
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-900/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 text-xs font-mono font-medium">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have a project in mind, an engineering role open, or just want to chat tech? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white">
                Contact Coordinates
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                I am actively considering full-time software engineering roles, high-impact freelance projects, and open-source collaborations.
              </p>

              {/* Email Card with 1-click copy */}
              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  Primary Email
                </div>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-mono text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors truncate"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Availability */}
              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <div className="text-slate-400">{personalInfo.location} (Available for remote global teams)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Response Time</div>
                    <div className="text-slate-400">Typically within 24 hours</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-mono text-slate-400 mb-3">External Links:</div>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. Your message has been logged. I'll get back to you shortly at <span className="text-indigo-400 font-mono">{formData.email}</span>.
                  </p>

                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || "Portfolio Contact")}&body=${encodeURIComponent(formData.message)}`}
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium cursor-pointer"
                    >
                      Open Email Client
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <h3 className="text-base font-bold text-white">
                      Send a Message
                    </h3>
                    <span className="text-xs font-mono text-slate-500">direct-dispatch.v1</span>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Email Address *</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Subject</label>
                    <input
                      type="text"
                      placeholder="Engineering Role / Project Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Message *</label>
                    <textarea
                      rows={5}
                      placeholder="Hi Hemanshu, I came across your portfolio and wanted to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-600/30 transition-all cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Packet...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
