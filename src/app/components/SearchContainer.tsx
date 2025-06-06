"use client";
import Link from "next/link";
import Work from "./Work";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";
import CheckBox from "./CheckBox";
import { Icon } from "@iconify/react/dist/iconify.js";

const items: {
  name: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  link: string;
  year: string;
  technologies: Array<string>;
  id: number;
  state: string;
}[] = [
  {
    id: 0,
    name: "Your project",
    image: "/works/your.svg",
    link: "https://opes.hu",
    shortDesc: "Yes, this is your next project!",
    longDesc:
      "Click here to contact me and let's agree on the exact details of your next project we can work on together! Whether it's a personal project or a job offer, you can do it here.",
    year: "NOW",
    technologies: ["react", "tailwindcss", "nextjs", "vercel", "vscode"],
    state: "discontinued",
  },
  {
    id: 1,
    name: "opes",
    image: "/works/opes.png",
    link: "https://opes.hu",
    shortDesc: "Graphic Designer’s Landing",
    longDesc:
      "It's the portfolio of a friend of mine who is a graphic designer and also designed this site. A responsive portfolio, full of unique animations and transitions. It was developed using the motion library.",
    year: "2025",
    technologies: ["react", "tailwindcss", "nextjs", "vercel"],
    state: "inprogress",
  },
  {
    id: 2,
    name: "opes",
    image: "/works/opes.png",
    link: "https://opes.hu",
    shortDesc: "Graphic Designer’s Landing",
    longDesc:
      "It's the portfolio of a friend of mine who is a graphic designer and also designed this site. A responsive portfolio, full of unique animations and transitions. It was developed using the motion library.",
    year: "2025",
    technologies: ["react", "tailwindcss", "nextjs", "vercel", "vscode"],
    state: "visit",
  },
  {
    id: 3,
    name: "opes",
    image: "/works/opes.png",
    link: "https://opes.hu",
    shortDesc: "Graphic Designer’s Landing",
    longDesc:
      "It's the portfolio of a friend of mine who is a graphic designer and also designed this site. A responsive portfolio, full of unique animations and transitions. It was developed using the motion library.",
    year: "2025",
    technologies: ["react", "tailwindcss", "nextjs", "vercel"],
    state: "visit",
  },
  {
    id: 4,
    name: "opes",
    image: "/works/opes.png",
    link: "https://opes.hu",
    shortDesc: "Graphic Designer’s Landing",
    longDesc:
      "It's the portfolio of a friend of mine who is a graphic designer and also designed this site. A responsive portfolio, full of unique animations and transitions. It was developed using the motion library.",
    year: "2025",
    technologies: ["react", "tailwindcss", "nextjs", "vercel"],
    state: "visit",
  },
  {
    id: 5,
    name: "opes",
    image: "/works/opes.png",
    link: "https://opes.hu",
    shortDesc: "Graphic Designer’s Landing",
    longDesc:
      "It's the portfolio of a friend of mine who is a graphic designer and also designed this site. A responsive portfolio, full of unique animations and transitions. It was developed using the motion library.",
    year: "2025",
    technologies: ["react", "tailwindcss", "nextjs", "vercel"],
    state: "visit",
  },
  {
    id: 6,
    name: "opes",
    image: "/works/opes.png",
    link: "https://opes.hu",
    shortDesc: "Graphic Designer’s Landing",
    longDesc:
      "It's the portfolio of a friend of mine who is a graphic designer and also designed this site. A responsive portfolio, full of unique animations and transitions. It was developed using the motion library.",
    year: "2025",
    technologies: ["react", "tailwindcss", "nextjs", "vercel"],
    state: "visit",
  },
  {
    id: 7,
    name: "opes",
    image: "/works/opes.png",
    link: "https://opes.hu",
    shortDesc: "Graphic Designer’s Landing",
    longDesc:
      "It's the portfolio of a friend of mine who is a graphic designer and also designed this site. A responsive portfolio, full of unique animations and transitions. It was developed using the motion library.",
    year: "2025",
    technologies: ["react", "tailwindcss", "nextjs", "vercel"],
    state: "visit",
  },
  {
    id: 8,
    name: "opes",
    image: "/works/opes.png",
    link: "https://opes.hu",
    shortDesc: "Graphic Designer’s Landing",
    longDesc:
      "It's the portfolio of a friend of mine who is a graphic designer and also designed this site. A responsive portfolio, full of unique animations and transitions. It was developed using the motion library.",
    year: "2025",
    technologies: ["react", "tailwindcss", "nextjs", "vercel", "vuejs"],
    state: "visit",
  },
];

const usedTechnologies: Array<string> = [
  ...new Set(items.flatMap((obj) => obj.technologies)),
];
export default function SearchContainer() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Array<string>>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const currentArr = items.filter((item) => {
    return search ? item.name.includes(search.toLowerCase()) : true;
  });
  const currentFiltered = currentArr.filter((item) => {
    return filter.every((item2) => item.technologies.includes(item2));
  });

  const toggleTechnology = (item: string) => {
    if (filter.includes(item)) {
      setFilter((prev) => prev.filter((previtem) => previtem != item));
    } else {
      setFilter((prev) => [...prev, item]);
    }
  };

  return (
    <div className="flex flex-col items-center gap-12">
      <div className="flex flex-row gap-4 relative">
        <motion.input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type here to search..."
          className="w-96 border border-[#E5E5E5] px-4 py-3 rounded-full bg-[#FFF] focus:outline-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.2 }}
        />
        <div
          className={`absolute right-0 top-0 transition-all rounded-3xl flex items-center pl-4 py-4 z-50 ${
            isFilterOpen
              ? "w-full h-33 bg-white border border-[#E5E5E5]"
              : "w-[50px] h-[50px] border-transparent bg-transparent"
          }`}
        >
          <button
            className="w-[50px] h-[50px] absolute top-0 right-0 flex items-center justify-center"
            onClick={() => setIsFilterOpen((prev) => !prev)}
          >
            {isFilterOpen ? (
              <Icon
                icon="line-md:close"
                width="32"
                height="32"
                className="text-secondarytext"
                key={"close"}
              />
            ) : (
              <Icon
                icon="line-md:filter-twotone"
                width="32"
                height="32"
                className="text-secondarytext"
                key={"open"}
              />
            )}
          </button>
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                key="filtermenu"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={` flex flex-row gap-4 flex-wrap w-[calc(100%-50px)]`}
              >
                <p
                  className="w-full font-medium text-lg leading-none
              "
                >
                  Filters
                </p>
                {usedTechnologies.map((technology) => (
                  <CheckBox
                    label={technology}
                    clickHandler={() => toggleTechnology(technology)}
                    checked={filter.includes(technology)}
                    key={technology}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-4 items-center justify-center">
        {currentFiltered.length > 0 ? (
          currentFiltered.map((item, index) => (
            <Work key={item.id} work={item} index={index} />
          ))
        ) : (
          <p className="text-center max-w-4xl col-span-3">
            {search
              ? filter.length !== 0
                ? `If you have a project idea named ${search} with the selected technologies, `
                : `If you have a project idea named ${search}, `
              : filter.length !== 0
              ? `If you have a project idea with the selected technologies, `
              : ``}
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
