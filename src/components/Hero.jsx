import { useState, useEffect } from "react";
import tabImg from "../assets/mobile/tab2.png";
import waveImg from "../assets/mobile/grahp1.png";

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
    <div id="home" className="min-h-screen w-full bg-black relative overflow-hidden font-sans flex flex-col">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 md:px-14 py-6">
          <h1 className="text-xl font-serif text-[#B8734E] max-sm:text-2xl">
            The Espresso Media
          </h1>
          <nav className="hidden md:flex ml-auto gap-8 lg:gap-11 px-6 py-2 rounded-full border border-[#B8734E] text-[#B8734E] text-sm tracking-widest">
            {["HOME", "ABOUT US", "SERVICES", "TESTIMONIAL", "CASE STUDIES"].map((name) => (
              <a key={name} href={`#${name.toLowerCase().replace(" ", "-")}`} className="relative slant-underline">
                {name}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden md:flex group relative px-4 py-3 rounded-full border border-[#B8734E] text-white text-sm tracking-wide overflow-hidden ml-6">
            <span className="relative z-10 flex items-center gap-2">CONTACT US ↗</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#B8734E] to-[#8a563a] opacity-0 group-hover:opacity-100 transition" />
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

      {/* ================= HERO CONTENT ================= */}
      <section className="relative z-20 px-6 md:px-14 mt-10 md:mt-16 flex-shrink-0">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight text-[#B8734E] max-w-5xl">
          Where Strategy Is <span className="italic font-semibold">Brewed <br className="hidden md:block" /></span>Into Measurable Results
        </h2>

        <p className="mt-6 max-w-3xl text-white text-lg md:text-2xl leading-relaxed opacity-90">
          A full-funnel growth system designed to move inventory and grow revenue for Experiential spaces and corporate brands.
        </p>
        <a href="#contact" className="group relative mt-8 px-6 py-3 rounded-full border border-[#B8734E] text-white tracking-widest overflow-hidden inline-block text-center active:scale-95 transition-transform">
          <span className="relative z-10 text-sm md:text-base">GET IN TOUCH</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#B8734E] to-[#8a563a] opacity-0 group-hover:opacity-100 transition" />
        </a>
      </section>

      {/* ================= TABLET + WAVE SECTION ================= */}
      <div className="relative mt-auto w-full flex flex-col items-center min-h-[40vh] md:min-h-[50vh] justify-end">
        
        {/* THE WAVE: Fixed to bottom but starts visual line from the middle */}
        <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none h-full overflow-hidden">
          <img 
            src={waveImg} 
            alt="wave" 
            className="w-full h-full object-cover md:object-fill opacity-60 object-top" 
            style={{ 
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, black 100%)'
            }} 
          />
        </div>

        {/* THE TABLET: Positioned on top of the wave */}
        <div className="relative z-20 w-full max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] px-4 pb-0 animate-[fadeInUp_1.2s_ease-out_1s_both]">
          <div className="relative">
            <img
              src={tabImg}
              alt="tablet"
              className="w-full h-auto block drop-shadow-2xl"
            />
            
            {/* OVERLAYS */}
            <div className="absolute left-[19%] top-[24%]">
              <div className="text-[7vw] sm:text-[6vw] md:text-5xl lg:text-7xl text-white font-bold tabular-nums tracking-tighter leading-none">
                {formatMillion(views)}+
              </div>
            </div>

            <div className="absolute left-[20%] top-[45%]">
              <div className="text-[2vw] sm:text-[1.5vw] md:text-xs lg:text-sm text-gray-400 font-medium">
                Real time data as on 15 Dec
              </div>
            </div>

            <div className="absolute left-[20%] top-[55%] w-full">
              <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 items-center text-white text-[1.8vw] sm:text-[1.5vw] md:text-[10px] lg:text-sm">
                <span>1H</span>
                <span className="px-1.5 md:px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md border border-white/10">1D</span>
                <span>1W</span>
                <span>1Y</span>
                <span>ALL</span>
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