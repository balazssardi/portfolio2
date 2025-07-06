"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Logo from "../components/Logo";
import abouticon from "../../../public/about.svg";
import Navbar from "../components/Navbar";
import { libre } from "../fonts";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function About() {
  const [section, setSection] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const ref = scrollRef.current!;
    function callback() {
      const scroll = ref.scrollTop;
      const windowheight = window.screen.height / 2;
      console.log(scroll, windowheight);
      if (scroll < windowheight / 2) setSection(0);
      if (scroll > 0 && windowheight < scroll) setSection(1);
      if (scroll > windowheight && windowheight * 2 < scroll) setSection(2);
    }
    ref.addEventListener("scroll", callback);
    return () => ref.removeEventListener("scroll", callback);
  }, []);
  return (
    <div
      className="relative text-text w-full xl:snap-y xl:snap-mandatory scroll-smooth overflow-y-auto h-screen max-xl:flex max-xl:flex-col max-xl:gap-16"
      ref={scrollRef}
    >
      <div className="h-screen snap-start">
        <div className="absolute xl:w-[calc(20%-12px)] left-1/2 -translate-x-1/2 h-24 overflow-hidden flex items-end">
          <Image alt="About icon" src={abouticon} width={720} height={720} />
        </div>
        <div className="w-full h-full relative max-xl:flex max-xl:flex-col max-xl:items-center max-xl:justify-center">
          <motion.div
            className="flex flex-row items-center justify-evenly p-8 max-lg:flex-col gap-8 z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center gap-8 xl:w-1/5 px-4 xl:py-8 max-xl:pt-8">
              <Logo text="About" className="xl:fixed z-50" />
              <p className="max-w-sm text-center xl:mt-24 max-xl:hidden">
                An introduction to my values, and creative approach,
                highlighting my journey as a front-end developer and commitment
                to building thoughtful digital solutions.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex xl:flex-row max-xl:flex-col-reverse flex-1 w-full gap-8 items-center max-xl:justify-end max-xl:h-full max-xl:px-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="xl:w-1/5 xl:ml-[40vw] relative bg-mainbg p-1.5 text-[1.2rem] border-0 outline-0 overflow-hidden rounded-3xl drop-shadow-lg xl:self-end aspect-[181/236] max-xl:w-full">
              <div className="w-full h-full rounded-[20px] flex justify-between items-center flex-col text-center text-white border border-border backdrop-blur-2xl bg-[url('/me.png')] bg-cover bg-center overflow-hidden">
                <div
                  className="aboutme-top h-1/3 flex flex-col justify-evenly items-center w-full
                "
                >
                  <p className="px-2 py-2 bg-white text-black rounded-xl text-sm">
                    Frontend Developer
                  </p>
                  <p className={`text-4xl ${libre.className}`}>Sárdi Balázs</p>
                </div>
                <div className="aboutme-bottom h-1/4 w-full flex flex-row items-end">
                  <div className="flex flex-row items-center w-full gap-2 p-4">
                    <p className="xl:text-md max-xl:text-sm text-white">
                      Want to connect?
                    </p>
                    <hr className="flex-1 border-white" />
                    <Link
                      href="/contact"
                      className="flex py-2 px-3 border-[0.5px] transition-all border-blue bg-[radial-gradient(100%_100%_at_50%_100%,_#000E8A_0%,_#2A8DFF_100%)] rounded-full text-sm"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-[calc(20vw-32px)] flex flex-col gap-4 max-xl:text-center max-xl:px-4">
              <h1 className={`${libre.className} text-4xl`}>
                Hello, I’m Balázs!
              </h1>
              <p>
                I’m a 19 years old Front-End Developer from Budapest. I’m
                passionate about creating intuitive and visually appealing web
                interfaces.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className={`flex xl:flex-row max-xl:flex-col w-full gap-8 items-center h-screen max-xl:justify-center max-xl:items-center transition-all duration-600 snap-start relative max-xl:px-8 ${section === 1 ? "xl:blur-none" : "xl:blur-sm"}`}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className={`xl:w-[calc(20vw-32px)] xl:ml-[20vw] flex flex-col gap-4 max-xl:text-center max-xl:px-4 transition-all xl:h-2/3 relative justify-center ${section !== 1 ? "xl:-top-3/5" : "xl:top-0"}`}
        >
          <h1 className={`${libre.className} text-4xl`}>
            Technologies I <br />
            work with
          </h1>
          <p>A quick list of the tools and technologies I use regularly.</p>
        </div>
        <div className="xl:w-1/5 relative bg-mainbg p-1.5 text-[1.2rem] border-0 outline-0 overflow-hidden max-xl:h-1/2 rounded-3xl drop-shadow-lg aspect-[181/236] max-xl:w-full max-xl:flex-1">
          <div className="w-full h-full rounded-[20px] flex justify-evenly items-center flex-col text-center text-text p-4 border border-border backdrop-blur-2xl bg-[url('/about2.svg')] bg-cover bg-center"></div>
        </div>
      </motion.div>
      <motion.div
        className={`flex xl:flex-row max-xl:flex-col-reverse w-full gap-8 items-center h-screen transition-all duration-600 snap-start mb-22 max-xl:justify-center relative  max-xl:px-8 ${section === 2 ? "xl:blur-none" : "xl:blur-sm"}`}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="xl:w-1/5 xl:ml-[40vw] relative bg-mainbg p-1.5 text-[1.2rem] border-0 outline-0 overflow-hidden rounded-3xl drop-shadow-lg aspect-[181/236]  max-xl:w-full">
          <div className="w-full h-full flex rounded-[20px] items-center justify-end flex-col text-center text-text p-2 border border-border backdrop-blur-2xl bg-(image:--gradient-mainbuttonbg)">
            <div className="flex flex-col gap-2 bg-lines w-full rounded-xl p-2">
              <p className="text-left text-sm">
                I&apos;m a frontend developer with a passion for clean code,
                smooth animations, and building web experiences that actually
                feel good to use.
              </p>
              <p className="text-left text-sm">
                Whether it&apos;s turning a Figma design into a pixel-perfect
                layout, or debugging the weirdest edge case, I genuinely enjoy
                the challenge.
              </p>
              <p className="text-left text-sm">
                Outside of coding, I enjoy photography, playing my guitar, I
                also love coffee. Always learning something new — currently
                diving into TypeScript and animations.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`xl:w-[calc(20vw-32px)] flex flex-col gap-4 max-xl:text-center max-xl:px-4 transition-all xl:h-2/3 relative justify-center ${section !== 2 ? "xl:-top-3/5" : "xl:top-0"}`}
        >
          <h1 className={`${libre.className} text-4xl`}>
            A bit more <br /> about me
          </h1>
          <p>A longer personal bio and what I love about web development.</p>
        </div>
      </motion.div>
      <Navbar />
    </div>
  );
}
