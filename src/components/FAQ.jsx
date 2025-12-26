import { useState } from "react";

const faqs = [
  {
    q: "A fast-growing brand was sitting on deadstock for over 1.5 years,",
    a: "Within 2 months of launching a structured growth system, the entire deadstock was cleared while qualified inquiries and showroom walk-ins increased consistently.",
  },
  {
    q: "A fast-growing brand was sitting on deadstock for over 1.5 years,",
    a: "We implemented a full-funnel strategy combining content, performance marketing, and automation to unlock consistent growth.",
  },
  {
    q: "A fast-growing brand was sitting on deadstock for over 1.5 years,",
    a: "Clear ownership, systems-driven execution, and measurable outcomes ensured results beyond vanity metrics.",
  },
  {
    q: "A fast-growing brand was sitting on deadstock for over 1.5 years,",
    a: "The focus was on revenue impact — not just reach, likes, or impressions.",
  },
]; 

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full bg-black text-white px-20 py-32 max-lg:px-10 max-sm:px-5">

      {/* ================= HEADING ================= */}
      <h2 className="text-center font-serif text-[48px] text-[#C08860] mb-24">
        Frequently asked questions
      </h2>

      {/* ================= FAQ LIST ================= */}
      <div className="max-w-5xl mx-auto">

        {faqs.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div key={i} className="border-t border-[#C08860]/40">

              {/* QUESTION */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center py-10 text-[20px] font-medium"
              >
                {item.q}
                <span className="text-[#C08860] text-2xl ml-4">{isOpen ? '−' : '+'}</span>
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? "max-h-40 pb-8" : "max-h-0"
                }`}
              >
                <p className="text-gray-300 text-[16px] leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}

        {/* LAST BORDER */}
        <div className="border-t border-[#C08860]/40" />
      </div>
    </section>
  );
}
