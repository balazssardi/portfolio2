import { motion } from "motion/react";
import { libre } from "../fonts";
import SocialButton from "./SocialButton";

export default function ContactSocials() {
  return (
    <motion.div
      className="flex rounded-4xl bg-mainbg p-2 xl:w-1/5 max-xl:w-full contactshadow"
      initial={{ transform: "translateY(40px)", opacity: 0 }}
      whileInView={{ transform: "none", opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="p-4 rounded-[24px] border-border border w-full flex flex-col gap-3 bg-(image:--gradient-contactbox) text-text">
        <h1 className={`leading-none text-[30px] ${libre.className} m-2`}>
          My Socials
        </h1>
        <SocialButton
          icon="fa6-brands:facebook-f"
          type="facebook"
          link="https://facebook.com"
        />
        <SocialButton
          icon="fa6-brands:linkedin-in"
          type="linkedIn"
          link="https://facebook.com"
        />
        <SocialButton
          icon="fa6-brands:x-twitter"
          type="x"
          link="https://facebook.com"
        />
        <SocialButton
          icon="fa6-brands:instagram"
          type="instagram"
          link="https://facebook.com"
        />
      </div>
    </motion.div>
  );
}
