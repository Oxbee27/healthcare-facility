export function Panel({
  children,
  className = "",
  ...rest
}) {
  return (
    <div
      className={`
        overflow-hidden
        rounded-[14px]
        border
        border-[rgba(18,35,43,0.12)]
        bg-white
        ${className}
      `}
      {...rest}
    >
      {children}
    </div>
  );
}

export function PanelHeader({
  title,
  hint,
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        border-b
        border-[rgba(18,35,43,0.12)]
        gap-2 px-4
        py-4 sm:px-6 sm:py-[18px]
      "
    >
      <h3 className="m-0 min-w-0 text-[16px] font-semibold sm:text-[17px]">
        {title}
      </h3>

      {hint && (
        <span className="shrink-0 text-right text-[12px] text-[#4B5B5A] sm:text-[12.5px]">
          {hint}
        </span>
      )}
    </div>
  );
}