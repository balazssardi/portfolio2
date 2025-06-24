"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { libre } from "../fonts";
import { motion } from "motion/react";

export default function MainButton({
  title,
  desc,
  image,
  to,
  index,
}: {
  title: string;
  desc: string;
  image: string;
  to: string;
  index: number;
}) {
  const [style, setStyle] = useState({});
  const delay = index / 5;
  const router = useRouter();
  const div = useRef<HTMLDivElement>(null);
  function mouseMoveHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = div.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect!.left;
    const y = e.clientY - rect!.top;
    setStyle({ "--x": `${x}px`, "--y": `${y}px` });
  }
  return (
    <motion.div
      className="hoverBox flex rounded-3xl drop-shadow-lg"
      style={style}
      onMouseMove={mouseMoveHandler}
      ref={div}
      onClick={() => router.push(to)}
      initial={{ transform: "translateY(40px)", opacity: 0 }}
      whileInView={{ transform: "none", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.2 }}
    >
      <div
        className="w-full h-full rounded-[20px] flex justify-evenly items-center flex-col text-center text-black p-4 border border-[#ECECEC] backdrop-blur-2xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(252, 252, 252, 0.85) 0%, rgba(244, 244, 244, 0.85) 100%)",
        }}
      >
        <h1 className={`leading-none text-[30px] ${libre.className}`}>
          {title}
        </h1>
        <p className="leading-tight">{desc}</p>
        <Image
          src={`/${image}`}
          alt={`${title} photo`}
          width={235}
          height={235}
        />
      </div>
    </motion.div>
  );
}
