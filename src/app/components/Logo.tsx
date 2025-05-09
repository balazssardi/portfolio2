export default function Logo() {
  return (
    <div
      className="w-fit p-1 text-white"
      style={{
        boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.05)",
        background: "linear-gradient(180deg, #F1F1F1 0%, #A2B7CC 100%)",
        borderRadius: "20px",
      }}
    >
      <div
        className="rounded-2xl p-0.25"
        style={{
          background: "linear-gradient(180deg, #1D3DC4 0%, #031B6C 100%)",
        }}
      >
        <div
          className="p-0.5"
          style={{
            background:
              "radial-gradient(100% 100% at 50% 100%, #000E8A 0%, #2A8DFF 100%)",
            borderRadius: "15px",
          }}
        >
          <div
            className="p-0.25"
            style={{
              background: "linear-gradient(180deg, #1D3DC4 0%, #031B6C 100%)",
              borderRadius: "13px",
            }}
          >
            <div
              className="px-2 py-1"
              style={{
                background:
                  "radial-gradient(100% 100% at 50% 100%, #000E8A 0%, #2A8DFF 100%)",
                borderRadius: "12px",
              }}
            >
              <p className="text-3xl">Sárdi Balázs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
