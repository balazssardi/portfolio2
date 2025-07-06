"use client";

import { useEffect, useState } from "react";
import ThemeSelector from "./ThemeSelector";

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const currtheme = localStorage.getItem("theme");
    if (currtheme !== "light" && currtheme !== "dark") {
      const detected = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setTheme(detected);
      localStorage.setItem("theme", detected);
    } else {
      setTheme(currtheme);
    }
  }, [theme]);

  function handleSetTheme() {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }
  return (
    <div className="bg-bg text-text h-full w-full relative" data-theme={theme}>
      <ThemeSelector theme={theme!} handleSetTheme={handleSetTheme} />
      {children}
    </div>
  );
}
