export function Panel({
  children,
  className = "",
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
        px-6
        py-[18px]
      "
    >
      <h3 className="m-0 text-[17px] font-semibold">
        {title}
      </h3>

      {hint && (
        <span className="text-[12.5px] text-[#4B5B5A]">
          {hint}
        </span>
      )}
    </div>
  );
}