"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Logo from "../components/Logo";
import abouticon from "../../../public/about.svg";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="relative text-text">
      <div className="absolute xl:w-[calc(20%-12px)] left-1/2 -translate-x-1/2 h-24 overflow-hidden flex items-end">
        <Image alt="Contact icon" src={abouticon} width={720} height={720} />
      </div>
      <div className="w-full min-h-screen relative pb-24">
        <div className="absolute h-full w-full grid grid-cols-5 max-xl:grid-cols-3 -z-10 bg-bg">
          <div className="border-l border-lines h-full"></div>
          <div className="border-x mr-6 border-lines h-full max-xl:hidden"></div>
          <div className="border-x xl:mx-2 border-lines h-full"></div>
          <div className="border-x ml-6 border-lines h-full max-xl:hidden"></div>
          <div className="border-r border-lines h-full"></div>
        </div>
        <motion.div
          className="flex flex-row items-center justify-evenly p-8 max-lg:flex-col gap-8 z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center gap-8 xl:w-1/5 px-4 py-8">
            <Logo text="About" />
            <p className="max-w-sm text-center">
              An introduction to my values, and creative approach, highlighting
              my journey as a front-end developer and commitment to building
              thoughtful digital solutions.
            </p>
          </div>
        </motion.div>
        <Navbar />
      </div>
    </div>
  );
}
