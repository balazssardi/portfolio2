"use client";

import { usePathname } from "next/navigation";
import NavButton from "./NavButton";

import { motion } from "motion/react";

export default function Navbar() {
  const currentPath = usePathname();
  return (
    <motion.div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 w-min"
      initial={{ transform: "translateY(120px)" }}
      animate={{ transform: "none" }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-row items-center gap-0.5 bg-[#F6F6F6] p-0.5 rounded-xl w-min">
        <NavButton to="/" text="Home" active={false} />
        <NavButton to="/about" text="About" active={currentPath === "/about"} />
        <NavButton to="/works" text="Works" active={currentPath === "/works"} />
        <NavButton
          to="/contact"
          text="Contact"
          active={currentPath === "/contact"}
        />
      </div>
    </motion.div>
  );
}
