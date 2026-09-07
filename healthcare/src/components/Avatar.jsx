import { useState } from "react";

export default function Avatar({
  initials,
  src,
  alt,
  size = "normal",
  className = "",
}) {
  const [failed, setFailed] = useState(false);

  const sizes = {
    small: "h-[30px] w-[30px] text-[11px]",
    normal: "h-9 w-9 text-[13px]",
    large: "h-[52px] w-[52px] text-[17px]",
  };

  const showPhoto = Boolean(src) && !failed;

  return (
    <div
      className={`
        relative flex shrink-0 items-center justify-center
        overflow-hidden rounded-full
        bg-[#E4EFEA]
        font-semibold
        text-[#154F46]
        ${sizes[size]}
        ${className}
      `}
    >
      {showPhoto ? (
        <img
          src={src}
          alt={alt || initials || "Avatar"}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}
