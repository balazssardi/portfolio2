"use client";

import "./globals.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import ThemeSelector from "./components/ThemeSelector";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const currtheme = localStorage.getItem("theme");
    if (currtheme !== "light" && currtheme !== "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
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
    <html lang="en">
      <Head>
        <title>Sárdi Balázs - Frontend Developer</title>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="I’m a Front-End Developer, passionate about creating intuitive and visually appealing web interfaces."
        />
        <meta name="og:title" content="Sárdi Balázs - Frontend Developer" />
        <meta
          name="og:description"
          content="I’m a Front-End Developer, passionate about creating intuitive and visually appealing web interfaces."
        />
      </Head>
      <body
        className="bg-bg text-text transition-colors duration-300"
        data-theme={theme}
      >
        <div className="absolute h-full w-full grid grid-cols-5 max-xl:grid-cols-3 -z-10">
          <div className="border-l border-lines h-full"></div>
          <div className="border-x mr-6 border-lines h-full max-xl:hidden"></div>
          <div className="border-x xl:mx-2 border-lines h-full"></div>
          <div className="border-x ml-6 border-lines h-full max-xl:hidden"></div>
          <div className="border-r border-lines h-full"></div>
        </div>
        <ThemeSelector theme={theme!} handleSetTheme={handleSetTheme} />
        {children}
      </body>
    </html>
  );
}
