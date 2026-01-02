export function Boats() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[12%] z-[6]">
      {/* Boat 1 - Small fishing boat left */}
      <svg
        className="absolute left-[12%] bottom-[45%] animate-boat-float-1"
        viewBox="0 0 60 40"
        width="60"
        height="40"
      >
        <path
          d="M5,25 Q10,35 30,35 Q50,35 55,25 L50,25 Q45,30 30,30 Q15,30 10,25 Z"
          fill="#8B5A3C"
        />
        <line
          x1="30"
          y1="30"
          x2="30"
          y2="8"
          stroke="#8B5A3C"
          strokeWidth="2"
        />
        <polygon points="32,10 32,25 48,25" fill="#FFFFFF" opacity="0.9" />
      </svg>

      {/* Boat 2 - Sailboat center */}
      <svg
        className="absolute left-[50%] bottom-[55%] animate-boat-float-2"
        viewBox="0 0 80 60"
        width="80"
        height="60"
      >
        <path
          d="M10,40 Q15,52 40,52 Q65,52 70,40 L62,40 Q58,47 40,47 Q22,47 18,40 Z"
          fill="#C4703F"
        />
        <line
          x1="40"
          y1="47"
          x2="40"
          y2="5"
          stroke="#8B5A3C"
          strokeWidth="2"
        />
        <polygon points="42,8 42,40 70,40" fill="#FAF3E8" />
        <polygon points="38,12 38,40 18,40" fill="#FFFFFF" />
      </svg>

      {/* Boat 3 - Small boat right */}
      <svg
        className="absolute left-[78%] bottom-[35%] animate-boat-float-3"
        viewBox="0 0 50 35"
        width="50"
        height="35"
      >
        <path
          d="M5,22 Q8,30 25,30 Q42,30 45,22 L40,22 Q37,27 25,27 Q13,27 10,22 Z"
          fill="#5A8A7A"
        />
        <line
          x1="25"
          y1="27"
          x2="25"
          y2="10"
          stroke="#5A8A3C"
          strokeWidth="1.5"
        />
        <polygon points="27,12 27,24 40,24" fill="#FFFFFF" opacity="0.85" />
      </svg>
    </div>
  );
}
