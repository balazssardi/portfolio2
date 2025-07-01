import Link from "next/link";

export default function NavButton({
  text,
  to,
  active,
}: {
  text: string;
  to: string;
  active: boolean;
}) {
  return (
    <Link
      href={to}
      className={`flex py-2 px-3 rounded-[10px] border-[0.5px] transition-all ${
        active
          ? "border-blue bg-[radial-gradient(100%_100%_at_50%_100%,_#000E8A_0%,_#2A8DFF_100%)] rounded-full"
          : "border-border bg-mainbg hover:bg-lines"
      }`}
    >
      <p
        className={`font-medium text-sm ${active ? "gradienttext" : "text-text"}`}
      >
        {text}
      </p>
    </Link>
  );
}
