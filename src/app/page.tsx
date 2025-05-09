import MainButton from "./components/MainButton";
import Logo from "./components/Logo";
import MainText from "./components/MainText";

export default function Home() {
  return (
    <div className="relative grid grid-cols-5 min-h-screen">
      <div className="flex flex-col justify-evenly min-h-screen items-center absolute w-full py-8 max-xl:gap-8">
        <div className="flex flex-col gap-8 items-center">
          <Logo />
          <MainText />
        </div>
        <div className="flex flex-row gap-2 max-xl:flex-col items-center">
          <MainButton
            title="About Me"
            desc="Get to know who I am and how I got into front-end development."
            image="aboutme.svg"
          />
          <MainButton
            title="My Works"
            desc="Check out some of the websites and interfaces I’ve built."
            image="works.svg"
          />
          <MainButton
            title="About Me"
            desc="Get to know who I am and how I got into front-end development."
            image="aboutme.svg"
          />
        </div>
      </div>
      <div className="border-l border-lines h-full max-xl:hidden"></div>
      <div className="border-x mr-6 border-lines h-full max-xl:hidden"></div>
      <div className="border-x mx-2 border-lines h-full max-xl:hidden"></div>
      <div className="border-x ml-6 border-lines h-full max-xl:hidden"></div>
      <div className="border-r border-lines h-full max-xl:hidden"></div>
    </div>
  );
}
