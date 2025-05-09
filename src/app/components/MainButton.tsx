"use client";

import { ReactElement, useRef, useState } from "react";
import Image from "next/image";

export default function MainButton({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
}) {
  const [style, setStyle] = useState({});
  const div = useRef(null);
  function mouseMoveHandler(e) {
    const rect = div.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setStyle({ "--x": `${x}px`, "--y": `${y}px` });
  }
  return (
    <div
      className="hoverBox flex rounded-3xl drop-shadow-lg"
      style={style}
      onMouseMove={mouseMoveHandler}
      ref={div}
    >
      <div
        className="p-0.5 rounded-[20px]"
        style={{
          background: "linear-gradient(180deg, #F1F1F1 0%, #ECECEC 100%)",
        }}
      >
        <div
          className="bg-white w-full h-full rounded-[18px] flex justify-evenly items-center flex-col text-center text-black"
          style={{
            background:
              "linear-gradient(180deg, rgba(252, 252, 252, 0.95) 0%, rgba(244, 244, 244, 0.95) 100%)",
          }}
        >
          <h1 className="leading-none text-[30px]">{title}</h1>
          <p className="leading-tight">{desc}</p>
          <Image
            src={`./${image}`}
            alt={`${title} photo`}
            width={235}
            height={235}
          />
        </div>
      </div>
    </div>
  );
}
