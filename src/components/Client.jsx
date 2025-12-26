import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Akshit Pobaru",
      role: "Founder",
      text: "A fast-growing brand was sitting on deadstock for over 1.5 years, tying up capital and showroom space. Within 2 months of launching a structured growth system, the entire deadstock was cleared while qualified inquiries and showroom walk-ins increased consistently.",
    },
    {
      name: "Rahul Mehta",
      role: "Director",
      text: "Espresso Media helped us create a predictable growth system. Lead quality improved drastically and our sales team finally had clarity on what was working.",
    },
    {
      name: "Sneha Kapoor",
      role: "Marketing Head",
      text: "The clarity and execution level was unmatched. From strategy to content to performance, everything worked together as one system.",
    },
    {
      name: "Aman Jain",
      role: "Co-Founder",
      text: "We stopped guessing and started scaling. Within weeks we saw better inquiries, better footfall, and actual revenue impact.",
    },
    {
      name: "Nikhil Shah",
      role: "CEO",
      text: "Their structured approach helped us clear inventory that was stuck for months. Results spoke louder than presentations.",
    },
  ];

  return (
    <section className="w-full bg-black text-white px-24 py-32 max-lg:px-14 max-sm:px-5 max-sm:py-16 overflow-hidden">

      {/* ================= HEADING ================= */}
      <h2 className="text-center font-serif text-[48px] max-sm:text-[36px] text-[#C08860] mb-20 max-sm:mb-10">
        What Our Clients Say
      </h2>

      {/* ================= MARQUEE ================= */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-12 max-sm:gap-6" 
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 10,          // 🔥 speed (increase = slower)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="
                min-w-[520px]
                max-lg:min-w-[440px]
                max-sm:min-w-[280px]
                rounded-[32px]
                bg-gradient-to-b from-[#3a2316] to-[#6a5a4a]
                p-12 max-sm:p-6
                shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              "
            >
              {/* PROFILE */}
              <div className="flex items-center gap-6 max-sm:gap-4 mb-8">
                <div className="w-20 h-20 max-sm:w-14 max-sm:h-14 rounded-full border border-black/30" />
                <div>
                  <h4 className="text-xl max-sm:text-lg font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-sm max-sm:text-xs text-gray-200">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* TEXT */}
              <p className="text-[16px] max-sm:text-[14px] leading-relaxed text-gray-100">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
