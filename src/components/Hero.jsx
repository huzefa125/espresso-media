import { useState, useEffect } from "react";
import tabImg from "../assets/mobile/tab2.png";
import waveImg from "../assets/mobile/graph3.png";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [views, setViews] = useState(0);

  useEffect(() => {
    const target = 6000000;
    const duration = 2000; 
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setViews(target);
        clearInterval(interval);
      } else {
        setViews(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  const formatMillion = (num) => {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(".0", "") + "M";
    }
    return num.toLocaleString();
  };

  return (
    <div id="home" className="min-h-screen w-full bg-black relative overflow-hidden font-sans flex flex-col justify-between">

      {/* ================= HEADER & HERO TEXT ================= */}
      <div className="flex flex-col">
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
          <div className="flex items-center justify-between px-6 md:px-0 lg:px-20 py-6">
            <h1 className="text-xl font-serif text-[#B8734E] max-sm:text-2xl group">
              <span className="transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-espresso group-hover:to-espressoDark">
                The Espresso Media
              </span>
            </h1>
            <nav className="hidden md:flex ml-auto gap-8 lg:gap-11 px-6 py-2 rounded-full border border-[#B8734E] text-[#B8734E] text-sm tracking-widest">
              {["HOME", "ABOUT US", "SERVICES", "TESTIMONIAL", "CASE STUDIES"].map((name) => (
                <a key={name} href={`#${name.toLowerCase().replace(" ", "-")}`} className="relative slant-underline">
                  {name}
                </a>
              ))}
            </nav>

            <a href="#contact" className="hidden md:flex group relative px-4 py-3 rounded-full border border-[#B8734E] text-white text-sm tracking-wide overflow-hidden ml-6">
              <span className="relative z-30 flex items-center gap-2">CONTACT US ↗</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#B8734E] to-[#8a563a] opacity-0 group-hover:opacity-100 transition z-0" />
              <span className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black/50 to-transparent pointer-events-none z-20 rounded-r-full" />
            </a>
            
            <button onClick={() => setOpen(!open)} className="md:hidden text-[#B8734E]">
              <div className="w-6 h-6 flex flex-col justify-center items-center gap-1">
                <span className={`w-5 h-0.5 bg-[#B8734E] transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`w-5 h-0.5 bg-[#B8734E] transition ${open ? "opacity-0" : ""}`} />
                <span className={`w-5 h-0.5 bg-[#B8734E] transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </header>

        <section className="relative z-20 px-6 md:px-0 lg:px-20 mt-10 md:mt-16 flex-shrink-0">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-7xl leading-tight text-[#B8734E] max-w-5xl">
            Where Strategy Is <span className="italic font-semibold">Brewed <br className="hidden md:block" /></span>Into Measurable Results
          </h2>

          <p className="mt-6 max-w-3xl text-white text-lg md:text-2xl leading-relaxed opacity-90">
            A full-funnel growth system designed to move inventory and grow revenue for Experiential spaces and corporate brands.
          </p>
          <a href="#contact" className="group relative mt-8 px-6 py-3 rounded-full border border-[#B8734E] text-white tracking-widest overflow-hidden inline-block text-center active:scale-95 transition-transform">
            <span className="relative z-30 text-sm md:text-base uppercase">Get in touch</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#B8734E] to-[#8a563a] opacity-0 group-hover:opacity-100 transition z-0" />
            <span className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black/50 to-transparent pointer-events-none z-20 rounded-r-full" />
          </a>
        </section>
      </div>

      {/* ================= TABLET + WAVE SECTION ================= */}
      <div className="relative w-full flex flex-col items-center min-h-[40vh] sm:min-h-[40vh] md:min-h-[58vh] justify-center  md:mt-0 pb-0">
        
        {/* THE WAVE */}
        <div className="absolute lg:-bottom-40 sm:-bottom-10 left-0 w-full h-full z-10 lg:z-50 pointer-events-none flex items-center justify-center">
          <img 
            src={waveImg} 
            alt="wave" 
            className="w-[140%] sm:w-[140%] md:w-[100vw] lg:w-[100%] lg:mx-auto h-auto object-contain opacity-70 transform translate-y-[20px] sm:-translate-y-[140px] md:-translate-y-[60px]"
            style={{ 
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)'
            }}
          />
        </div>

        {/* THE TABLET */}
        {/* Fix: Adjusted max-sm:-translate-y to bring the tablet into view on small screens */}
        <div className="relative z-20 max-sm:z-20 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[750px] px-4 animate-[fadeInUp_1.2s_ease-out_1s_both] transform transition-transform translate-y-[40px] max-sm:translate-y-[10px] sm:-translate-y-[120px] md:-translate-y-[80px] lg:-translate-y-0">
          <div className="relative">
            <img
              src={tabImg}
              alt="tablet"
              className="w-full h-auto block drop-shadow-2xl"
            />
            
            {/* OVERLAYS */}
            {/* Fix: Specifically targeting text size and alignment for small screens */}
            <div className="absolute left-[20%] top-[24%] max-sm:left-[20%] max-sm:top-[28%]">
              <div className="text-[10vw] max-sm:text-[8vw] sm:mt-4 sm:text-[7vw] md:text-5xl lg:text-6xl text-white font-bold tabular-nums tracking-tighter leading-none">
                {formatMillion(views)}+
              </div>
            </div>

            <div className="absolute left-[19%] sm:mt-1 top-[45%] max-sm:left-[21%] max-sm:top-[46%]">
              <div className="text-[2.5vw] max-sm:text-[2.2vw] sm:text-[1vw] md:text-xs lg:text-sm text-gray-400 font-medium">
                Real time data as on 15 Dec
              </div>
            </div>

            <div className="absolute left-[19%] top-[55%] w-full max-sm:left-[20%] max-sm:top-[56%] max-sm:w-[65%]">
              <div className="flex gap-1.5 max-sm:gap-1.5 sm:gap-3 md:gap-3 lg:gap-3 items-center text-white text-[20px] max-sm:text-[8px] sm:text-[1.6vw] md:text-[10px] lg:text-xs">
                <span className="max-sm:px-0.5">1H</span>
                <span className="px-1 md:px-2 py-0.5 max-sm:px-1 max-sm:py-0 rounded-md bg-white/10 backdrop-blur-md border border-white/10">1D</span>
                <span className="max-sm:px-0.5">1W</span>
                <span className="max-sm:px-0.5">1Y</span>
                <span className="max-sm:px-0.5">ALL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .slant-underline::after {
          content: "";
          position: absolute;
          bottom: -0.2rem;
          left: 0;
          width: 100%;
          height: 1px;
          background: #B8734E;
          display: block;
          transform: skewX(-30deg) scaleX(0.01);
          transform-origin: left center;
          transition: transform .25s ease;
          border-radius: 1px;
          pointer-events: none;
        }
        .slant-underline:hover::after {
          transform: skewX(-30deg) scaleX(1);
        }
      `}</style>
    </div>
  );
}