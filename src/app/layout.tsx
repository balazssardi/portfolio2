"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import "./globals.css";
import Head from "next/head";
import { useEffect, useState } from "react";
// export const metadata: Metadata = {
//   title: "Sárdi Balázs - Frontend Developer",
//   description:
//     "I’m a Front-End Developer, passionate about creating intuitive and visually appealing web interfaces.",
//   openGraph: {
//     title: "Sárdi Balázs - Frontend Developer",
//     description:
//       "I’m a Front-End Developer, passionate about creating intuitive and visually appealing web interfaces.",
//   },
// };

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
    <html lang="en" data-theme={theme}>
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </Head>
      <body className="bg-bg">
        <button
          className="absolute top-2 right-2 z-50 p-2 bg-mainbg border-border border rounded-xl"
          onClick={handleSetTheme}
        >
          {theme === "dark" ? (
            <Icon
              icon={
                "line-md:sunny-filled-loop-to-moon-filled-alt-loop-transition"
              }
              key={"dark"}
              height={36}
              width={36}
              className="text-text transition-all"
            />
          ) : (
            <Icon
              icon={"line-md:moon-filled-to-sunny-filled-loop-transition"}
              key={"light"}
              height={36}
              width={36}
              className="text-text transition-all"
            />
          )}
        </button>
        {children}
      </body>
    </html>
  );
}
