"use client";

import { useState, FormEvent } from "react";
import { subscribeEmail } from "@/app/actions/subscribe";
import { BackgroundElements } from "@/app/components/background";

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
      <div className="fixed inset-0 bg-cream z-[1000] flex items-center justify-center animate-fade-out">
        <div className="w-10 h-10 border-2 border-sand border-t-terracotta rounded-full animate-spin" />
      </div>

      {/* Background Elements */}
      <BackgroundElements />

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col justify-center items-center px-8 py-12 pb-60 max-sm:px-6 max-sm:pb-72">
        <div className="text-center max-w-[700px]">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-sand px-5 py-2.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase text-terracotta mb-10 border border-terracotta/20 opacity-0 animate-fade-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="w-1.5 h-1.5 bg-terracotta rounded-full animate-pulse" />
            Çok Yakında
          </div>

          {/* Title */}
          <h1
            className="font-sans text-[clamp(2.5rem,8vw,5rem)] font-medium leading-[1.1] mb-3 text-charcoal tracking-[-0.02em] opacity-0 animate-fade-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            guney.com
          </h1>

          {/* Subtitle */}
          <p
            className="font-sans text-[clamp(1rem,2.5vw,1.3rem)] font-normal tracking-[0.05em] text-charcoal/70 mb-12 opacity-0 animate-fade-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            güneye giderken tek ihtiyacınız.
          </p>

          {/* Divider */}
          <div
            className="w-20 h-px bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto mb-12 opacity-0 animate-fade-slide-up"
            style={{ animationDelay: "0.7s" }}
          />

          {/* Email Form */}
          <div
            className="opacity-0 animate-fade-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            {!isSubmitted ? (
              <>
                <form
                  className="flex gap-0 max-w-[480px] mx-auto bg-white rounded-full p-1.5 shadow-[0_4px_30px_rgba(44,42,38,0.08),0_1px_3px_rgba(44,42,38,0.05)] border border-terracotta/10 transition-all duration-400 focus-within:shadow-[0_8px_40px_rgba(106,154,174,0.15),0_2px_8px_rgba(44,42,38,0.08)] focus-within:border-sea/30 max-sm:flex-col max-sm:rounded-[20px] max-sm:p-2"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="email"
                    className="flex-1 border-none bg-transparent px-6 py-4 font-sans text-base font-light text-charcoal outline-none placeholder:text-charcoal/40 max-sm:text-center max-sm:px-4"
                    placeholder="E-posta adresiniz"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-br from-terracotta to-terracotta-light text-white px-8 py-4 rounded-full font-sans text-sm font-medium tracking-[0.05em] cursor-pointer transition-all duration-300 whitespace-nowrap hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(232,93,4,0.35)] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none max-sm:w-full max-sm:py-4"
                    disabled={isLoading}
                  >
                    {isLoading ? "Gönderiliyor..." : "Haberdar Ol"}
                  </button>
                </form>
                {error && (
                  <div className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full text-sm font-normal mt-4 animate-error-pop">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="8"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M10 6v5M10 13.5v.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    {error}
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center gap-2 px-8 py-4 bg-olive text-white rounded-full text-base font-normal animate-success-pop">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M16.667 5L7.5 14.167L3.333 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Listeye eklendiniz!
              </div>
            )}
          </div>

          {/* Privacy Note */}
          <p
            className="mt-6 text-xs text-charcoal/40 opacity-0 animate-fade-slide-up"
            style={{ animationDelay: "1s" }}
          >
            E-posta adresiniz güvende. Spam göndermiyoruz.
          </p>
        </div>
      </main>
    </>
  );
}
