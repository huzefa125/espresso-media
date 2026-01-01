import { useState, useEffect } from "react";
import tabImg from "../assets/mobile/tab.png";
import waveImg from "../assets/mobile/grahp1.png";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [views, setViews] = useState(0);

  useEffect(() => {
    const target = 6000000;
    const duration = 2000; // 2 seconds
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
    <div id="home" className="min-h-screen md:min-h-[120vh] lg:min-h-[125vh] w-full bg-black relative overflow-hidden font-sans">


      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,theme(colors.espresso)_0%,transparent_10%),linear-gradient(225deg,theme(colors.espresso)_0%,transparent_7%)]"
      />


      <header className="sticky top-0 z-50 ">
        <div className="flex items-center justify-between px-14 py-6 max-sm:px-6">

          {/* LOGO */}
          <h1 className="text-xl font-serif text-espresso max-sm:text-3xl">
            The Espresso Media
          </h1>
          <nav className="hidden md:flex ml-auto gap-11 px-6 py-2 rounded-full border border-espresso text-espresso text-sm tracking-widest">
            {[
              { name: "HOME", href: "#home" },
              { name: "ABOUT US", href: "#beyond" },
              { name: "SERVICES", href: "#services" },
              { name: "TESTIMONIAL", href: "#testimonials" },
              { name: "CASE STUDIES", href: "#case-studies" }
            ].map(item => (
              <a
                key={item.name}
                href={item.href}
                className="relative slant-underline"
              >
                {item.name}
              </a>
            ))}
          </nav>


          <a
            href="#contact"
            className="hidden md:flex group relative px-4 py-3 rounded-full border border-espresso text-white text-sm tracking-wide overflow-hidden ml-6"
          >
            <span className="relative z-10 flex items-center gap-2">
              CONTACT US <span className="group-hover:translate-x-1 transition">↗</span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-espresso to-espressoDark opacity-0 group-hover:opacity-100 transition" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-espresso"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1">
              <span className={`w-5 h-0.5 bg-espresso transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`w-5 h-0.5 bg-espresso transition ${open ? "opacity-0" : ""}`} />
              <span className={`w-5 h-0.5 bg-espresso transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-6 py-6 space-y-4 border-t border-espresso/20 bg-black">
            {[
              { name: "HOME", href: "#home" },
              { name: "ABOUT US", href: "#beyond" },
              { name: "SERVICES", href: "#services" },
              { name: "TESTIMONIAL", href: "#testimonials" },
              { name: "CASE STUDIES", href: "#case-studies" },
            ].map(item => (
              <a
                key={item.name}
                href={item.href}
                className="block text-espresso text-lg py-2 border-b border-espresso/20"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              className="block w-full mt-4 px-6 py-3 rounded-full border border-espresso text-espresso tracking-widest text-center"
              onClick={() => setOpen(false)}
            >
              CONTACT US
            </a>
          </div>
        </div>
      </header>


      <section className="relative z-20 px-7 max-w-5xl md:ml-17  max-sm:px-6">
        {/* Where Strategy Is Brewed Into Measurable Results */}

        <h2 className="font-serif text-[50px] leading-tight text-espresso max-sm:text-[38px]">
          Where Strategy Is <span className="italic font-semibold">Brewed <br /></span>Into Measurable Results
          <br /><span className="italic font-semibold"></span>
        </h2>

        <p className="mt-10 max-w-3xl text-white text-2xl leading-relaxed max-sm:text-lg">
          A full-funnel growth system designed to move inventory
          <br className="max-sm:hidden" />
          and grow revenue for Experiential spaces and corporate brands.
        </p>

        <a
          href="#contact"
          className="group relative mt-7 px-5 sm:px-4 md:px-5 py-3 max-sm:py-2 max-sm:rounded-md rounded-full border border-espresso text-white tracking-widest max-sm:tracking-wide overflow-hidden inline-block text-center active:scale-95 transition-transform"
          aria-label="Get in touch"
        >
          <span className="relative z-10 text-base max-sm:text-sm sm:text-lg md:text-xl">GET IN TOUCH</span>
          <span className="absolute inset-0 bg-gradient-to-r from-espresso to-espressoDark opacity-0 group-hover:opacity-100 transition" />
        </a>
      </section>

      {/* ================= TABLET + WAVE ================= */}
      <div className="absolute inset-x-0 bottom-0 h-[300px] pointer-events-none">
        <div className="absolute left-0 w-full z-20">
          <img src={waveImg} alt="wave" className="w-full object-cover w-full [mask-image:linear-gradient(to_bottom,black_0%,transparent)]" />
          <div className="absolute inset-x-0 bottom-40 h-80 " />
        </div>

        <div className="absolute left-1/2 bottom-50 md:bottom-10 -translate-x-2/4 z-10 animate-[fadeInUp_1.2s_ease-out_1s_both]">
          <div className="relative">
            <img
              src={tabImg}
              alt="tablet"
              className="
      w-[85vw] 
      sm:w-[500px]   
      md:w-[700px]   
      max-w-[780px]"/>
            <div
              aria-hidden="true"
              className="absolute left-[28%] top-[28%] -translate-x-1/2 text-center pointer-events-none"
              style={{ transformOrigin: 'center' }}
            >
              <div className="text-lg md:text-5xl text-gray-400 tabular-nums">
                {formatMillion(views)}+
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= KEYFRAMES & NAV UNDERLINE ================= */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Slanted (leaning) underline for nav links */
        .slant-underline::after {
          content: "";
          position: absolute;
          bottom: -0.2rem; /* slightly closer to baseline */
          left: 0;
          width: 100%;
          height: 1px; /* thinner underline */
          background: var(--color-espresso, #B8734E);
          display: block;
          transform: skewX(-30deg) scaleX(0.01);
          transform-origin: left center;
          transition: transform .25s ease;
          will-change: transform;
          border-radius: 1px;
          pointer-events: none;
        }
        .slant-underline:hover::after,
        .slant-underline:focus::after {
          transform: skewX(-30deg) scaleX(1);
        }

      `}</style>
    </div>
  );
}