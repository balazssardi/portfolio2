import Navbar from "../components/Navbar";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="w-full min-h-screen relative">
        <div className="absolute h-full w-full grid grid-cols-5 max-xl:grid-cols-3 -z-10 bg-bg">
          <div className="border-l border-lines h-full"></div>
          <div className="border-x mr-6 border-lines h-full max-xl:hidden"></div>
          <div className="border-x xl:mx-2 border-lines h-full"></div>
          <div className="border-x ml-6 border-lines h-full max-xl:hidden"></div>
          <div className="border-r border-lines h-full"></div>
        </div>
        {children}
        <Navbar />
      </div>
    </div>
  );
}
