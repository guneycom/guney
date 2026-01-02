export function Sun() {
  return (
    <div
      className="absolute top-[8%] right-[12%] w-[180px] h-[180px] rounded-full opacity-0 animate-sun-pulse max-sm:w-[120px] max-sm:h-[120px] max-sm:right-[5%] max-sm:top-[5%]"
      style={{
        background:
          "radial-gradient(circle, #f4c76b 0%, #e8a84c 40%, transparent 70%)",
        animationDelay: "0.5s",
        animationFillMode: "forwards",
      }}
    />
  );
}
