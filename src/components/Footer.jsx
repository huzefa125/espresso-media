export default function Footer() {
  return (
    <footer className="bg-black border-t border-espresso/20 text-espresso py-12 px-14 max-sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Logo + Tagline */}
        <div className="flex-1">
          <h2 className="text-2xl font-serif text-espresso">The Espresso Media</h2>
          <p className="mt-3 text-sm text-white/80 max-w-sm">Brewing Digital Success systems that move and grow revenue for experiential spaces and corporate brands.</p>
        </div>

        {/* Links */}
        <div className="flex-1 flex justify-between max-w-md w-full">
          <div>
            <h3 className="text-sm tracking-wider text-espresso font-semibold">Explore</h3>
            <nav className="mt-3 flex flex-col gap-2 text-white/80 text-sm">
              <a href="#home" className="slant-underline">Home</a>
              <a href="#services" className="slant-underline">Services</a>
              <a href="#case-studies" className="slant-underline">Case Studies</a>
            </nav>
          </div>

          <div>
            <h3 className="text-sm tracking-wider text-espresso font-semibold">Company</h3>
            <nav className="mt-3 flex flex-col gap-2 text-white/80 text-sm">
              <a href="#beyond" className="slant-underline">About Us</a>
              <a href="#testimonials" className="slant-underline">Testimonials</a>
              <a href="#contact" className="slant-underline">Contact</a>
            </nav>
          </div>
        </div>

        {/* Contact / CTA */}
        <div className="flex-1 flex flex-col items-start md:items-end gap-4">
          <a
            href="#contact"
            className="group relative inline-flex w-full md:w-auto justify-center md:justify-start items-center gap-3 px-6 py-3 rounded-full border border-espresso text-white overflow-hidden"
          >
            <span className="relative z-10">Get in touch</span>
            <span className="absolute inset-0 bg-gradient-to-r from-espresso to-espressoDark opacity-0 group-hover:opacity-100 transition" />
          </a>

          <div className="text-xs text-white/60 text-left md:text-right max-w-full md:max-w-[20rem] break-words leading-snug">
            <p>The Espresso Media, Swati trinity, B906, <br></br> SP 150 ft ring road, Ahmedabad</p>
            <br />
            <p>Hire Us: <a href="mailto:info@espressomedia.in" className="underline">info@espressomedia.in</a></p>
            <br />
            <p>Join Us: <a href="mailto:career@espressomedia.in" className="underline">career@espressomedia.in</a></p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-espresso/10 text-white/60 text-xs flex flex-col md:flex-row justify-between gap-4">
        <div>© {new Date().getFullYear()} The Espresso Media. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="slant-underline">Privacy</a>
          <a href="#" className="slant-underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}
