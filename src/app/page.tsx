"use client";
import MainButton from "./components/MainButton";
import Logo from "./components/Logo";
import MainText from "./components/MainText";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className={`relative w-full min-h-screen`}>
      <div
        className={`flex flex-col justify-evenly min-h-screen items-center w-full py-8 px-4 gap-8 transition-all`}
      >
        <motion.div
          className="flex flex-col gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Logo text="Sárdi Balázs" />
          <MainText />
        </motion.div>
        <div className="flex flex-row gap-2 max-xl:flex-col items-center">
          <MainButton
            title="About Me"
            desc="Get to know who I am and how I got into front-end development."
            image="about.svg"
            index={1}
            clickHandler={() => router.push("/about")}
          />
          <MainButton
            title="My Works"
            desc="Check out some of the websites and interfaces I’ve built."
            image="works.svg"
            index={2}
            clickHandler={() => router.push("/works")}
          />
          <MainButton
            title="Contact Me"
            desc="Drop me a message if you want to work together or just say hi."
            image="contact.svg"
            index={3}
            clickHandler={() => router.push("/contact")}
          />
        </div>
      </div>
    </div>
  );
}
