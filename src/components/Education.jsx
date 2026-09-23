import React from 'react';
import { educationList } from '../data/portfolioData';

const EducationCard = ({ edu, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 hover:border-red-500/30 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between group h-full"
  >
    <div>
      {/* Top Header: Duration + Badge */}
      <div className="flex justify-between items-start mb-6">
        <span className="text-white/40 text-xs font-mono font-bold tracking-widest uppercase">
          {edu.duration}
        </span>
        <span className="bg-[#ff2a2a]/20 text-[#ff2a2a] text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-[#ff2a2a]/30">
          {edu.badge}
        </span>
      </div>

      {/* Degree Title */}
      <h3 className="text-white text-xl md:text-2xl font-black tracking-tight mb-2 group-hover:text-[#ff2a2a] transition-colors">
        {edu.degree}
      </h3>

      {/* Institution */}
      <p className="text-red-200 text-sm font-bold tracking-wide mb-6">
        {edu.institution}
      </p>
    </div>

    <div>
      {/* Score Box */}
      <div className="bg-black/40 border border-white/10 rounded-2xl p-4 mb-4 flex justify-between items-center">
        <span className="text-white/40 text-xs font-mono font-bold uppercase tracking-wider">
          {edu.scoreLabel}
        </span>
        <span className="text-xl font-black text-white font-mono text-red-400">
          {edu.score}
        </span>
      </div>

      {/* Location / Affiliation footer */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
        <span className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {edu.location}
        </span>
        <span className="text-[11px] text-white/40 truncate ml-2">
          {edu.affiliation}
        </span>
      </div>
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      
      {/* Background visual glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Education
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Foundation in computer science, core engineering principles, and academic qualifications.
          </p>
        </div>

        {/* 3 Vertical Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {educationList.map((edu, index) => (
            <EducationCard key={edu.degree} edu={edu} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
