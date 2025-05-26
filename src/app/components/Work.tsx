"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

export default function Work({
  work,
  index,
}: {
  work: { name: string; image: string; link: string };
  index: number;
}) {
  const delay = index / 10;
  const [hover, setHover] = useState<boolean>(false);
  return (
    <motion.div
      className="h-auto p-2 bg-white rounded-3xl cursor-pointer relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: delay }}
      viewport={{ once: true }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Image
        className="rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,_0,_0,_0.05)] mb-8"
        src={work.image}
        width={360}
        height={260}
        alt="Work image"
      />
      <div
        className={`absolute left-0 bottom-0 px-4 py-3 flex w-[calc(100%-16px)] mb-2 mx-2 rounded-b-[16px] transition-all ${
          hover
            ? "h-[calc(100%-16px)] rounded-2xl bg-[linear-gradient(180deg,_rgba(244,_244,_244,_1.00)_0%,_rgba(244,_244,_244,_1.00)_100%)] items-start"
            : "h-1/2 bg-[linear-gradient(180deg,_rgba(252,_252,_252,_0.00)_0%,_rgba(244,_244,_244,_0.95)_45.67%)] items-end"
        }`}
      >
        <div className="flex flex-row justify-between w-full">
          <div className="">
            <p className="text-lg font-medium">Opes</p>
            <p className="text-secondarytext fonnt-medium">
              Graphic Designer&apos;s Landing
            </p>
          </div>
          <div className="bg-white flex flex-col items-center rounded-xl overflow-hidden h-min">
            <div className="py-1.5 px-2 bg-black w-full flex flex-row gap-0.75">
              <span className=" bg-[#333333] w-1 h-1 rounded-full" />
              <span className=" bg-[#333333] w-1 h-1 rounded-full" />
              <span className=" bg-[#333333] w-1 h-1 rounded-full" />
              <span className=" bg-[#333333] w-1 h-1 rounded-full" />
            </div>
            <p className="flex items-center text-sm font-bold leading-none py-2.5 h-full">
              2025
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
