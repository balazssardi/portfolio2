"use client";
import Link from "next/link";
import Work from "./Work";
import { motion } from "motion/react";

import { useState } from "react";

const items: { name: string; image: string; link: string }[] = [
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
  { name: "opes", image: "/works/opes.png", link: "https://opes.hu" },
];

export default function SearchContainer() {
  const [search, setSearch] = useState("");
  const currentArr = items.filter((item) => {
    return search ? item.name.includes(search) : true;
  });
  return (
    <div className="flex flex-col items-center gap-12">
      <motion.input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type here to search..."
        className="w-96 border border-[#E5E5E5] px-4 py-3 rounded-full bg-[#FFF]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      />
      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-4 items-center justify-center">
        {currentArr.length > 0 ? (
          currentArr.map((item, index) => (
            <Work key={index} work={item} index={index} />
          ))
        ) : (
          <p className="text-center max-w-4xl col-span-3">
            If you have a project idea named {search},{" "}
            <Link href="/contact" className="text-[#0000ff]">
              contact me
            </Link>
            !
          </p>
        )}
      </div>
    </div>
  );
}
