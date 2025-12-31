import { useState } from "react";

const faqs = [

  {
    q: "How is your approach different from other agencies?",
    a: "Most agencies sell services. We build and manage growth systems. That means we don’t run isolated campaigns or chase trends. We design a structured ecosystem — from brand positioning to customer acquisition and conversion — with one clear goal: consistent, predictable results. Every move is intentional, measured, and tied to business outcomes.",
  },
  {
    q: "What's the minimum retainer period?",
    a: "We require a minimum commitment of 3 months (90 days) for all retainers. This timeline allows us to build a strong growth foundation, implement our proven systems, and deliver measurable results for your business.",
  },
  {
    q: "Will you handle everything or do we need an internal team?",
    a: "We handle strategy, creative, execution, and optimization end-to-end. Your role is simple: approvals, insights, and alignment. Everything else is managed by our team.",
  },
  {
    q: "Is this suitable for new brands or only established ones?",
    a: "Both. We help new brands build strong market presence from day one, and we help established brands remove inefficiencies, scale faster, and unlock the next level of growth.",
  },
  {
    q: "How do we get started?",
    a: "It begins with a strategy call where we understand your goals, challenges, and growth potential. If there’s alignment, we design a custom roadmap tailored to your business.",
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
                className="w-full flex justify-between items-center py-10 text-[20px] "
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
                <p className="text-gray-300 text-[16px] leading-relaxed ">
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
