"use client";
import MainButton from "./components/MainButton";
import Logo from "./components/Logo";
import MainText from "./components/MainText";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <div className="flex flex-col justify-evenly min-h-screen items-center w-full py-8 max-xl:gap-8">
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
            image="aboutme.svg"
            to="about"
            index={1}
          />
          <MainButton
            title="My Works"
            desc="Check out some of the websites and interfaces I’ve built."
            image="works.svg"
            to="works"
            index={2}
          />
          <MainButton
            title="Contact Me"
            desc="Drop me a message if you want to work together or just say hi."
            image="contact.svg"
            to="contact"
            index={3}
          />
        </div>
      </div>
      <div className="absolute h-full w-full grid grid-cols-5 max-xl:grid-cols-3 -z-10 bg-bg left-0 top-0">
        <div className="border-l border-lines h-full"></div>
        <div className="border-x mr-6 border-lines h-full max-xl:hidden"></div>
        <div className="border-x xl:mx-2 border-lines h-full"></div>
        <div className="border-x ml-6 border-lines h-full max-xl:hidden"></div>
        <div className="border-r border-lines h-full"></div>
      </div>
    </div>
  );
}
