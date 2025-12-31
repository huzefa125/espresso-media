import pr1 from "../assets/process/pr 1.png";
import pr2 from "../assets/process/pr 2.png";
import pr3 from "../assets/process/pr 3.png";
import pr4 from "../assets/process/pr 4.png";

export default function OurProcess() {
  return (
    <section className="w-full bg-black text-white px-24 py-3 max-lg:px-14 max-sm:px-5">

      {/* ================= HEADING ================= */}
      <h2 className="text-center font-serif text-[48px] mb-20">
        Our <span className="text-[#C08860] italic">Process</span>
      </h2>

      {/* ================= CARDS ================= */}
      <div className="grid grid-cols-4 gap-10 max-lg:grid-cols-2 items-center justify-center max-sm:grid-cols-1">

        {[1, 2, 3, 4].map((num, idx) => (
          <div
            key={num}
            className="relative h-[350px] rounded-2xl overflow-hidden"
          >

            {/* IMAGE */}
            <div className="absolute inset-0 flex items-center justify-center p-2 z-10">
              <img
                src={[pr1, pr2, pr3, pr4][idx]}
                alt={`Process ${num}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}