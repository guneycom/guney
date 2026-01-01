import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "güneye giderken",
  description: "güneye giderken tek ihtiyacınız.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${outfit.variable} ${cormorantGaramond.variable} antialiased`}
      >
        {children}
        <Script
          src="https://plausible.io/js/pa-gxcwhSxQQfRnra0QN8I94.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </body>
      <GoogleAnalytics gaId="G-97EP3L0QDB" />
    </html>
  );
}
