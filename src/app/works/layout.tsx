import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sárdi Balázs - Works",
  description:
    "A selection of responsive, user-centered web projects showcasing my expertise in front-end development and passion for creating exceptional digital experiences.",
  openGraph: {
    title: "Sárdi Balázs - Works",
    description:
      "A selection of responsive, user-centered web projects showcasing my expertise in front-end development and passion for creating exceptional digital experiences.",
  },
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative">{children}</div>;
}
