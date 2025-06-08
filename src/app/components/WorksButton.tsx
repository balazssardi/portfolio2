import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";

export default function WorksButton({
  state,
  to,
}: {
  state: string;
  to: string;
}) {
  const router = useRouter();
  const text =
    state === "inprogress"
      ? "In Progress..."
      : state === "discontinued"
      ? "Discontinued"
      : state === "contact"
      ? "Contact Me"
      : "Visit Website";
  const disabled = state === "inprogress" || state === "discontinued";
  function clickHandler() {
    if (!disabled) router.push(to);
  }
  return (
    <button
      disabled={disabled}
      className={`w-full h-12 rounded-[10px] p-0.5 ${
        disabled
          ? "bg-lines cursor-not-allowed"
          : "greygradientbg cursor-pointer"
      }`}
      onClick={clickHandler}
    >
      <div
        className={` w-full h-full rounded-md flex justify-center items-center gap-1
             ${disabled ? "bg-lines text-black" : "bluegradientbg text-white"}`}
      >
        {text}
        <Icon
          icon={
            state === "inprogress"
              ? "line-md:loading-twotone-loop"
              : state === "discontinued"
              ? "line-md:close"
              : state === "contact"
              ? "line-md:email"
              : "line-md:external-link"
          }
          width="20"
          height="20"
        />
      </div>
    </button>
  );
}
