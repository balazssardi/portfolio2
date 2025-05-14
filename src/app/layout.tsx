import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

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
    <html lang="en" className="bg-white">
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
