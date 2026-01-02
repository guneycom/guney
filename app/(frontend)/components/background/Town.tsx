export function Town() {
  return (
    <div className="absolute bottom-[18%] left-0 w-full h-[30%] z-[2]">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 300"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Left cluster */}
        <g className="animate-gentle-sway origin-bottom">
          {/* Church/Tower */}
          <rect x="80" y="140" width="35" height="80" fill="#FAF3E8" />
          <polygon points="80,140 97,100 115,140" fill="#D4856A" />
          <rect x="93" y="110" width="8" height="20" fill="#FAF3E8" />
          <circle cx="97" cy="108" r="4" fill="#E85D04" />

          {/* House 1 */}
          <rect x="120" y="160" width="40" height="60" fill="#FFFFFF" />
          <polygon points="120,160 140,135 160,160" fill="#C4703F" />
          <rect x="128" y="180" width="10" height="15" fill="#0077B6" />
          <rect x="145" y="175" width="8" height="12" fill="#0096C7" />

          {/* House 2 */}
          <rect x="165" y="155" width="35" height="65" fill="#FFF8F0" />
          <polygon points="165,155 182,130 200,155" fill="#E07A5F" />
          <rect x="172" y="170" width="8" height="10" fill="#48CAE4" />
          <rect x="185" y="175" width="8" height="12" fill="#48CAE4" />
          <rect x="175" y="195" width="12" height="25" fill="#8B5A3C" />

          {/* House 3 */}
          <rect x="205" y="165" width="30" height="55" fill="#FFFFFF" />
          <polygon points="205,165 220,145 235,165" fill="#C4703F" />
          <rect x="212" y="178" width="7" height="10" fill="#0096C7" />
        </g>

        {/* Center cluster */}
        <g
          className="animate-gentle-sway origin-bottom"
          style={{ animationDelay: "-2s" }}
        >
          {/* Larger building */}
          <rect x="580" y="150" width="50" height="70" fill="#FAF3E8" />
          <polygon points="580,150 605,120 630,150" fill="#D4856A" />
          <rect x="590" y="165" width="10" height="12" fill="#0077B6" />
          <rect x="608" y="165" width="10" height="12" fill="#0077B6" />
          <rect x="598" y="190" width="14" height="30" fill="#8B5A3C" />

          {/* Small house */}
          <rect x="635" y="170" width="28" height="50" fill="#FFFFFF" />
          <polygon points="635,170 649,150 663,170" fill="#C4703F" />
          <rect x="642" y="182" width="8" height="10" fill="#48CAE4" />

          {/* Another house */}
          <rect x="545" y="160" width="32" height="60" fill="#FFF8F0" />
          <polygon points="545,160 561,138 577,160" fill="#E07A5F" />
          <rect x="552" y="175" width="8" height="10" fill="#0096C7" />
          <rect x="555" y="195" width="10" height="25" fill="#8B5A3C" />
        </g>

        {/* Right cluster */}
        <g
          className="animate-gentle-sway origin-bottom"
          style={{ animationDelay: "-4s" }}
        >
          {/* House with blue dome (Greek style) */}
          <rect x="1150" y="165" width="40" height="55" fill="#FFFFFF" />
          <ellipse cx="1170" cy="165" rx="20" ry="12" fill="#0096C7" />
          <rect x="1160" y="185" width="8" height="10" fill="#48CAE4" />
          <rect x="1175" y="185" width="8" height="10" fill="#48CAE4" />

          {/* Tower */}
          <rect x="1195" y="145" width="25" height="75" fill="#FAF3E8" />
          <polygon points="1195,145 1207,115 1220,145" fill="#D4856A" />
          <rect x="1202" y="165" width="6" height="8" fill="#0077B6" />
          <rect x="1202" y="180" width="6" height="8" fill="#0077B6" />

          {/* Small house */}
          <rect x="1225" y="175" width="30" height="45" fill="#FFFFFF" />
          <polygon points="1225,175 1240,155 1255,175" fill="#C4703F" />
          <rect x="1233" y="190" width="8" height="10" fill="#48CAE4" />

          {/* Another house */}
          <rect x="1115" y="170" width="32" height="50" fill="#FFF8F0" />
          <polygon points="1115,170 1131,150 1147,170" fill="#E07A5F" />
          <rect x="1122" y="183" width="7" height="9" fill="#0096C7" />
        </g>

        {/* Coastline/Beach */}
        <path
          d="M0,220 Q200,215 400,225 T800,220 T1200,225 T1440,220 L1440,300 L0,300 Z"
          fill="#F5E6D3"
        />
      </svg>
    </div>
  );
}
