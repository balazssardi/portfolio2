import Logo from "../components/Logo";
import Image from "next/image";
import banner from "../../../public/worksbanner.svg";
import SearchContainer from "../components/SearchContainer";

export default function Works() {
  return (
    <div className=" min-w-screen min-h-screen bg-[#FAFAFA]">
      <div className="flex flex-row items-center justify-evenly py-8">
        <div className="flex flex-col gap-4">
          <Logo text="Works" />
          <p className="max-w-sm">
            A selection of responsive, user-centered web projects showcasing my
            expertise in front-end development and passion for creating
            exceptional digital experiences.
          </p>
        </div>
        <Image src={banner} alt="Page banner" />
      </div>
      <SearchContainer />
    </div>
  );
}
