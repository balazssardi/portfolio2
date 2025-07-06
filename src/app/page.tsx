"use client";
import MainButton from "./components/MainButton";
import Logo from "./components/Logo";
import MainText from "./components/MainText";
import { motion, useAnimate } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [scope, animate] = useAnimate();
  const [beingRedirected, setBeingRedirected] = useState<string>("");
  async function animation() {
    await animate(
      scope.current,
      { opacity: 1 },
      { duration: 0.2, delay: 0.15 }
    );
    if (beingRedirected === "works") {
      await animate(scope.current, { top: "0" }, { duration: 0.3, delay: 0.5 });
    } else {
      await animate(scope.current, { top: "0" }, { duration: 0.3 });
    }
    await animate(scope.current, { height: "192px" }, { duration: 0.1 });
  }
  useEffect(() => {
    if (beingRedirected) {
      animation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beingRedirected]);
  useEffect(() => {
    if (!beingRedirected) return;
    const timeout = setTimeout(() => router.replace(beingRedirected), 900);
    return () => clearTimeout(timeout);
  }, [beingRedirected, router]);
  function handleRedirect(to: string) {
    window.scrollTo({ top: 0 });
    setBeingRedirected(to);
  }
  return (
    <div
      className={`relative w-full min-h-screen ${beingRedirected && "max-h-screen"}`}
    >
      <div
        className={`flex flex-col justify-evenly min-h-screen items-center w-full py-8 gap-8 transition-all ${
          beingRedirected && "opacity-0"
        }`}
      >
        <motion.div
          className="flex flex-col gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Logo text="Sárdi Balázs" />
          <MainText />
        </motion.div>
        <div className="flex flex-row gap-2 max-xl:flex-col items-center">
          <MainButton
            title="About Me"
            desc="Get to know who I am and how I got into front-end development."
            image="about.svg"
            index={1}
            handleRedirect={() => handleRedirect("about")}
          />
          <MainButton
            title="My Works"
            desc="Check out some of the websites and interfaces I’ve built."
            image="works.svg"
            index={2}
            handleRedirect={() => handleRedirect("works")}
          />
          <MainButton
            title="Contact Me"
            desc="Drop me a message if you want to work together or just say hi."
            image="contact.svg"
            index={3}
            handleRedirect={() => handleRedirect("contact")}
          />
        </div>
      </div>
      <motion.div
        className="absolute xl:w-[calc(20%-12px)] left-1/2 -translate-x-1/2 flex items-end z-10"
        ref={scope}
        initial={{ opacity: 0, height: "max-content", top: "50%", rotate: 0 }}
      >
        {beingRedirected && (
          <motion.img
            alt={`${beingRedirected} icon`}
            src={`/${beingRedirected}.svg`}
            width={720}
            height={720}
            initial={beingRedirected === "works" && { rotate: 1 }}
            whileInView={beingRedirected === "works" ? { rotate: 180 } : ""}
            transition={
              beingRedirected === "works" ? { delay: 0.3, duration: 0.5 } : {}
            }
            className="z-20"
          />
        )}
      </motion.div>
    </div>
  );
}
