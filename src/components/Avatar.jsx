export default function Avatar({
  initials,
  src,
  name = "",
  size = "normal",
}) {
  const sizes = {
    sm: "h-8 w-8 text-xs",
    small: "h-[30px] w-[30px] text-[11px]",
    normal: "h-9 w-9 text-[13px]",
    md: "h-10 w-10 text-sm",
    large: "h-[52px] w-[52px] text-[17px]",
    lg: "h-14 w-14 text-base",
  };

  const fallbackInitials =
    initials ||
    name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <div
      className={`
        flex shrink-0 items-center justify-center
        overflow-hidden
        rounded-full
        bg-[#E4EFEA]
        font-semibold
        text-[#154F46]
        ${sizes[size] || sizes.normal}
      `}
    >
      {src ? (
        <img
          src={src}
          alt={name || "Avatar"}
          className="h-full w-full object-cover"
        />
      ) : (
        fallbackInitials
      )}
    </div>
  );
}