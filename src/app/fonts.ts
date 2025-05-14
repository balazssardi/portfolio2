import localFont from "next/font/local";

const libre = localFont({
  src: [
    {
      path: "../../public/fonts/libre.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/libre-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/libre-semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/libre-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
export { libre };
