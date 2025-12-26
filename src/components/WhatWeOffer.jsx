import { useState, useEffect, useRef } from "react";
import brandingIcon from "../assets/fa/branding.png";
import contentIcon from "../assets/fa/ai.png";
import socialIcon from "../assets/fa/social.png";

const services = [
  {
    title: "Branding & Designing",
    description:
      "A mix of creativity and strategy to deliver results that tell a compelling brand story.\n\nClear, consistent brand identities that make your business look credible, premium, and trustworthy at every customer touchpoint. From visual identity to sales-focused designs, everything is created to support conversion, not just aesthetics.",
    icon: brandingIcon,
  },
  {
    title: "Content Strategy & Production",
    description:
      "We plan and create content that aligns with your brand goals. From short-form content to long-form storytelling, everything is crafted to engage, educate, and convert.",
    icon: contentIcon,
  },
  {
    title: "Social Media Marketing",
    description:
      "Data-driven social media strategies designed to increase reach, engagement, and qualified leads across platforms.",
    icon: socialIcon,
  },
];

export default function WhatWeOffer() {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);
  const headingRef = useRef(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const observers = [];

    // Observer for heading
    if (headingRef.current) {
      const headingObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        { threshold: 0.3 }
      );
      headingObserver.observe(headingRef.current);
      observers.push(headingObserver);
    }

    // Observers for each service item
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !visibleItems.includes(index)) {
                setVisibleItems((prev) => [...prev, index]);
              }
            });
          },
          { threshold: 0.2 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="w-full bg-black text-white overflow-hidden py-20 max-sm:py-10">

      {/* HEADING */}
      <div className="text-center mb-20 max-sm:mb-10">
        <h2 
          ref={headingRef}
          className="font-serif text-[48px] max-sm:text-[36px] opacity-0 translate-y-8 transition-all duration-800"
        >
          What All Do We{" "}
          <span className="text-[#C08860] italic">Offer</span>
        </h2>
      </div>

      {/* FULL WIDTH CONTAINER */}
      <div className="w-full px-16 max-lg:px-10 max-sm:px-5">
        {services.map((item, index) => {
          const isOpen = openIndex === index;
          const isVisible = visibleItems.includes(index);

          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`border-t border-[#C08860]/40 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              {/* TITLE ROW */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-10 max-sm:py-6 text-left group"
              >
                <div className="flex items-center gap-6 max-sm:gap-4">
                  <div className="w-16 h-16 max-sm:w-12 max-sm:h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={item.icon}
                      alt={`${item.title} icon`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-serif text-[45px] max-lg:text-[36px] max-sm:text-[28px] px-8 max-sm:px-4 text-[#C08860] group-hover:text-[#D4916C] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                <span 
                  className="text-[#C08860] text-3xl max-sm:text-2xl font-light transition-transform duration-300"
                  style={{ 
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' 
                  }}
                >
                  ▼
                </span>
              </button>

              {/* CONTENT */}
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: isOpen ? '500px' : '0px',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="pb-12 max-sm:pb-8">
                  <p className="max-w-4xl lg:ml-5 md:ml-5 px-8 pl-24 max-sm:ml-0 max-sm:px-4 max-sm:pl-0 text-gray-300 text-[16px] leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* LAST BOTTOM LINE */}
        <div 
          className={`border-b border-[#C08860]/40 transition-all duration-1000 ${
            visibleItems.length === services.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        />
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