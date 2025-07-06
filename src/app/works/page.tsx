"use client";
import Logo from "../components/Logo";
import Image from "next/image";
import worksicon from "../../../public/works.svg";
import SearchContainer from "../components/SearchContainer";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";

export default function Works() {
  return (
    <div className="relative">
      <div className="absolute xl:w-[calc(20%-12px)] left-1/2 -translate-x-1/2 h-24 overflow-hidden flex items-end">
        <Image
          alt="Works icon"
          src={worksicon}
          width={720}
          height={720}
          className="rotate-180"
          priority
        />
      </div>
      <div className="w-full min-h-screen relative pb-24">
        <motion.div
          className="flex flex-row items-center justify-evenly p-8 max-lg:flex-col gap-8 z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center gap-8 xl:w-1/5 px-4 py-8">
            <Logo text="Works" />
            <p className="max-w-sm text-center text-text">
              A selection of responsive, user-centered web projects showcasing
              my expertise in front-end development and passion for creating
              exceptional digital experiences.
            </p>
          </div>
        </motion.div>
        <SearchContainer />
        <Navbar />
      </div>
    </div>
  );
}
