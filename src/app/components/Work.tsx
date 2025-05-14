import Image from "next/image";

export default function Work({
  work,
}: {
  work: { name: string; image: string; link: string };
}) {
  return (
    <div className="h-auto p-2 bg-white rounded-3xl cursor-pointer">
      <Image
        className="rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,_0,_0,_0.05)]"
        src={work.image}
        width={360}
        height={260}
        alt="Work image"
      />
    </div>
  );
}
