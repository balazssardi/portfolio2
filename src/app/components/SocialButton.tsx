import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function SocialButton({
  type,
  link,
  icon,
}: {
  type: string;
  link: string;
  icon: string;
}) {
  return (
    <Link href={link} className="sendbutton !justify-start">
      <Icon icon={icon} width={18} height={18} />
      <p className="capitalize">{type}</p>
    </Link>
  );
}
