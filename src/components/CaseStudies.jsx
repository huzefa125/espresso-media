"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import caseImg from "../assets/Notice/leads.png";
import case2 from "../assets/casestudy/case-study-2-walkins.png";
import case3 from "../assets/casestudy/case-study-3-40pct.png";
import case4 from "../assets/casestudy/case-study-4-200-leads.png";

export default function CaseStudies() {
  const caseStudies = [
    {
      image: caseImg,
      description:
        "A fast-growing brand was sitting on deadstock for over 1.5 years, tying up capital and showroom space. Within 2 months of launching a structured growth system, the entire deadstock was cleared—while qualified inquiries and showroom walk-ins increased consistently.",
      outcomes: [
        "100% deadstock cleared",
        "Sustained increase in inquiries & footfall",
      ],
    },
    {
      image: case2,
      description:
        "This was an established brand with strong infrastructure but limited market visibility. Within one month, by restructuring their demand-generation and local visibility strategy, showroom walk-ins doubled, and sales momentum followed shortly after.",
      outcomes: ["2× walk-ins", "Sales traction within weeks"],
    },
    {
      image: case3,
      description:
        "A brand invested heavily in a new showroom—but sales were stagnant due to zero market awareness. Within 30 days, we built and executed a high-reach awareness and conversion campaign.",
      outcomes: [
        "3.8 million people reached",
        "40% sales growth in one month",
        "New showroom visibility established fast",
      ],
    },
    {
      image: case4,
      description:
        "One of our longest-standing clients needed leads and walk-ins during the festive season with just two weeks to launch. We executed a focused, time-bound campaign designed for urgency and local demand.",
      outcomes: [
        "200+ qualified leads in two weeks",
        "Higher festival-time footfall",
        "Strong conversion intent",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [errorIndex, setErrorIndex] = useState(null);
  const currentCase = caseStudies[currentIndex];

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="w-full bg-black text-white px-24 py-32 max-lg:px-14 max-sm:px-5">
      {/* ================= HEADING ================= */}
      <div className="text-center mb-20">
        <h2 className="font-serif text-[56px] text-[#C08860] mb-6 max-sm:text-[40px]">
          Case Studies
        </h2>
        <p className="font-serif text-[28px] text-gray-200 leading-snug max-w-3xl mx-auto max-sm:text-[20px]">
          Selected business outcomes delivered 
          through structured growth systems
        </p>
      </div>

      {/* ================= CASE CARD ================= */}
      <div
        className="relative max-w-7xl mx-auto rounded-[36px]
                   border border-[#C08860]/30
                   bg-gradient-to-br from-[#140d08] to-[#080504]
                   p-14 max-lg:p-10 max-sm:p-6"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-2 gap-14 items-center max-lg:grid-cols-1 max-sm:gap-8"
          >
            {/* ================= IMAGE ================= */}
            <div className="flex flex-col items-center">
              <button type="button" onClick={nextCase} className="w-full text-left">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={currentCase.image || caseImg}
                    onError={(e) => {
                      // fallback to the default caseImg and mark the index
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = caseImg;
                      setErrorIndex(currentIndex);
                      console.warn('Case image failed to load, fallback applied:', currentCase.image);
                    }}
                    alt={`Case study ${currentIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="rounded-2xl shadow-xl max-w-full border"
                  />
                </AnimatePresence>
              </button>

            </div>

            {/* ================= CONTENT ================= */}
            <div>
              <p className="text-[22px] leading-relaxed text-gray-100 mb-10 max-sm:text-[18px]">
                {currentCase.description}
              </p>

              <ul className="space-y-4 text-[#C08860] text-[20px] max-sm:text-[16px]">
                {currentCase.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-2xl max-sm:text-xl">✔</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ================= LEFT ARROW ================= */}
        <button
          onClick={prevCase}
          className="absolute left-[-26px] top-1/2 -translate-y-1/2
                     w-14 h-14 rounded-full bg-[#C08860]
                     flex items-center justify-center
                     text-black text-2xl hover:scale-105 transition
                     max-sm:w-10 max-sm:h-10 max-sm:left-[-16px] max-sm:text-xl"
          aria-label="Previous case study"
        >
          ←
        </button>

        {/* ================= RIGHT ARROW ================= */}
        <button
          onClick={nextCase}
          className="absolute right-[-26px] top-1/2 -translate-y-1/2
                     w-14 h-14 rounded-full bg-[#C08860]
                     flex items-center justify-center
                     text-black text-2xl hover:scale-105 transition
                     max-sm:w-10 max-sm:h-10 max-sm:right-[-16px] max-sm:text-xl"
          aria-label="Next case study"
        >
          →
        </button>
      </div>
    </section>
  );
}
