import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks, footerContent } from '../data/portfolioData';
import footerHeroBg from '../assets/about/footer-hero.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/919151404340";

  return (
    <footer className="relative w-full overflow-hidden text-white font-sans pt-16 md:pt-20 pb-10 px-6 sm:px-10 md:px-16 lg:px-20 border-t border-slate-800/80 min-h-[60vh] md:min-h-[68vh] flex flex-col justify-between">
      {/* 1. Background Photo Layer — Preserved at high natural visibility (~65%) */}
      <div 
        className="absolute inset-0 bg-cover bg-[center_18%] sm:bg-[center_22%] md:bg-[center_28%] pointer-events-none"
        style={{
          backgroundImage: `url(${footerHeroBg})`,
        }}
      />

      {/* 2. Light, Balanced Dark-Navy Contrast Overlay (~30% opacity) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060810]/75 via-[#060810]/35 to-[#060810]/85 pointer-events-none" />

      {/* Top & Bottom seamless edge blends */}
      <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#0a0a0f] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#060810] to-transparent pointer-events-none" />

      {/* Subtle Cyan & Indigo Ambient Glows */}
      <div className="absolute -top-16 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* 3. Footer Content (Relative z-10 for full clarity & clickability) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-between h-full gap-10 md:gap-12">
        
        {/* Top Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 items-start">
          
          {/* Column 1: Tech Focus & Taglines */}
          <div className="md:col-span-5 flex flex-col gap-3.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0d18]/85 border border-cyan-500/30 w-fit backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
              <span className="text-[11px] font-mono font-semibold tracking-wider text-cyan-300 uppercase">
                Architecture & Engineering
              </span>
            </div>

            <div className="flex flex-col gap-1 font-mono text-xs sm:text-sm text-slate-100 font-medium">
              {footerContent.taglines.map((line, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-100 hover:text-white transition-colors drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  <span className="text-cyan-400 font-mono text-xs font-bold">▹</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>

            {/* Status & Year Badge */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0d18]/85 border border-sky-400/40 text-sky-200 text-[11px] font-mono font-medium backdrop-blur-md shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                <span>Available for opportunities</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#0a0d18]/85 border border-white/15 text-slate-200 text-[11px] font-mono backdrop-blur-md shadow-md">
                {currentYear}
              </span>
            </div>
          </div>

          {/* Column 2: Academic Background */}
          <div className="md:col-span-4 flex flex-col gap-3 md:items-start">
            <div className="text-[11px] font-mono tracking-wider text-slate-200 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] font-semibold">
              Academic Background
            </div>
            
            <div className="p-3.5 rounded-xl bg-[#0a0d18]/85 border border-white/15 backdrop-blur-md w-full max-w-sm shadow-xl">
              <p className="text-xs font-semibold text-white tracking-wide">
                {footerContent.credential}
              </p>
              <p className="text-[11px] text-slate-300 font-mono mt-0.5">
                Computer Science & Engineering
              </p>
            </div>

            <div className="flex items-center gap-6 pt-0.5 font-mono text-xs">
              <a 
                href="#projects" 
                className="group inline-flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 transition-colors font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
              >
                <span>View Work</span>
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a 
                href="#contact" 
                className="text-slate-200 hover:text-white transition-colors underline underline-offset-4 decoration-slate-400 hover:decoration-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Column 3: GitHub CTA */}
          <div className="md:col-span-3 flex flex-col gap-3 md:items-end">
            <div className="text-[11px] font-mono tracking-wider text-slate-200 uppercase md:text-right drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] font-semibold">
              Connect & Code
            </div>

            {/* Explore GitHub CTA Button */}
            <a 
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#0a0d18]/85 hover:bg-[#0f1424] border border-cyan-500/40 hover:border-cyan-300 text-white font-mono text-xs tracking-wider transition-all duration-300 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]"
            >
              <svg className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>Explore My GitHub</span>
              <span className="text-cyan-400 group-hover:translate-x-0.5 transition-transform">↗</span>
            </a>
          </div>

        </div>

        {/* Gradient Divider Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 via-sky-500/40 to-transparent" />

        {/* Centerpiece Hero Typography: "neeraj" with Light Glow */}
        <div className="w-full flex justify-center items-center py-4 md:py-8 overflow-hidden relative">
          <motion.h2 
            initial={{ opacity: 0.95, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[18vw] sm:text-[16vw] md:text-[14vw] leading-none font-black tracking-tighter lowercase select-none text-center bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-[0_6px_35px_rgba(0,0,0,0.95)]"
            style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
          >
            {personalInfo.brandName.toLowerCase()}
          </motion.h2>
        </div>

        {/* Gradient Divider Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500/40 via-cyan-500/30 to-transparent" />

        {/* Bottom Bar: Copyright, WhatsApp Phone, Social Icons */}
        <div className="pt-1 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono">
          
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-slate-200 text-center sm:text-left order-3 md:order-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            <span>{footerContent.copyright}</span>
          </div>

          {/* Center: Phone Number with WhatsApp Link */}
          <div className="order-1 md:order-2 flex items-center justify-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0a0d18]/90 hover:bg-[#0f1424] border border-emerald-500/40 hover:border-emerald-400 text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.7)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] backdrop-blur-md cursor-pointer"
              title="Click to chat on WhatsApp"
            >
              {/* WhatsApp Icon */}
              <svg className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.112.551 4.095 1.517 5.823l-1.608 5.877 6.046-1.586c1.668.908 3.568 1.42 5.589 1.42 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 22.046c-1.848 0-3.565-.514-5.034-1.404l-.361-.22-3.593.942.959-3.504-.24-.383c-.983-1.564-1.539-3.411-1.539-5.377 0-5.541 4.51-10.046 10.046-10.046 5.539 0 10.046 4.505 10.046 10.046 0 5.541-4.507 10.046-10.046 10.046z"/>
              </svg>
              <span className="font-bold text-sm tracking-wide text-white">+91 9151404340</span>
              <span className="text-[10px] text-emerald-400 font-medium">WhatsApp ↗</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="order-2 md:order-3 flex items-center gap-3">
            {/* GitHub */}
            <a 
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#0a0d18]/85 hover:bg-[#0f1424] border border-white/20 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-md"
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#0a0d18]/85 hover:bg-[#0f1424] border border-white/20 hover:border-sky-400 text-slate-200 hover:text-sky-300 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-md"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#0a0d18]/85 hover:bg-[#0f1424] border border-white/20 hover:border-pink-400 text-slate-200 hover:text-pink-300 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-md"
              aria-label="Instagram"
              title="Instagram Profile"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;



