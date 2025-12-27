import { useState } from "react";
import tabImg from "../assets/mobile/tab.png";
import waveImg from "../assets/mobile/UPWARD GRAPH.png";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <div
      id="home"
      className="
        min-h-[100vh]
        lg:min-h-[105vh]
        xl:min-h-[110vh]
        w-full bg-black relative overflow-hidden font-sans
      "
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,theme(colors.espresso)_0%,transparent_10%),linear-gradient(225deg,theme(colors.espresso)_0%,transparent_7%)]" />

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50">
        <div className="flex items-center justify-between px-14 py-6 max-sm:px-6">

          <h1 className="text-xl font-serif text-espresso max-sm:text-3xl">
            The Espresso Media
          </h1>

          <nav className="hidden md:flex items-center gap-6 px-8 py-2 rounded-full border border-espresso text-espresso text-sm tracking-widest">
            {["HOME","ABOUT US","SERVICES","TESTIMONIAL","CASE STUDIES"].map(item => (
              <a key={item} href="#" className="relative slant-underline">
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:flex group relative px-7 py-3 rounded-full border border-espresso text-white text-sm tracking-wide overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              CONTACT US <span className="group-hover:translate-x-1 transition">↗</span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-espresso to-espressoDark opacity-0 group-hover:opacity-100 transition" />
          </a>

          <button onClick={() => setOpen(!open)} className="md:hidden text-espresso">
            <div className="w-6 h-6 flex flex-col gap-1">
              <span className={`w-5 h-0.5 bg-espresso transition ${open && "rotate-45 translate-y-1.5"}`} />
              <span className={`w-5 h-0.5 bg-espresso transition ${open && "opacity-0"}`} />
              <span className={`w-5 h-0.5 bg-espresso transition ${open && "-rotate-45 -translate-y-1.5"}`} />
            </div>
          </button>
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

        <a
          href="#contact"
          className="group relative mt-14 px-10 py-3 rounded-full border border-espresso text-white tracking-widest overflow-hidden inline-block"
        >
          <span className="relative z-10">GET IN TOUCH</span>
          <span className="absolute inset-0 bg-gradient-to-r from-espresso to-espressoDark opacity-0 group-hover:opacity-100 transition" />
        </a>
      </section>

      {/* ================= TABLET + WAVE ================= */}
      <div className="absolute inset-x-0 bottom-0 h-[300px] xl:h-[360px] pointer-events-none">

        {/* WAVE (flattened on md) */}
        <div
          className="
            absolute left-0 w-full z-20
            transform origin-bottom
            md:scale-y-[0.6]
            lg:scale-y-100
          "
        >
          <img src={waveImg} alt="wave" className="w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* TABLET */}
        <div
          className="
            absolute left-1/2
            bottom-12 xl:bottom-16
            -translate-x-1/2
            z-10
            animate-[fadeInUp_1.2s_ease-out_1s_both]
          "
        >
          <img src={tabImg} alt="tablet" className="w-[840px] max-sm:w-[350px]" />
        </div>
      </div>

      {/* ================= KEYFRAMES ================= */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
