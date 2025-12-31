export default function Footer() {
  return (
    <footer className="bg-black text-white px-10">
      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto pt-12 pb-10 grid grid-cols-1 md:grid-cols-3 items-start gap-y-8 md:gap-y-0">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h1 className="text-[32px] md:text-[36px] font-serif text-[#C08860]">
            The Espresso Media
          </h1>
          <p className="mt-3 text-white/80">
            Brewing Digital Success
          </p>
        </div>

        {/* CENTER */}
        <div className="text-center md:text-left md:ml-40">
          <h3 className="text-xl  font-semibold mb-4">Visit</h3>
          <div className="text-white/80 leading-7">
            <p>The Espresso Media, B906,</p>
            <p>Swati trinity, SP 150ft ring road</p>
            <p>Ahmedabad, 380057</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="text-center md:text-right md:ml-35">
          <h3 className="text-xl font-semibold ">Connect</h3>
          <div className="text-white/80 leading-7 ">
            <p>
              <span className="text-white font-semibold">Hire Us :</span>{" "}
              <a href="mailto:info@espressomedia.in" className="hover:underline">
                info@espressomedia.in
              </a>
            </p>
            <p className="">
              <span className="text-white font-semibold">Join Us :</span>{" "}
              <a href="mailto:career@espressomedia.in" className="hover:underline">
                career@espressomedia.in
              </a>
            </p>
            <p className="">
              <span className="text-white font-semibold">Contact us :</span>{" "}
              <a href="tel:+918758117559" className="hover:underline">
                +91 87581 17559
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto border-t border-white/10" />

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/60 gap-4">
        <p className="text-center md:text-left">© {new Date().getFullYear()} The Espresso Media. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
}