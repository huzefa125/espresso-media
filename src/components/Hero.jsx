export default function Hero() {
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden font-sans">
      {/* 🔥 DIAGONAL GRADIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#b8734e55,transparent_20%)]" />

      {/* ================= NAVBAR ================= */}
      <header className="relative z-10 flex items-center justify-between px-14 py-8">
        {/* Logo */}
        <h1 className="text-2xl font-serif text-espresso">
          The Espresso Media
        </h1>

        {/* Nav Links */}
        <nav className="flex items-center gap-6">
          <div className="flex items-center gap-6 px-8 py-2 justify-center rounded-full border border-espresso text-espresso text-sm tracking-widest">
            <a href="#">HOME</a>
            <a href="#">ABOUT US</a>
            <a href="#">SERVICES</a>
            <a href="#">TESTIMONIAL</a>
            <a href="#">CASE STUDIES</a>
          </div>

          {/* Contact Button */}
          <button className="ml-4 px-6 py-3 rounded-full bg-gradient-to-b from-espresso to-espressoDark text-black text-sm tracking-widest">
            CONTACT US
          </button>
        </nav>
      </header>

      {/* ================= HERO CONTENT ================= */}
      <section className="relative z-10 px-14 mt-24 max-w-5xl">
        {/* Headline */}
        <h2 className="font-serif text-[64px] leading-tight text-espresso">
          Where Clear{" "}
          <span className="italic font-semibold">Strategy Brews</span>
          <br />
          Scalable <span className="italic font-semibold">Growth</span>
        </h2>

        {/* Sub text */}
        <p className="mt-10 max-w-3xl text-white text-2xl leading-relaxed">
          A full-funnel growth system designed to move inventory
          <br />
          and grow revenue for Experiential spaces and corporate brands.
        </p>

        {/* CTA */}
        <button className="mt-14 px-10 py-3 rounded-full border border-espresso text-espresso tracking-widest hover:bg-espresso hover:text-black transition">
          GET IN TOUCH
        </button>
      </section>
    </div>
  );
}
