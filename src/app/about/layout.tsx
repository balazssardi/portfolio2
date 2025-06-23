import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sárdi Balázs - About Me",
  description:
    "An introduction to my values, and creative approach, highlighting my journey as a front-end developer and commitment to building thoughtful digital solutions.",
  openGraph: {
    title: "Sárdi Balázs - About Me",
    description:
      "An introduction to my values, and creative approach, highlighting my journey as a front-end developer and commitment to building thoughtful digital solutions.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative">{children}</div>;
}
