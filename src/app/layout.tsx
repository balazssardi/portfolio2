import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sárdi Balázs - Frontend Developer",
  description:
    "I’m a Front-End Developer, passionate about creating intuitive and visually appealing web interfaces.",
  openGraph: {
    title: "Sárdi Balázs - Frontend Developer",
    description:
      "I’m a Front-End Developer, passionate about creating intuitive and visually appealing web interfaces.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="absolute h-full w-full grid grid-cols-5 max-xl:grid-cols-3">
            <div className="border-l border-lines h-full"></div>
            <div className="border-x mr-6 border-lines h-full max-xl:hidden"></div>
            <div className="border-x xl:mx-2 border-lines h-full"></div>
            <div className="border-x ml-6 border-lines h-full max-xl:hidden"></div>
            <div className="border-r border-lines h-full"></div>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
