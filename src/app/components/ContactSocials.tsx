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
          link="https://www.facebook.com/balazs.sardi.376/"
        />
        <SocialButton
          icon="fa6-brands:linkedin-in"
          type="linkedIn"
          link="https://www.linkedin.com/in/bal%C3%A1zs-s%C3%A1rdi-728655339/"
        />
        <SocialButton
          icon="fa6-brands:x-twitter"
          type="x"
          link="https://x.com/balazssardi1"
        />
        <SocialButton
          icon="fa6-brands:instagram"
          type="instagram"
          link="https://www.instagram.com/balazs_sardi"
        />
      </div>
    </motion.div>
  );
}
