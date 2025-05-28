"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "./Logo";

export default function Work({
  work,
  index,
}: {
  work: {
    name: string;
    shortDesc: string;
    longDesc: string;
    image: string;
    link: string;
    year: string;
    technologies: Array<string>;
    id: number;
  };
  index: number;
}) {
  const delay = index / 10;
  const [hover, setHover] = useState<boolean>(false);
  return (
    <motion.div
      className="h-auto p-2 bg-white rounded-3xl cursor-pointer relative select-none
      "
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
      onTapStart={() => setHover(true)}
      onTapCancel={() => setHover(false)}
      onClick={(e) => e.preventDefault()}
    >
      {work.id === 0 ? (
        <Logo
          text={"Newest"}
          fontSize="18px"
          className="absolute z-20 left-1/2 -translate-x-1/2 -top-6"
        />
      ) : (
        ""
      )}
      <Image
        className="rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,_0,_0,_0.05)] mb-8"
        src={work.image}
        width={360}
        height={260}
        alt="Work image"
      />
      <div
        className={`absolute left-0 bottom-0 px-4 py-3 flex flex-col w-[calc(100%-16px)] mb-2 mx-2 rounded-b-[16px] transition-all overflow-hidden  ${
          hover
            ? "h-[calc(100%-16px)] rounded-2xl bg-[linear-gradient(180deg,_rgba(244,_244,_244,_1.00)_0%,_rgba(244,_244,_244,_1.00)_100%)] justify-between"
            : "h-1/2 bg-[linear-gradient(180deg,_rgba(252,_252,_252,_0.00)_0%,_rgba(244,_244,_244,_0.95)_45.67%)] justify-end"
        }`}
      >
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col gap-1">
            <p className="text-lg font-medium capitalize">{work.name}</p>
            <p className="text-secondarytext font-medium text-sm">
              {hover ? work.longDesc : work.shortDesc}
            </p>
          </div>
          <div className="bg-white flex flex-col items-center rounded-xl overflow-hidden h-min min-w-fit">
            <div className="py-1.5 px-2 bg-black w-full flex flex-row gap-0.75">
              <span className=" bg-[#333333] w-1 h-1 rounded-full" />
              <span className=" bg-[#333333] w-1 h-1 rounded-full" />
              <span className=" bg-[#333333] w-1 h-1 rounded-full" />
              <span className=" bg-[#333333] w-1 h-1 rounded-full" />
              <span className=" bg-[#333333] w-1 h-1 rounded-full" />
            </div>
            <p className="flex items-center text-sm font-bold leading-none py-2.5 h-full">
              {work.year}
            </p>
          </div>
        </div>
        {hover ? (
          <div className="flex flex-row gap-1">
            {work.technologies.map((item, index) => (
              <Icon
                icon={`skill-icons:${item}-dark`}
                width="32"
                height="32"
                key={index}
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </motion.div>
  );
}
