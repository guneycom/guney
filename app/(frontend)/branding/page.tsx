import type { Metadata } from "next";
import Link from "next/link";
import { BackgroundElements } from "@/app/(frontend)/components/background";

export const metadata: Metadata = {
  title: "Brand Identity | guney.com",
  description:
    "We're looking for graphic designers and brand identity studios to help define the visual identity of guney.com.",
};

export default function BrandingPage() {
  return (
    <>
      {/* Background Elements */}
      <BackgroundElements />

      {/* Back Link */}
      <Link
        href="/"
        className="fixed top-8 left-8 z-50 inline-flex items-center gap-2 text-terracotta no-underline font-sans text-sm font-medium tracking-tight transition-all duration-300 hover:text-terracotta-light hover:-translate-x-1 max-sm:top-6 max-sm:left-6 max-sm:text-xs"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 12L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        guney.com
      </Link>

      {/* Main Content */}
      <div className="relative z-20 h-screen flex flex-col justify-center items-center p-8 overflow-hidden max-sm:p-4 max-sm:pt-16">
        <div className="max-w-[640px] w-full max-h-[75vh] overflow-y-auto bg-cream p-12 rounded-[20px] shadow-[0_8px_40px_rgba(44,42,38,0.08),0_2px_8px_rgba(44,42,38,0.04)] relative z-25 max-sm:max-h-[85vh] max-sm:p-8">
          <h1 className="font-sans text-[clamp(2rem,5vw,3rem)] font-medium leading-[1.2] text-charcoal mb-6 tracking-[-0.02em] text-center">
            Brand Identity
          </h1>

          {/* Divider */}
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto mb-10" />

          <p className="font-sans text-lg font-light leading-relaxed text-charcoal mb-6 max-sm:text-base">
            <strong className="font-medium">guney.com</strong> is a
            culture-first lifestyle brand: refined, intentional, Mediterranean
            in spirit, a modern &ldquo;easy living&rdquo; universe built through
            premium editorial (writing / photo / video / social) and a curated
            marketplace of objects that match the same standard.
          </p>

          <p className="font-sans text-lg font-light leading-relaxed text-charcoal mb-6 max-sm:text-base">
            I&apos;m opening an invitation to graphic designers / brand identity
            studios to help define the visual identity of guney.com.
          </p>

          {/* Section: What we're building */}
          <section className="mt-10">
            <h2 className="font-sans text-lg font-medium text-terracotta mb-3 tracking-tight max-sm:text-base">
              What we&apos;re building
            </h2>
            <p className="font-sans text-base font-light leading-relaxed text-charcoal/85 mb-3 max-sm:text-sm">
              A contemporary lifestyle brand that feels:
            </p>
            <ul className="list-none p-0 m-0">
              <li className="font-sans text-base font-light leading-relaxed text-charcoal/85 pl-6 relative mb-2 before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:bg-terracotta before:rounded-full max-sm:text-sm">
                refined, elegant, confident
              </li>
              <li className="font-sans text-base font-light leading-relaxed text-charcoal/85 pl-6 relative mb-2 before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:bg-terracotta before:rounded-full max-sm:text-sm">
                minimal but warm
              </li>
              <li className="font-sans text-base font-light leading-relaxed text-charcoal/85 pl-6 relative mb-2 before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:bg-terracotta before:rounded-full max-sm:text-sm">
                modern editorial, not corporate
              </li>
              <li className="font-sans text-base font-light leading-relaxed text-charcoal/85 pl-6 relative mb-2 before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:bg-terracotta before:rounded-full max-sm:text-sm">
                taste-led (not trend-led)
              </li>
            </ul>
          </section>

          {/* Section: What we need */}
          <section className="mt-10">
            <h2 className="font-sans text-lg font-medium text-terracotta mb-3 tracking-tight max-sm:text-base">
              What we need
            </h2>
            <ul className="list-none p-0 m-0">
              <li className="font-sans text-base font-light leading-relaxed text-charcoal/85 pl-6 relative mb-2 before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:bg-terracotta before:rounded-full max-sm:text-sm">
                <strong className="font-medium text-charcoal">
                  Brand identity system:
                </strong>{" "}
                logotype, wordmark rules, typography direction, color system,
                grid/layout principles
              </li>
              <li className="font-sans text-base font-light leading-relaxed text-charcoal/85 pl-6 relative mb-2 before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:bg-terracotta before:rounded-full max-sm:text-sm">
                <strong className="font-medium text-charcoal">
                  Visual language for editorial + commerce:
                </strong>{" "}
                imagery rules, iconography, graphic elements, art direction cues
              </li>
              <li className="font-sans text-base font-light leading-relaxed text-charcoal/85 pl-6 relative mb-2 before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:bg-terracotta before:rounded-full max-sm:text-sm">
                <strong className="font-medium text-charcoal">
                  Deliverables
                </strong>{" "}
                that translate into web/app, social, and print
              </li>
            </ul>
          </section>

          {/* Section: How to apply */}
          <section className="mt-10">
            <h2 className="font-sans text-lg font-medium text-terracotta mb-3 tracking-tight max-sm:text-base">
              How to apply
            </h2>
            <p className="font-sans text-base font-light leading-relaxed text-charcoal/85 mb-3 max-sm:text-sm">
              Please email:
            </p>
            <ol className="list-none p-0 m-0">
              <li className="font-sans text-base font-light leading-relaxed text-charcoal/85 pl-6 relative mb-2 max-sm:text-sm">
                <span className="absolute left-0 top-0 text-sm font-medium text-terracotta">1</span>
                Portfolio + a short note on your strongest relevant work
              </li>
              <li className="font-sans text-base font-light leading-relaxed text-charcoal/85 pl-6 relative mb-2 max-sm:text-sm">
                <span className="absolute left-0 top-0 text-sm font-medium text-terracotta">2</span>
                Your approach to building the guney.com identity (how you&apos;d
                think about it, what you&apos;d prioritize)
              </li>
              <li className="font-sans text-base font-light leading-relaxed text-charcoal/85 pl-6 relative mb-2 max-sm:text-sm">
                <span className="absolute left-0 top-0 text-sm font-medium text-terracotta">3</span>
                An initial direction (lightweight):
                <ul className="list-none p-0 mt-2">
                  <li className="pl-4 relative mb-1 before:content-[''] before:absolute before:left-0 before:top-[0.75em] before:w-1 before:h-1 before:bg-terracotta/40 before:rounded-full">
                    1 moodboard OR 6&ndash;12 visual references
                  </li>
                  <li className="pl-4 relative mb-1 before:content-[''] before:absolute before:left-0 before:top-[0.75em] before:w-1 before:h-1 before:bg-terracotta/40 before:rounded-full">
                    10 lines of rationale (why this fits guney.com)
                  </li>
                  <li className="pl-4 relative mb-1 before:content-[''] before:absolute before:left-0 before:top-[0.75em] before:w-1 before:h-1 before:bg-terracotta/40 before:rounded-full">
                    2&ndash;3 comparable brands/projects you admire (for craft,
                    not copying)
                  </li>
                </ul>
              </li>
              <li className="font-sans text-base font-light leading-relaxed text-charcoal/85 pl-6 relative mb-2 max-sm:text-sm">
                <span className="absolute left-0 top-0 text-sm font-medium text-terracotta">4</span>
                Budget range and how you price (fixed / day rate / phases)
              </li>
              <li className="font-sans text-base font-light leading-relaxed text-charcoal/85 pl-6 relative mb-2 max-sm:text-sm">
                <span className="absolute left-0 top-0 text-sm font-medium text-terracotta">5</span>
                Timeline assumptions and any requirements (availability,
                process, tools, etc.)
              </li>
            </ol>
          </section>

          {/* Note */}
          <p className="font-sans text-base font-light italic leading-relaxed text-charcoal/70 mt-10 max-sm:text-sm">
            I will personally review submissions and reply to the ones that
            resonate. Shortlisted designers may be invited to a brief call and
            (optionally) a small paid test to confirm fit.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-2">
            <span className="font-sans text-sm font-normal text-charcoal/60">
              Send inquiries to:
            </span>
            <a
              href="mailto:hello@guney.com"
              className="font-sans text-xl font-medium text-sea no-underline transition-all duration-300 hover:text-sea-bright max-sm:text-lg"
            >
              hello@guney.com
            </a>
          </div>

          {/* Signature */}
          <div className="mt-12">
            <p className="font-sans text-base font-light text-charcoal/70 m-0">
              Thank you,
            </p>
            <p className="font-sans text-base font-medium text-charcoal mt-1 m-0">
              Güney Cüceloğlu
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
