export function Waves() {
  return (
    <>
      <div className="absolute bottom-[8%] left-0 w-[200%] h-[8%] min-h-[50px] z-[5] animate-wave-move">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            fill="#48CAE4"
            fillOpacity="0.25"
            d="M0,60 Q180,40 360,60 T720,60 T1080,60 T1440,60 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[6%] left-0 w-[200%] h-[8%] min-h-[50px] z-[5]"
        style={{ animation: "waveMove 55s linear infinite reverse" }}
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            fill="#0096C7"
            fillOpacity="0.2"
            d="M0,70 Q180,55 360,70 T720,70 T1080,70 T1440,70 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[4%] left-0 w-[200%] h-[8%] min-h-[50px] z-[5]"
        style={{ animation: "waveMove 50s linear infinite" }}
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            fill="#0077B6"
            fillOpacity="0.15"
            d="M0,80 Q180,70 360,80 T720,80 T1080,80 T1440,80 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </>
  );
}
