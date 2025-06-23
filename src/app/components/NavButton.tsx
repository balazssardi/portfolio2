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
      className={`flex py-2 px-3 rounded-[10px] border-[0.5px] transition-all  ${
        active
          ? "border-blue bg-[radial-gradient(100%_100%_at_50%_100%,_#000E8A_0%,_#2A8DFF_100%)] rounded-full"
          : "border-[#E5E5E5] bg-[#FDFDFD] hover:bg-[#E5E5E5]"
      }`}
    >
      <p
        className="font-medium text-sm"
        style={
          active
            ? {
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(181, 213, 247, 1) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }
            : { color: "black" }
        }
      >
        {text}
      </p>
    </Link>
  );
}
