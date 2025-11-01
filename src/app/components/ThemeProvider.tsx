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
    if (currtheme === "dark" || currtheme === "light") {
      setTheme(currtheme);
    } else {
      const detected = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setTheme(detected);
      localStorage.setItem("theme", detected);
    }
  }, []);

  function handleSetTheme() {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "dark") {
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
