export default function Tabs({ tabs, active, onChange }) {
  return (
    <div
      className="
        flex w-full gap-1 overflow-x-auto rounded-lg
        bg-[rgba(18,35,43,0.06)] p-1
        sm:w-fit
      "
    >
      {tabs.map((tab) => {
        const isActive = tab.id === active;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`
              whitespace-nowrap rounded-md px-3.5 py-1.5
              text-[13px] font-semibold transition-colors
              ${
                isActive
                  ? "bg-white text-[#12232B] shadow-sm"
                  : "text-[#4B5B5A] hover:text-[#12232B]"
              }
            `}
          >
            {tab.label}
            {typeof tab.count === "number" && (
              <span
                className={`ml-1.5 text-[11.5px] ${
                  isActive ? "text-[#4B5B5A]" : "text-[rgba(18,35,43,0.4)]"
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
