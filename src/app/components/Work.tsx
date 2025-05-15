"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Work({
  work,
  index,
}: {
  work: { name: string; image: string; link: string };
  index: number;
}) {
  const delay = index / 10;
  return (
    <motion.div
      className="h-auto p-2 bg-white rounded-3xl cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: delay }}
      viewport={{ once: true }}
    >
      <Image
        className="rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,_0,_0,_0.05)]"
        src={work.image}
        width={360}
        height={260}
        alt="Work image"
      />
    </motion.div>
  );
}
