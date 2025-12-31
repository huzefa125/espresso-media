import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from "framer-motion";

const States = () => {

  const ref = useRef(null);

  // 🔥 ONLY CHANGE IS HERE
  const isInView = useInView(ref, { once: false, margin: "-120px" });

  const useCountUp = (end, start) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      if (!start) return;

      let current = 0;
      const increment = end / 60;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setValue(end);
          clearInterval(timer);
        } else {
          setValue(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end, start]);

    return value;
  };

  const Stat = ({ value, label }) => (
    <div className="text-center px-4">
      <div className="text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold leading-none mb-4">
        <span className="text-7xl md:text-5xl lg:text-7xl leading-none select-none
                           bg-gradient-to-b from-espresso-dark via-espresso to-espresso-dark 
                           bg-clip-text text-transparent">
          {value}
        </span>

      </div>
      <div className="text-xs md:text-sm tracking-[0.25em] text-gray-400 font-light">
        {label}
      </div>
    </div>
  );

  const Divider = () => <div className="h-16 md:h-20 lg:h-24 w-[1px] bg-gray-700 max-sm:hidden" />;

  const reach = useCountUp(6, isInView);
  const brands = useCountUp(150, isInView);
  const years = useCountUp(3, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <div className="mt-8 mb-20 flex justify-center items-center gap-8 md:gap-12 lg:gap-16 max-sm:flex-col max-sm:gap-14">
        <Stat value={`${reach}M+`} label="TARGETED REACH" />
        <Divider />
        <Stat value={`${brands}+`} label="BRANDS SCALED" />
        <Divider />
        <Stat value={`${years}+`} label="YEARS EXPERIENCE" />
      </div>
    </motion.div>
  );
};
export default States;
