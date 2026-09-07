export default function TrendChart({ labels, values, unit = "" }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;

  const points = values.map((value, index) => {
    const x = (index / (values.length - 1)) * 100;
    const y = 100 - ((value - min) / range) * 80 - 10;
    return [x, y];
  });

  const line = points
    .map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x} ${y}`)
    .join(" ");

  return (
    <div className="w-full min-w-0 overflow-x-auto overflow-y-hidden">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="h-[150px] min-w-[420px] w-full sm:h-[170px]"
      >
        <defs>
          <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1F6F63" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1F6F63" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path d={`${line} L100 100 L0 100 Z`} fill="url(#trendGradient)" />

        <path
          d={line}
          fill="none"
          stroke="#1F6F63"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />

        {points.map(([x, y], index) => (
          <circle key={index} cx={x} cy={y} r="1.8" fill="#1F6F63" />
        ))}
      </svg>

      <div className="flex justify-between px-1 text-[10.5px] text-[#4B5B5A]">
        {labels.map((label, index) => (
          <span key={index}>
            {label}
            {unit && index === labels.length - 1 ? ` ${unit}` : ""}
          </span>
        ))}
      </div>
    </div>
  );
}
