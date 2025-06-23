"use client";

import { motion } from "motion/react";
import Logo from "./components/Logo";
import { libre } from "./fonts";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { usePathname } from "next/navigation";
import { compareTwoStrings } from "string-similarity";

export default function Error() {
  const path = usePathname();
  const similarity = [
    {
      route: "works",
      similarity: compareTwoStrings(path, "works"),
    },
    {
      route: "about",
      similarity: compareTwoStrings(path, "about"),
    },
    {
      route: "contact",
      similarity: compareTwoStrings(path, "contact"),
    },
  ];
  const route = similarity.reduce(
    (max, obj) => (obj.similarity > max.similarity ? obj : max),
    similarity[0]
  ).route;
  return (
    <div className="relative w-full min-h-screen">
      <div className="flex flex-col justify-evenly min-h-screen items-center w-full py-8 max-xl:gap-8">
        <motion.div
          className="flex flex-col gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Logo text="Sárdi Balázs" />
          <div className="flex flex-col gap-4 text-center items-center">
            <h1
              className={`font-semibold text-[40px] text-darkblue max-w-[400px] leading-tight ${libre.className}`}
            >
              This page is{" "}
              <span
                role="h1"
                style={{
                  background:
                    "radial-gradient(100% 100% at 50% 100%, rgba(0, 14, 138, 0.5) 0%, #2A8DFF 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                not found
              </span>
              .
            </h1>
            <p className="text-secondarytext max-w-82">
              Sorry, this page is not found, maybe you misstyped something. With
              the button below, you can go back to home page, or contact me and
              lets work together!
            </p>

            <div className="flex xl:flex-row max-xl:flex-col w-full gap-2">
              <Link className="sendbutton" href="/">
                <Icon
                  icon="line-md:arrow-left"
                  width={18}
                  height={18}
                  key={"send"}
                />
                <p>Back to home</p>
              </Link>
              <Link className="sendbutton" href={`/${route}`}>
                <Icon
                  icon={
                    route === "works"
                      ? "line-md:file-document"
                      : route === "about"
                        ? "line-md:account"
                        : "line-md:email"
                  }
                  width={18}
                  height={18}
                  key={"send"}
                />
                <p>I meant {route}</p>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute h-full w-full grid grid-cols-5 max-xl:grid-cols-3 -z-10 bg-bg left-0 top-0">
        <div className="border-l border-lines h-full"></div>
        <div className="border-x mr-6 border-lines h-full max-xl:hidden"></div>
        <div className="border-x xl:mx-2 border-lines h-full"></div>
        <div className="border-x ml-6 border-lines h-full max-xl:hidden"></div>
        <div className="border-r border-lines h-full"></div>
      </div>
    </div>
  );
}
