export default function MainText() {
  return (
    <div className="flex flex-col gap-4 text-center items-center">
      <h1 className="font-semibold text-[40px] text-darkblue max-w-[400px] leading-none">
        Jumpstart your vision with a{" "}
        <span
          role="h1"
          style={{
            background:
              "radial-gradient(100% 100% at 50% 100%, rgba(0, 14, 138, 0.5) 0%, #2A8DFF 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          quick chat
        </span>
      </h1>
      <p className="text-secondarytext max-w-82">
        I’m a Front-End Developer, passionate about creating intuitive and
        visually appealing web interfaces.
      </p>
    </div>
  );
}
