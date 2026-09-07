export default function StatCard({ label, value, change, tone = "neutral" }) {
  const toneClasses = {
    positive: "text-[#1F6F63]",
    negative: "text-[#C1622E]",
    neutral: "text-[#4B5B5A]",
  };

  const resolvedTone =
    tone === "neutral" && typeof change === "string"
      ? change.trim().startsWith("-")
        ? "negative"
        : "positive"
      : tone;

  return (
    <div
      className="
        rounded-[14px] border border-[rgba(18,35,43,0.12)]
        bg-white px-4 py-4 sm:px-5 sm:py-5
      "
    >
      <p className="m-0 mb-1.5 text-[12.5px] font-medium text-[#4B5B5A]">
        {label}
      </p>

      <div className="flex items-end justify-between gap-2">
        <p className="m-0 font-['Newsreader'] text-[24px] font-semibold leading-none text-[#12232B] sm:text-[27px]">
          {value}
        </p>

        {change && (
          <span
            className={`text-[12.5px] font-semibold ${toneClasses[resolvedTone]}`}
          >
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
