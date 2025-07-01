"use client";

import { usePathname } from "next/navigation";
import NavButton from "./NavButton";

export default function Navbar() {
  const currentPath = usePathname();
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-min">
      <div className="flex flex-row items-center gap-0.5 bg-lines p-0.5 rounded-xl w-min">
        <NavButton to="/" text="Home" active={false} />
        <NavButton to="/about" text="About" active={currentPath === "/about"} />
        <NavButton to="/works" text="Works" active={currentPath === "/works"} />
        <NavButton
          to="/contact"
          text="Contact"
          active={currentPath === "/contact"}
        />
      </div>
    </div>
  );
}
