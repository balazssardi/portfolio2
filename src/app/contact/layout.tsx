import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sárdi Balázs - Contact Me",
  description:
    "Feel free to reach out for collaborations, project inquiries, or just to connect. I’m always open to new opportunities and creative conversations.",
  openGraph: {
    title: "Sárdi Balázs - Contact Me",
    description:
      "Feel free to reach out for collaborations, project inquiries, or just to connect. I’m always open to new opportunities and creative conversations.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative">{children}</div>;
}
