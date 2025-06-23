import { motion } from "motion/react";
import { libre } from "../fonts";

export default function ContactSocials() {
  return (
    <motion.div
      className="flex rounded-4xl bg-white p-2 xl:w-1/5 max-xl:w-full contactshadow"
      initial={{ transform: "translateY(40px)", opacity: 0 }}
      whileInView={{ transform: "none", opacity: 1 }}
      viewport={{ once: true }}
    >
      <div
        className="p-4 rounded-[24px] border-border border w-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(252, 252, 252, 0.95) 0%, rgba(244, 244, 244, 0.95) 100%)",
        }}
      >
        <h1 className={`leading-none text-[30px] ${libre.className}`}>
          My Socials
        </h1>
      </div>
    </motion.div>
  );
}
