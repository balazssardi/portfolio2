export default function CalendarIcon({ year }: { year: string }) {
  return (
    <div className="bg-white flex flex-col items-center rounded-xl overflow-hidden h-min min-w-fit">
      <div className="py-1.5 px-2 bg-black w-full flex flex-row gap-0.75">
        <span className=" bg-[#333333] w-1 h-1 rounded-full" />
        <span className=" bg-[#333333] w-1 h-1 rounded-full" />
        <span className=" bg-[#333333] w-1 h-1 rounded-full" />
        <span className=" bg-[#333333] w-1 h-1 rounded-full" />
        <span className=" bg-[#333333] w-1 h-1 rounded-full" />
      </div>
      <p className="flex items-center text-sm font-bold leading-none py-2.5 h-full">
        {year}
      </p>
    </div>
  );
}
