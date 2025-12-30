"use client";

import { useState, FormEvent } from "react";
import { subscribeEmail } from "@/app/actions/subscribe";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const result = await subscribeEmail(email);

    setIsLoading(false);

    if (result.success) {
      setIsSubmitted(true);
    } else {
      setError(result.message);
    }
  };

  return (
    <>
      {/* Preloader */}
      <div className="preloader">
        <div className="preloader-icon"></div>
      </div>

      {/* Background Elements */}
      <div className="bg-elements">
        {/* Sun */}
        <div className="sun"></div>

        {/* Mountains in the back */}
        <svg className="mountains" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMax slice">
          {/* Far mountain - lighter */}
          <path d="M-100,400 L200,180 L350,220 L500,120 L650,200 L800,100 L950,180 L1100,140 L1250,200 L1400,150 L1540,400 Z" fill="#8FB4A3" opacity="0.5"/>
          {/* Near mountain - darker */}
          <path d="M-50,400 L150,250 L300,280 L450,200 L600,260 L750,180 L900,240 L1050,200 L1200,260 L1350,220 L1500,400 Z" fill="#5A8A7A" opacity="0.6"/>
        </svg>

        {/* Coastal Town */}
        <div className="town">
          {/* Houses cluster - left side */}
          <svg className="town-buildings" viewBox="0 0 1440 300" preserveAspectRatio="xMidYMax slice">
            {/* Left cluster */}
            <g className="building-group-left">
              {/* Church/Tower */}
              <rect x="80" y="140" width="35" height="80" fill="#FAF3E8"/>
              <polygon points="80,140 97,100 115,140" fill="#D4856A"/>
              <rect x="93" y="110" width="8" height="20" fill="#FAF3E8"/>
              <circle cx="97" cy="108" r="4" fill="#E85D04"/>

              {/* House 1 */}
              <rect x="120" y="160" width="40" height="60" fill="#FFFFFF"/>
              <polygon points="120,160 140,135 160,160" fill="#C4703F"/>
              <rect x="128" y="180" width="10" height="15" fill="#0077B6"/>
              <rect x="145" y="175" width="8" height="12" fill="#0096C7"/>

              {/* House 2 */}
              <rect x="165" y="155" width="35" height="65" fill="#FFF8F0"/>
              <polygon points="165,155 182,130 200,155" fill="#E07A5F"/>
              <rect x="172" y="170" width="8" height="10" fill="#48CAE4"/>
              <rect x="185" y="175" width="8" height="12" fill="#48CAE4"/>
              <rect x="175" y="195" width="12" height="25" fill="#8B5A3C"/>

              {/* House 3 */}
              <rect x="205" y="165" width="30" height="55" fill="#FFFFFF"/>
              <polygon points="205,165 220,145 235,165" fill="#C4703F"/>
              <rect x="212" y="178" width="7" height="10" fill="#0096C7"/>
            </g>

            {/* Center cluster */}
            <g className="building-group-center">
              {/* Larger building */}
              <rect x="580" y="150" width="50" height="70" fill="#FAF3E8"/>
              <polygon points="580,150 605,120 630,150" fill="#D4856A"/>
              <rect x="590" y="165" width="10" height="12" fill="#0077B6"/>
              <rect x="608" y="165" width="10" height="12" fill="#0077B6"/>
              <rect x="598" y="190" width="14" height="30" fill="#8B5A3C"/>

              {/* Small house */}
              <rect x="635" y="170" width="28" height="50" fill="#FFFFFF"/>
              <polygon points="635,170 649,150 663,170" fill="#C4703F"/>
              <rect x="642" y="182" width="8" height="10" fill="#48CAE4"/>

              {/* Another house */}
              <rect x="545" y="160" width="32" height="60" fill="#FFF8F0"/>
              <polygon points="545,160 561,138 577,160" fill="#E07A5F"/>
              <rect x="552" y="175" width="8" height="10" fill="#0096C7"/>
              <rect x="555" y="195" width="10" height="25" fill="#8B5A3C"/>
            </g>

            {/* Right cluster */}
            <g className="building-group-right">
              {/* House with blue dome (Greek style) */}
              <rect x="1150" y="165" width="40" height="55" fill="#FFFFFF"/>
              <ellipse cx="1170" cy="165" rx="20" ry="12" fill="#0096C7"/>
              <rect x="1160" y="185" width="8" height="10" fill="#48CAE4"/>
              <rect x="1175" y="185" width="8" height="10" fill="#48CAE4"/>

              {/* Tower */}
              <rect x="1195" y="145" width="25" height="75" fill="#FAF3E8"/>
              <polygon points="1195,145 1207,115 1220,145" fill="#D4856A"/>
              <rect x="1202" y="165" width="6" height="8" fill="#0077B6"/>
              <rect x="1202" y="180" width="6" height="8" fill="#0077B6"/>

              {/* Small house */}
              <rect x="1225" y="175" width="30" height="45" fill="#FFFFFF"/>
              <polygon points="1225,175 1240,155 1255,175" fill="#C4703F"/>
              <rect x="1233" y="190" width="8" height="10" fill="#48CAE4"/>

              {/* Another house */}
              <rect x="1115" y="170" width="32" height="50" fill="#FFF8F0"/>
              <polygon points="1115,170 1131,150 1147,170" fill="#E07A5F"/>
              <rect x="1122" y="183" width="7" height="9" fill="#0096C7"/>
            </g>

            {/* Coastline/Beach */}
            <path d="M0,220 Q200,215 400,225 T800,220 T1200,225 T1440,220 L1440,300 L0,300 Z" fill="#F5E6D3"/>
          </svg>
        </div>

        {/* Boats on water */}
        <div className="boats">
          {/* Boat 1 - Small fishing boat left */}
          <svg className="boat boat-1" viewBox="0 0 60 40" width="60" height="40">
            <path d="M5,25 Q10,35 30,35 Q50,35 55,25 L50,25 Q45,30 30,30 Q15,30 10,25 Z" fill="#8B5A3C"/>
            <line x1="30" y1="30" x2="30" y2="8" stroke="#8B5A3C" strokeWidth="2"/>
            <polygon points="32,10 32,25 48,25" fill="#FFFFFF" opacity="0.9"/>
          </svg>

          {/* Boat 2 - Sailboat center */}
          <svg className="boat boat-2" viewBox="0 0 80 60" width="80" height="60">
            <path d="M10,40 Q15,52 40,52 Q65,52 70,40 L62,40 Q58,47 40,47 Q22,47 18,40 Z" fill="#C4703F"/>
            <line x1="40" y1="47" x2="40" y2="5" stroke="#8B5A3C" strokeWidth="2"/>
            <polygon points="42,8 42,40 70,40" fill="#FAF3E8"/>
            <polygon points="38,12 38,40 18,40" fill="#FFFFFF"/>
          </svg>

          {/* Boat 3 - Small boat right */}
          <svg className="boat boat-3" viewBox="0 0 50 35" width="50" height="35">
            <path d="M5,22 Q8,30 25,30 Q42,30 45,22 L40,22 Q37,27 25,27 Q13,27 10,22 Z" fill="#5A8A7A"/>
            <line x1="25" y1="27" x2="25" y2="10" stroke="#5A8A3C" strokeWidth="1.5"/>
            <polygon points="27,12 27,24 40,24" fill="#FFFFFF" opacity="0.85"/>
          </svg>
        </div>

        {/* Gentle Waves */}
        <div className="wave wave-1">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="#48CAE4" fillOpacity="0.25" d="M0,60 Q180,40 360,60 T720,60 T1080,60 T1440,60 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
        <div className="wave wave-2">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="#0096C7" fillOpacity="0.2" d="M0,70 Q180,55 360,70 T720,70 T1080,70 T1440,70 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
        <div className="wave wave-3">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="#0077B6" fillOpacity="0.15" d="M0,80 Q180,70 360,80 T720,80 T1080,80 T1440,80 L1440,120 L0,120 Z"></path>
          </svg>
        </div>

        {/* Sea base */}
        <div className="sea-base"></div>
      </div>

      {/* Main Content */}
      <div className="main-container">
        <div className="content">
          <div className="badge">Çok Yakında</div>

          <h1 className="title">guney.com</h1>
          <p className="subtitle">güneye giderken tek ihtiyacınız.</p>

          <div className="divider"></div>

          <div className="email-form">
            {!isSubmitted ? (
              <>
                <form className="form-wrapper" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    className="email-input"
                    placeholder="E-posta adresiniz"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                  />
                  <button type="submit" className="submit-btn" disabled={isLoading}>
                    {isLoading ? "Gonderiliyor..." : "Haberdar Ol"}
                  </button>
                </form>
                {error && (
                  <div className="error-message">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
                      <path d="M10 6v5M10 13.5v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {error}
                  </div>
                )}
              </>
            ) : (
              <div className="success-message show">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.667 5L7.5 14.167L3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Listeye eklendiniz!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
