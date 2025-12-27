import { motion } from "framer-motion";

import leftImg from "../assets/Notice/visibility.png";
import centerImg from "../assets/Notice/leads.png";
import rightImg from "../assets/Notice/engagement.png";
import eyeIcon from "../assets/icons/open-eye.png";
import trophyIcon from "../assets/icons/trophy.png";
import chatIcon from "../assets/icons/chat.png";

export default function GetNoticed() {
  return (
    <section className="w-full bg-black text-white py-28 max-sm:py-12 overflow-hidden">

      {/* ================= HEADING ================= */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="
          text-center font-serif text-[56px] text-[#E6D3C3] mb-20
          max-lg:text-[46px]
          max-sm:text-[36px] max-sm:mb-12
        "
      >
        We Help You Get{" "}
        <span className="text-[#C08860] italic">Noticed</span>
      </motion.h2>

      {/* ================= CARDS ================= */}
      <motion.div
        className="
          mx-auto max-w-[1440px]
          flex items-end justify-center
          gap-10
          max-xl:gap-10
          max-lg:flex-col max-lg:items-center max-lg:gap-12
          px-6 md:px-10 lg:px-0
          max-sm:gap-10
        "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.25 } },
        }}
      >
        <AnimatedCard>
          <Card
            title="We'll help you get Visible"
            image={leftImg}
            footerIcon={eyeIcon}
            footerText="3.8 Million Views"
            size="side"
          />
        </AnimatedCard>

        <AnimatedCard delayBoost>
          <Card
            title="We'll help you Get Qualified Leads"
            image={centerImg}
            footerIcon={trophyIcon}
            footerText="1,242 Qualified Leads in 2 months"
            size="center"
          />
        </AnimatedCard>

        <AnimatedCard>
          <Card
            title="We'll help you Drive Engagement"
            image={rightImg}
            footerIcon={chatIcon}
            footerText="722 Comments"
            size="side"
          />
        </AnimatedCard>
      </motion.div>
    </section>
  );
}

/* ================= ANIMATION WRAPPER ================= */

function AnimatedCard({ children, delayBoost = false }) {
  return (
    <motion.div
      className="w-full flex justify-center"
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.9,
            ease: "easeOut",
            delay: delayBoost ? 0.15 : 0,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ================= CARD ================= */

function Card({ title, image, footerIcon, footerText, size }) {
  const isCenter = size === "center";

  return (
    <div
      className={`
        relative rounded-[28px]
        bg-gradient-to-b from-[#3A2419] to-black
        shadow-[0_0_80px_rgba(192,136,96,0.15)]

        ${
          isCenter
            ? `
              w-[520px]
              max-xl:w-[530px]
              max-lg:w-[290px]
              max-md:w-[500px]
              max-sm:w-full
              p-10 max-sm:p-6
            `
            : `
              w-[380px]
              max-xl:w-[250px]
              max-lg:w-[300px]
              max-md:w-[300px]
              max-sm:w-full
              p-8 max-sm:p-6
            `
        }
      `}
    >
      {/* TITLE */}
      <p className="text-[#E6D3C3] text-sm tracking-wide mb-6">
        {title}
      </p>

      {/* IMAGE */}
      <div
        className={`
          rounded-2xl flex items-center justify-center
          ${
            isCenter
              ? "h-[460px] max-lg:h-[250px] max-md:h-[200px] max-sm:h-[220px]"
              : "h-[480px] max-lg:h-[250px] max-md:h-[200px] max-sm:h-[220px]"
          }
        `}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain max-w-[90%]"
        />
      </div>

      {/* FOOTER */}
      <div className="flex items-center gap-3 mt-8 text-[#E6D3C3]">
        <img src={footerIcon} alt="" className="w-6 h-6" />
        <span className="text-base max-sm:text-sm">{footerText}</span>
      </div>
    </div>
  );
}
