export default function Button({
  children,
  variant = "primary",
  size = "normal",
  icon,
  onClick,
  disabled = false,
  className = "",
}) {
  const variants = {
    primary:
      "border-transparent bg-[#1F6F63] text-white hover:bg-[#154F46]",

    outline:
      "border-[rgba(18,35,43,0.12)] bg-white text-[#12232B] hover:border-[rgba(18,35,43,0.5)]",

    ghost:
      "border-transparent bg-transparent px-1.5 text-[#154F46]",

    danger:
      "border-[#C1622E] bg-white text-[#C1622E]",
  };

  const sizes = {
    small:
      "rounded-[7px] px-3 py-[7px] text-[13px]",

    normal:
      "rounded-lg px-4 py-2.5 text-sm",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center
        gap-[7px]
        whitespace-nowrap
        border
        font-semibold
        transition
        duration-200
        disabled:cursor-not-allowed
        disabled:opacity-45
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {icon}
      {children}
    </button>
  );
}