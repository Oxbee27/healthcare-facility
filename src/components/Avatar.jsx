export default function Avatar({
  initials,
  size = "normal",
}) {
  const sizes = {
    small: "h-[30px] w-[30px] text-[11px]",
    normal: "h-9 w-9 text-[13px]",
    large: "h-[52px] w-[52px] text-[17px]",
  };

  return (
    <div
      className={`
        flex shrink-0 items-center justify-center
        rounded-full
        bg-[#E4EFEA]
        font-semibold
        text-[#154F46]
        ${sizes[size]}
      `}
    >
      {initials}
    </div>
  );
}