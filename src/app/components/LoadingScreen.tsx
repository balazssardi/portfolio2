"use client";
import { AnimatePresence, motion } from "motion/react";
import Logo from "./Logo";
import { Waveform } from "ldrs/react";
import "ldrs/react/Waveform.css";

export default function LoadingScreen({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="flex flex-col gap-8 items-center justify-center fixed top-0 left-0 overflow-hidden w-screen h-screen z-50"
          initial={{ opacity: 0, backdropFilter: "none" }}
          whileInView={{ opacity: 1, backdropFilter: "blur(12px)" }}
          exit={{ opacity: 0, backdropFilter: "none" }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-4 jsutify-center items-center">
            <Logo text="Loading..." />
            <p className="text-secondarytext text-lg font-light text-center">
              The page you requested
              <br />
              will be ready shortly
            </p>
          </div>
          <Waveform
            size="35"
            stroke="3.5"
            speed="1"
            color="var(--color-secondarytext)"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
