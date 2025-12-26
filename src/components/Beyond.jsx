import { motion } from "framer-motion";

import toyota from "../assets/TOYOTA.png";
import tilelab from "../assets/TILE LAB.png";
import honda from "../assets/HONDA.png";
import gc from "../assets/GC GROUP.png";
import flais from "../assets/FLAIS.png";
import hero from "../assets/HERO.png";
import kawasaki from "../assets/KAWASAKI.png";
import mahindra from "../assets/MAHINDRA.png";
import renault from "../assets/RENAULT.png";
import sns from "../assets/SNS.png";
import gokul from "../assets/GOKUL GROUP.png";
import gcgroup from "../assets/GC GROUP.png";

import States from "./States.jsx";

export default function Beyond() {
  const logos = [
    toyota, tilelab, honda, gc, flais,
    hero, kawasaki, mahindra, renault, sns, gokul, gcgroup
  ];

  return (
    <section className="w-full bg-black text-white px-6 md:px-12 lg:px-20 xl:px-30 pt-16 pb-16 overflow-hidden">

      <h3 className="text-center font-serif italic text-[#C08860] text-3xl md:text-4xl lg:text-5xl xl:text-[52px] mb-8">
        Beyond the likes...
      </h3>

      <p className="max-w-6xl mx-auto text-center text-lg md:text-xl lg:text-2xl xl:text-[26px] leading-[1.6] py-8 md:py-12 lg:py-16 text-white font-light">
        Our team ensures your brand stands out among your target market,
        generating qualified leads and walk-ins through marketing execution
        all managed end-to-end, allowing you to focus on strategic priorities.
      </p>
 
      <States />

      {/* ================= LOGOS (MASK FADE) ================= */}
      <div
        className="relative w-full overflow-hidden mt-6"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <motion.div
          className="flex gap-3 md:gap-4 lg:gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center bg-black flex-shrink-0"
            >
              <img
                src={logo}
                alt="Brand"
                className="max-w-[70%] max-h-[70%] object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
