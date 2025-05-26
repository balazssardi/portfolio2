"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Logo from "../components/Logo";
import banner from "../../../public/worksbanner.png";

export default function About() {
  return (
    <div>
      <motion.div
        className="flex flex-row items-center justify-evenly p-8 max-lg:flex-col gap-8 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-4">
          <Logo text="About Me" />
          <p className="max-w-sm">
            A selection of responsive, user-centered web projects showcasing my
            expertise in front-end development and passion for creating
            exceptional digital experiences.
          </p>
        </div>
        <Image src={banner} alt="Page banner" />
      </motion.div>
    </div>
  );
}
