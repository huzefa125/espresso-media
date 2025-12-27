import { useState } from "react";
import tabImg from "../assets/mobile/tab.png";
import waveImg from "../assets/mobile/UPWARD GRAPH.png";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <div id="home" className="min-h-screen sm:min-h-[130vh] md:min-h-[140vh] lg:min-h-[120vh] w-full bg-black relative overflow-hidden font-sans">

      {/* ================= BACKGROUND GLOW ================= */}
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,theme(colors.espresso)_0%,transparent_10%),linear-gradient(225deg,theme(colors.espresso)_0%,transparent_7%)]"
      />

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 ">
        <div className="flex items-center justify-between px-14 py-6 max-sm:px-6">

          {/* LOGO */}
          <h1 className="text-xl font-serif text-espresso max-sm:text-3xl">
            The Espresso Media
          </h1>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 px-8 py-2 rounded-full border border-espresso text-espresso text-sm tracking-widest">
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

          {/* DESKTOP CTA */}
          <a
            href="#contact"
            className="hidden md:flex group relative px-7 py-3 rounded-full border border-espresso text-white text-sm tracking-wide overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              CONTACT US <span className="group-hover:translate-x-1 transition">↗</span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-espresso to-espressoDark opacity-0 group-hover:opacity-100 transition" />
          </a>

          {/* HAMBURGER */}
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
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-6 space-y-4 border-t border-espresso/20 bg-black">
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

      {/* ================= HERO CONTENT ================= */}
      <section className="relative z-20 px-14 mt-24 max-w-5xl max-sm:px-6">

        <h2 className="font-serif text-[56px] leading-tight text-espresso max-sm:text-[38px]">
          Where Clear <span className="italic font-semibold">Strategy Brews</span>
          <br />
          Scalable <span className="italic font-semibold">Growth</span>
        </h2>

        <p className="mt-10 max-w-3xl text-white text-2xl leading-relaxed max-sm:text-lg">
          A full-funnel growth system designed to move inventory
          <br className="max-sm:hidden" />
          and grow revenue for Experiential spaces and corporate brands.
        </p>

        <a href="#contact" className="group relative mt-14 px-10 py-3 rounded-full border border-espresso text-white tracking-widest overflow-hidden inline-block">
          <span className="relative z-10">GET IN TOUCH</span>
          <span className="absolute inset-0 bg-gradient-to-r from-espresso to-espressoDark opacity-0 group-hover:opacity-100 transition" />
        </a>
      </section>

      {/* ================= TABLET + WAVE ================= */}
      <div className="absolute inset-x-0 bottom-0 h-[450px] sm:h-[500px] md:h-[550px] lg:h-[500px] pointer-events-none">
        <div className="absolute left-0 w-full z-20">
          <img src={waveImg} alt="wave" className="w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="absolute left-1/2 bottom-12 sm:bottom-20 md:bottom-32 lg:bottom-24 xl:bottom-20 -translate-x-1/2 z-10 animate-[fadeInUp_1.2s_ease-out_1s_both]">
          <img src={tabImg} alt="tablet" className="w-[350px] sm:w-[500px] md:w-[700px] lg:w-[840px]" />
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