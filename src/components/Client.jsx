import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import vinayakImg from "../assets/profile/vinayak_honda.png";
import nishaImg from "../assets/profile/nisha.png";
import dinuImg from "../assets/profile/dinu.png";
import akshitImg from "../assets/profile/akshit_pobaru.png";

export default function Testimonials() {
  const testimonials = [
     
    {
      name: "Umar",
      role: "Marketing Manager at Vinayak Honda ",
      city:" Morbi, Gujarat",
      text:
        "The espresso media team represents among the highest levels of customer service I have experienced. Information was accurate, responses to queries were turned around very fast. Answers were clear and where necessary detailed enough for us to make informed decisions quickly, minimising the end to end time to process complex transactions among a number of parties.",
      image: vinayakImg,
    },
    {
      name: "Akshit Pobaru",
      role: "MD of the Gokul Group ",
      city: " Jamnagar, Gujarat",
      text:
        "I have been working with The Espresso Media for 3 years now! Their expertise in crafting keen and professional designs is unparalleled. Espresso Media has consistently exceeded my expectations, delivering outstanding results. Their creative team consistently produces designs that are not only visually stunning but also perfectly aligned with our brand identity and marketing objectives. Their attention to detail, innovative ideas, and commitment to client satisfaction are exemplary. I, with my entire team of Gokul Group, highly recommend The Espresso Media.",
      image: akshitImg,
    },
    {
      name: "Nisha Mariam",
      role: "Co-founder at You ‘n’ us consulting ",
      city: " Florida, USA",
      text:
        "Working with The Espresso Media has been a pleasure for our company. The team is personable, and excels in collaboration. Their dedication to achieving our company's goals is evident, as they leverage their professional skills and talent to execute a strategic plan, resulting in the creation of an attention-grabbing social media account for our business. We highly recommend The Espresso Media for their exceptional social media marketing skills.",
      image: nishaImg,
    },
    {
      name: "Dinu",
      role: "Business & mindset coach ",
      city: " Sri Lanka",
      text:
        "The Espresso Media boasts one of the most creative and highly skilled Social Media Managers and Graphic Designers in our team. The professionals at The Espresso Media are dedicated and professional in their approach to projects, consistently delivering top-notch results. Communication is seamless, making it easy to provide feedback, and deadlines are met effectively, resulting in excellent outcomes. We extend our best wishes to The Espresso Media for their continued success!",
      image: dinuImg,
    },
   
    {
      name: "Umar",
      role: "Marketing Manager at Vinayak Honda — Morbi, Gujarat",
      text:
        "The espresso media team represents among the highest levels of customer service I have experienced. Information was accurate, responses to queries were turned around very fast. Answers were clear and where necessary detailed enough for us to make informed decisions quickly, minimising the end to end time to process complex transactions among a number of parties.",
      image: vinayakImg,
    }, 
    {
      name: "Nisha Mariam",
      role: "Co-founder at You ‘n’ us consulting — Florida, USA",
      text:
        "Working with The Espresso Media has been a pleasure for our company. The team is personable, and excels in collaboration. Their dedication to achieving our company's goals is evident, as they leverage their professional skills and talent to execute a strategic plan, resulting in the creation of an attention-grabbing social media account for our business. We highly recommend The Espresso Media for their exceptional social media marketing skills.",
      image: nishaImg,
    },

    {
      name: "Dinu",
      role: "Business & mindset coach — Sri Lanka",
      text:
        "The Espresso Media boasts one of the most creative and highly skilled Social Media Managers and Graphic Designers in our team. The professionals at The Espresso Media are dedicated and professional in their approach to projects, consistently delivering top-notch results. Communication is seamless, making it easy to provide feedback, and deadlines are met effectively, resulting in excellent outcomes. We extend our best wishes to The Espresso Media for their continued success!",
      image: dinuImg,
    },

    {
      name: "Akshit Pobaru",
      role: "MD of the Gokul Group — Jamnagar, Gujarat",
      text:
        "I have been working with The Espresso Media for 3 years now! Their expertise in crafting keen and professional designs is unparalleled. Espresso Media has consistently exceeded my expectations, delivering outstanding results. Their creative team consistently produces designs that are not only visually stunning but also perfectly aligned with our brand identity and marketing objectives. Their attention to detail, innovative ideas, and commitment to client satisfaction are exemplary. I, with my entire team of Gokul Group, highly recommend The Espresso Media.",
      image: akshitImg,
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  const mobileScrollRef = useRef(null);

  useEffect(() => {
    if (!isMobile) return;
    const el = mobileScrollRef.current;
    if (!el) return;

    let intervalId = null;
    let isPaused = false;

    const start = () => {
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(() => {
        if (isPaused) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        // if at or near end, reset to start
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: Math.max(el.clientWidth * 0.8, 200), behavior: 'smooth' });
        }
      }, 3500);
    };

    const onPointerDown = () => {
      isPaused = true;
      if (intervalId) clearInterval(intervalId);
    };
    const onPointerUp = () => {
      isPaused = false;
      start();
    };

    el.addEventListener('pointerdown', onPointerDown, { passive: true });
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);

    start();

    return () => {
      if (intervalId) clearInterval(intervalId);
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerUp);
    };
  }, [isMobile]);

  return (
    <section className="w-full bg-black text-white px-30 py-25 max-lg:px-14 max-sm:px-5 max-sm:py-16 overflow-hidden">

      {/* ================= HEADING ================= */}
      <h2 className="text-center font-serif text-[48px] max-sm:text-[36px] text-[#C08860] mb-20 max-sm:mb-10">
        What Our Clients Say
      </h2>

      {/* ================= MARQUEE ================= */}
      <div className="overflow-hidden relative">
        {isMobile ? (
          <div ref={mobileScrollRef} aria-live="polite" className="flex gap-6 overflow-x-auto snap-x snap-mandatory -mx-6 px-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85%] rounded-[32px] bg-gradient-to-b from-[#3a2316] to-[#6a5a4a] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] snap-center mx-3"
              >
                {/* PROFILE */}
                <div className="flex items-center gap-4 mb-4">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover bg-[#1b120f] border border-espresso/40 ring-1 ring-espresso/10" />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-[#1b120f] border border-espresso/40" />
                  )}

                  <div>
                    <h4 className="text-lg font-semibold font-serif">{item.name}</h4>
                    {(() => {
                      const rawRole = item.role || "";
                      const parts = rawRole.includes('—') ? rawRole.split('—').map(s => s.trim()) : [rawRole.trim()];
                      const city = (item.city && item.city.trim()) || (parts[1] ? parts[1] : null);
                      const roleLine = parts[0];
                      return (
                        <>
                          {roleLine && <p className="text-sm text-gray-200">{roleLine}</p>}
                          {city && <p className="text-sm text-gray-200">{city}</p>}
                        </>
                      );
                    })()}
                  </div>
                </div>

                <p className="text-[12px] leading-relaxed text-gray-100">{item.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            className="flex gap-12 max-sm:gap-6" 
            animate={{ x: ["0%", "-200%"] }}
            transition={{
              duration: 28  ,          
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="
                  min-w-[650px]
                  max-lg:min-w-[400px]
                  max-sm:min-w-[280px]
                  rounded-[32px]
                  bg-gradient-to-b from-[#3a2316] to-[#6a5a4a]
                  px-15 py-5 pr-20 pl-10 ml-10 max-sm:p-6
                  shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                "
              >
                {/* PROFILE */}
                <div className="flex items-center gap-6 max-sm:gap-4 mb-4">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-20 h-20 max-sm:w-14 max-sm:h-14 rounded-full object-cover bg-[#1b120f] border border-espresso/40 ring-1 ring-espresso/10" />
                  ) : (
                    <div className="w-20 h-20 max-sm:w-14 max-sm:h-14 rounded-full bg-[#1b120f] border border-espresso/40" />
                  )}

                  <div>
                    <h4 className="text-xl max-sm:text-lg font-semibold">
                      {item.name}
                    </h4>
                    {(() => {
                      const rawRole = item.role || "";
                      const parts = rawRole.includes('—') ? rawRole.split('—').map(s => s.trim()) : [rawRole.trim()];
                      const city = (item.city && item.city.trim()) || (parts[1] ? parts[1] : null);
                      const roleLine = parts[0];
                      return (
                        <>
                          {roleLine && <p className="text-xs max-sm:text-sm pt-1 text-gray-200">{roleLine}</p>}
                          {city && <p className="text-xs max-sm:text-sm text-gray-200">{city}</p>}
                        </>
                      );
                    })()}
                  </div>
                </div>
                {/* TEXT */}
                <p className="text-[14px] max-sm:text-[10px] leading-relaxed text-gray-100">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
