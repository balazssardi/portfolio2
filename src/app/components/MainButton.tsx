"use client";

import { useRef } from "react";
import Image from "next/image";
import { libre } from "../fonts";
import { motion } from "motion/react";

export default function MainButton({
  title,
  desc,
  image,
  index,
  clickHandler,
}: {
  title: string;
  desc: string;
  image: string;
  index: number;
  clickHandler: () => void;
}) {
  const delay = index / 5;
  const div = useRef<HTMLDivElement>(null);
  function mouseMoveHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = div.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect!.left;
    const y = e.clientY - rect!.top;
    if (!div.current) return;
    div.current.style.setProperty("--x", `${x}px`);
    div.current.style.setProperty("--y", `${y}px`);
  }

  return (
    <motion.div
      className={`hoverBox flex rounded-3xl drop-shadow-lg`}
      onMouseMove={mouseMoveHandler}
      ref={div}
      initial={{ transform: "translateY(40px)", opacity: 0 }}
      animate={{ transform: "none", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.2 }}
      onClick={clickHandler}
    >
      <div className="w-full h-full rounded-[20px] flex justify-evenly items-center flex-col text-center text-text px-4 py-8 gap-4 border border-border backdrop-blur-2xl bg-(image:--gradient-mainbuttonbg) relative">
        <div className="flex flex-col gap-2">
          <h1 className={`leading-none text-[30px] ${libre.className}`}>
            {title}
          </h1>
          <p className="leading-tight">{desc}</p>
        </div>

        <Image
          src={`/${image}`}
          alt={`${title} photo`}
          width={235}
          height={235}
          className="h-[10em] w-[10em]"
        />
      </div>
    </motion.div>
  );
}
