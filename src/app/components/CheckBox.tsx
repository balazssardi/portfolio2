import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion } from "motion/react";

export default function CheckBox({
  label,
  clickHandler,
  checked,
}: {
  label: string;
  clickHandler: () => void;
  checked: boolean;
}) {
  return (
    <div className="flex flex-row items-center gap-2">
      <div
        onClick={clickHandler}
        className="w-5 h-5 bg-[#EEE] rounded-md border border-[#CCC] overflow-hidden"
      >
        <AnimatePresence>
          {checked ? (
            <motion.div
              className="h-full w-full transition-all flex items-center justify-center"
              initial={{ backgroundColor: "transparent" }}
              whileInView={{ backgroundColor: "#1d3dc4" }}
              exit={{ backgroundColor: "transparent" }}
            >
              <Icon
                icon="line-md:confirm"
                width="16"
                height="16"
                className="text-white"
              />
            </motion.div>
          ) : (
            ""
          )}
        </AnimatePresence>
      </div>
      <p className="capitalize">{label}</p>
    </div>
  );
}
