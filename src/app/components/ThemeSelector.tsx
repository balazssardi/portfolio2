import { Icon } from "@iconify/react/dist/iconify.js";

export default function ThemeSelector({
  theme,
  handleSetTheme,
}: {
  theme: string;
  handleSetTheme: () => void;
}) {
  return (
    <button
      className="fixed top-2 right-2 z-50 p-2 bg-mainbg border-border border rounded-xl"
      onClick={handleSetTheme}
    >
      {theme === "dark" ? (
        <Icon
          icon={"line-md:sunny-filled-loop-to-moon-filled-alt-loop-transition"}
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
  );
}
