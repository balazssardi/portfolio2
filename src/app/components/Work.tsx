"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import Logo from "./Logo";
import WorksButton from "./WorksButton";
import CalendarIcon from "./CalendarIcon";
import { Dispatch, SetStateAction } from "react";

export default function Work({
  work,
  index,
  setActiveIndex,
  activeIndex,
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
    state: string;
  };
  index: number;
  activeIndex: number | null;
  setActiveIndex: Dispatch<SetStateAction<number | null>>;
}) {
  const withoutdark = ["golang"];
  const delay = index / 10;
  return (
    <motion.div
      className="h-72 p-2 bg-white rounded-3xl cursor-pointer relative select-none
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: delay }}
      viewport={{ once: true }}
      onMouseEnter={() => {
        setActiveIndex(index);
      }}
      onMouseLeave={() => {
        setActiveIndex(null);
      }}
      onTap={() => setActiveIndex((prev) => (prev === index ? null : index))}
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
        className="rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,_0,_0,_0.05)] mb-16"
        src={work.image}
        width={360}
        height={260}
        alt="Work image"
      />
      <div
        className={`absolute left-0 bottom-0 px-4 py-3 flex flex-col w-[calc(100%-16px)] mb-2 mx-2 rounded-b-[16px] transition-all overflow-hidden  ${
          activeIndex === index
            ? "h-[calc(100%-16px)] rounded-2xl bg-workbg justify-between"
            : "h-1/2 worksbasebg justify-end"
        }`}
      >
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col gap-1">
            <p className="text-lg font-medium capitalize">{work.name}</p>
            <p className="text-secondarytext font-medium text-sm">
              {activeIndex === index ? work.longDesc : work.shortDesc}
            </p>
          </div>
          <CalendarIcon year={work.year} />
        </div>
        {activeIndex === index ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="flex flex-col gap-2"
          >
            <div className="flex flex-row gap-1">
              {work.technologies.map((item, index) => (
                <Icon
                  icon={`skill-icons:${
                    item.toLowerCase() +
                    (withoutdark.includes(item.toLowerCase()) ? "" : "-dark")
                  }`}
                  width="32"
                  height="32"
                  key={index}
                />
              ))}
            </div>
            <WorksButton state={work.state} to={work.link} />
          </motion.div>
        ) : (
          ""
        )}
      </div>
    </motion.div>
  );
}
