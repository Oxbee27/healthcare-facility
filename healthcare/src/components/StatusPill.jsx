const TONE_MAP = {
  // Positive / good states
  paid: "positive",
  completed: "positive",
  confirmed: "positive",
  reviewed: "positive",
  active: "positive",
  "on track": "positive",

  // Needs attention
  due: "warning",
  pending: "warning",
  new: "warning",
  "needs staffing": "warning",
  "high volume": "warning",
};

const TONE_CLASSES = {
  positive: "bg-[#E4EFEA] text-[#154F46]",
  warning: "bg-[#F3EADA] text-[#8A5A22]",
  neutral: "bg-[rgba(18,35,43,0.08)] text-[#4B5B5A]",
};

export default function StatusPill({ status }) {
  const tone = TONE_MAP[status?.toLowerCase()] || "neutral";

  return (
    <span
      className={`
        inline-flex w-fit shrink-0 items-center rounded-full
        px-2.5 py-1 text-[11.5px] font-semibold
        ${TONE_CLASSES[tone]}
      `}
    >
      {status}
    </span>
  );
}
