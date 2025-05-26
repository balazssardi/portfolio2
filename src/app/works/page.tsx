"use client";
import Logo from "../components/Logo";
import Image from "next/image";
import banner from "../../../public/worksbanner.png";
import SearchContainer from "../components/SearchContainer";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";

export default function Works() {
  return (
    <div className="relative">
      <div className="w-full min-h-screen relative">
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
          <div className="flex flex-col gap-4">
            <Logo text="Works" />
            <p className="max-w-sm">
              A selection of responsive, user-centered web projects showcasing
              my expertise in front-end development and passion for creating
              exceptional digital experiences.
            </p>
          </div>
          <Image src={banner} alt="Page banner" />
        </motion.div>
        <SearchContainer />
        <Navbar />
      </div>
    </div>
  );
}
