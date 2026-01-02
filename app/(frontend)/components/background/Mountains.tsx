export function Mountains() {
  return (
    <svg
      className="absolute bottom-[25%] left-0 w-full h-[40%] z-[1]"
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMax slice"
    >
      {/* Far mountain - lighter */}
      <path
        d="M-100,400 L200,180 L350,220 L500,120 L650,200 L800,100 L950,180 L1100,140 L1250,200 L1400,150 L1540,400 Z"
        fill="#8FB4A3"
        opacity="0.5"
      />
      {/* Near mountain - darker */}
      <path
        d="M-50,400 L150,250 L300,280 L450,200 L600,260 L750,180 L900,240 L1050,200 L1200,260 L1350,220 L1500,400 Z"
        fill="#5A8A7A"
        opacity="0.6"
      />
    </svg>
  );
}
