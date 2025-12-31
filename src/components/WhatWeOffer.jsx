"use client";

import { useState, useEffect, useRef } from "react";
import brandingIcon from "../assets/fa/branding.png";
import contentIcon from "../assets/fa/content.png";
import socialIcon from "../assets/fa/social.png";
import performanceIcon from "../assets/fa/per.png";
import automationIcon from "../assets/fa/ai.png";

const services = [
  {
    title: "Branding & Designing",
    description:
      "A mix of creativity and strategy to deliver results that tell a compelling brand story. Clear, consistent brand identities  that make your business look credible, premium, and trustworthy at every customer touchpoint.",
    icon: brandingIcon,
  },
  {
    title: "Content Strategy & Production",
    description:
      "We plan and create content that aligns with your brand goals. From short-form content to long-form storytelling.",
    icon: contentIcon,
  },
  {
    title: "Social Media Marketing",
    description:
      "Data-driven social media strategies designed to increase reach, engagement, and qualified leads.",
    icon: socialIcon,
  },
  {
    title: "Performance Marketing",
    description:
      "Throwing money aimlessly into ads that barely drive results doesn’t happen here. Each campaign is executed with a clear goal, tracked in real time, and optimized to deliver measurable business results.",
    icon: performanceIcon,
  },
  {
    title: "AI Automation",
    description:
      "Lead capture, follow-ups, and internal workflows are automated so no inquiry is ever missed. This reduces manual effort, speeds up response time, and improves lead-to-sale conversion.",
    icon: automationIcon,
  },
];

export default function WhatWeOffer() {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);

  const itemRefs = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const observers = [];

    if (headingRef.current) {
      const obs = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && entry.target.classList.add("animate-in"),
        { threshold: 0.3 }
      );
      obs.observe(headingRef.current);
      observers.push(obs);
    }

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) =>
          entry.isIntersecting &&
          setVisibleItems((prev) => (prev.includes(i) ? prev : [...prev, i])),
        { threshold: 0.2 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="w-full bg-black text-white py-20 max-sm:py-10">
      <div className="text-center mb-20 max-sm:mb-10">
        <h2
          ref={headingRef}
          className="font-serif text-[48px] max-sm:text-[36px] opacity-0 translate-y-8 transition-all duration-700"
        >
          What All Do We <span className="text-[#C08860] italic">Offer</span>
        </h2>
      </div>

      <div className="w-full px-16 max-lg:px-10 max-sm:px-5">
        {services.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`border-t border-[#C08860]/40 transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              <button
                type="button"

                // ✅ DESKTOP hover — EXACT SAME BEHAVIOR
                onPointerEnter={(e) => {
                  if (e.pointerType === "mouse") {
                    setOpenIndex(index);
                  }
                }}
                onPointerLeave={(e) => {
                  if (e.pointerType === "mouse") {
                    setOpenIndex(null);
                  }
                }}

                // ✅ MOBILE + EMULATOR tap
                onPointerDown={(e) => {
                  if (e.pointerType !== "mouse") {
                    setOpenIndex((prev) =>
                      prev === index ? null : index
                    );
                  }
                }}

                className="w-full flex items-center justify-between py-10 max-sm:py-6 text-left group"
              >
                <div className="flex items-center gap-6 max-sm:gap-4">
                  <div className="w-16 h-16 max-sm:w-12 max-sm:h-12 group-hover:scale-110 transition-transform">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // fallback to content icon if specific icon fails to load
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = contentIcon;
                      }}
                    />
                  </div>

                  <h3 className="font-serif text-[45px] max-lg:text-[36px] max-sm:text-[28px] text-[#C08860] group-hover:text-[#D4916C] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <span
                  className="text-[#C08860] transition-transform"
                  style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  ▼
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-500"
                style={{
                  maxHeight: isOpen ? "500px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <p className="px-3 py-2 pl-8 ml-13 mb-2 text-sm max-sm:px-4 max-sm:pl-0 text-gray-300 pr-100">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
