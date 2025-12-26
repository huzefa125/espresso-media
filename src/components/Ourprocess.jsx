export default function OurProcess() {
  return (
    <section className="w-full bg-black text-white px-24 py-3 max-lg:px-14 max-sm:px-5">

      {/* ================= HEADING ================= */}
      <h2 className="text-center font-serif text-[48px] mb-20">
        Our <span className="text-[#C08860] italic">Process</span>
      </h2>

      {/* ================= CARDS ================= */}
      <div className="grid grid-cols-4 gap-10 max-lg:grid-cols-2 items-center justify-center max-sm:grid-cols-1">

        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className="relative h-[260px] rounded-2xl 
                       bg-gradient-to-br from-[#1a120d] to-[#0b0806]
                       border border-[#C08860]/15
                       shadow-[0_0_40px_rgba(192,136,96,0.08)]"
          >
            {/* NUMBER */}
            <span className="absolute left-6 top-0 font-serif text-[190px] text-[#C08860]/30">
              {num}
            </span>
          </div>
        ))}

      </div>
    </section>
  );
}