import React from 'react';
import stackImage from '../assets/about/Neeraj-avatar.jpg';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const ReactIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider">React.js</span>
  </div>
);

const TypeScriptIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 128 128">
      <rect width="128" height="128" rx="20" fill="#3178C6"/>
      <path d="M72.031 79.594c2.25 3.844 5.906 6.375 10.969 6.375 4.5 0 7.406-2.156 7.406-5.344 0-3.75-3.094-5.062-8.25-7.312-7.5-3.188-12.75-7.219-12.75-15.094 0-8.531 6.844-14.719 17.531-14.719 7.688 0 13.219 2.812 16.875 9.094l-8.531 5.344c-1.875-3.188-4.312-4.688-8.344-4.688-3.75 0-6.188 1.969-6.188 4.781 0 3.281 2.438 4.594 7.688 6.844 8.719 3.75 13.406 7.406 13.406 15.656 0 9.844-7.688 15.375-18.75 15.375-10.406 0-16.781-4.781-20.156-11.25l9.094-5.062zM36.75 53.062H20.625V44.25h43.125v8.812H47.625v47.25H36.75v-47.25z" fill="#FFF"/>
    </svg>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider">TypeScript</span>
  </div>
);

const NodeIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 128 128">
      <path fill="#339933" d="M64 12.333L16 40.046v55.424L64 123.184l48-27.714V40.046L64 12.333z"/>
      <path fill="#FFF" d="M64 24.815l37.202 21.478v42.956L64 110.727 26.798 89.249V46.293L64 24.815z"/>
      <path fill="#339933" d="M64 37.297l26.402 15.242v30.485L64 98.266 37.598 83.024V52.539L64 37.297z"/>
    </svg>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider">Node.js</span>
  </div>
);

const SupabaseIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 109 113" fill="none">
      <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874L63.708 110.284z" fill="url(#supabase-grad1)"/>
      <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874L63.708 110.284z" fill="url(#supabase-grad2)" fillOpacity="0.2"/>
      <path d="M45.317 2.071C48.176-1.53 53.974.443 54.043 5.041l.742 67.251H9.566c-8.19 0-12.758-9.46-7.665-15.875L45.317 2.071z" fill="#3ECF8E"/>
      <defs>
        <linearGradient id="supabase-grad1" x1="53.974" y1="54.974" x2="94.163" y2="71.829" gradientUnits="userSpaceOnUse">
          <stop stopColor="#249361"/>
          <stop offset="1" stopColor="#3ECF8E"/>
        </linearGradient>
        <linearGradient id="supabase-grad2" x1="36.156" y1="30.578" x2="54.484" y2="65.081" gradientUnits="userSpaceOnUse">
          <stop/>
          <stop offset="1" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider">Supabase</span>
  </div>
);

const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 128 128">
      <path fill="url(#python-blue)" d="M63.58 3.5c-30.82 0-28.94 13.37-28.94 13.37l.03 13.84h29.41v4.17H21.75S3.5 32.74 3.5 63.66c0 30.93 15.89 29.83 15.89 29.83h9.49V80.12s-.52-15.89 15.62-15.89h26.83s15.11.24 15.11-14.8V22.48S89.5 3.5 63.58 3.5zm-16.1 9.21a4.67 4.67 0 1 1 0 9.34 4.67 4.67 0 0 1 0-9.34z"/>
      <path fill="url(#python-yellow)" d="M64.42 124.5c30.82 0 28.94-13.37 28.94-13.37l-.03-13.84H63.92v-4.17h42.33s18.25 2.14 18.25-28.78c0-30.93-15.89-29.83-15.89-29.83h-9.49v13.37s.52 15.89-15.62 15.89H42.47s-15.11-.24-15.11 14.8v26.95s-3.06 18.98 22.86 18.98zm16.1-9.21a4.67 4.67 0 1 1 0-9.34 4.67 4.67 0 0 1 0 9.34z"/>
      <defs>
        <linearGradient id="python-blue" x1="16.59" y1="9.52" x2="79.94" y2="72.87" gradientUnits="userSpaceOnUse">
          <stop stopColor="#387EB8"/>
          <stop offset="1" stopColor="#366994"/>
        </linearGradient>
        <linearGradient id="python-yellow" x1="51.81" y1="52.21" x2="114.73" y2="115.14" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE052"/>
          <stop offset="1" stopColor="#FFC331"/>
        </linearGradient>
      </defs>
    </svg>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider">Python</span>
  </div>
);

const About = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const input = document.getElementById('firstName');
        if (input) input.focus();
      }, 500);
    } else {
      window.location.hash = 'contact';
    }
  };

  const handleDownloadResume = (e) => {
    e.preventDefault();
    const resumeUrl = '/Neeraj-Resume-2026.pdf';
    
    // Programmatic blob download to ensure instant file download across all browsers
    fetch(resumeUrl)
      .then((res) => {
        if (!res.ok) throw new Error('File fetch failed');
        return res.blob();
      })
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = blobUrl;
        a.download = 'Neeraj-Resume-2026.pdf';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(blobUrl);
        }, 200);
      })
      .catch(() => {
        // Fallback: direct window open
        const a = document.createElement('a');
        a.href = resumeUrl;
        a.download = 'Neeraj-Resume-2026.pdf';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
  };

  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Neeraj Gupta — Full Stack Web Developer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-10 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 mt-6">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <ReactIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="400" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <TypeScriptIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="500" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <NodeIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <SupabaseIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="700" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
          </div>

          {/* Action Buttons in About Section */}
          <div data-aos="fade-up" data-aos-delay="800" className="flex flex-wrap items-center gap-4 mt-10">
            {/* Hire Me Button */}
            <a 
              id="about-hire-me"
              href="#contact"
              onClick={handleScrollToContact}
              className="px-6 py-3 rounded-full bg-black text-white font-bold text-sm md:text-base hover:bg-neutral-900 transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2 cursor-pointer border border-black"
            >
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              Hire Me
            </a>

            {/* Contact Me Button */}
            <a 
              id="about-contact-me"
              href="#contact"
              onClick={handleScrollToContact}
              className="px-6 py-3 rounded-full bg-red-950/80 text-white font-bold text-sm md:text-base hover:bg-black transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2 cursor-pointer border border-white/30 backdrop-blur-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </a>

            {/* Download Resume Button */}
            <button 
              id="about-download-resume"
              type="button"
              onClick={handleDownloadResume}
              className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm md:text-base hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </button>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
