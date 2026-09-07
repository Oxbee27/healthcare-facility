import {
  FaHeartbeat,
  FaHome,
  FaCalendarAlt,
  FaFolder,
  FaCommentDots,
  FaPills,
  FaCreditCard,
  FaCog,
  FaUsers,
  FaFileAlt,
  FaInbox,
  FaChartBar,
  FaBuilding,
} from "react-icons/fa";

import { NAVIGATION } from "../data/healthData";

const icons = {
  home: FaHome,
  calendar: FaCalendarAlt,
  folder: FaFolder,
  message: FaCommentDots,
  pill: FaPills,
  card: FaCreditCard,
  settings: FaCog,
  users: FaUsers,
  file: FaFileAlt,
  inbox: FaInbox,
  bar: FaChartBar,
  building: FaBuilding,
};

export default function Sidebar({
  role,
  currentPage,
  setPage,
  railOpen,
  setRailOpen,
  setRole,
}) {
  const navigation = NAVIGATION[role] || NAVIGATION.patient;

  function handleNavigation(page) {
    setPage(page);
    setRailOpen(false);
  }

  return (
    <>
      {/* Mobile overlay */}
      {railOpen && (
        <div
          onClick={() => setRailOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-40
          flex h-dvh w-[min(86vw,280px)] flex-col
          overflow-y-auto bg-[#12232B] px-3.5 py-5 sm:w-[230px] sm:py-[22px]
          text-[#EDEFE9]
          transition-transform duration-200
          lg:sticky lg:z-auto lg:w-[232px]
          lg:translate-x-0
          ${railOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Brand */}
        <div className="flex items-center gap-2.5 px-2 pb-5 sm:pb-[22px]">
          <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg bg-[#1F6F63]">
            <FaHeartbeat size={17} />
          </div>

          <span className="font-['Newsreader'] text-lg font-semibold">
            Meridian
          </span>
        </div>

        {/* Navigation */}
        <nav className="mt-1.5 flex flex-col gap-1">
          {navigation.map((item) => {
            const Icon = icons[item.icon];

            if (!Icon) {
              return null;
            }

            const active = currentPage === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigation(item.id)}
                className={`
                  flex w-full items-center gap-[11px]
                  rounded-lg border-0 px-2.5 py-2.5 sm:py-[9px]
                  text-left text-[14.5px] font-medium
                  transition-colors
                  ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <Icon size={17} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Push selector to bottom */}
        <div className="flex-1" />

        {/* Role selector */}
        <div className="mt-2.5 border-t border-white/10 pt-3.5 pb-1">
          <p className="px-2.5 pb-2 text-xs text-white/45">
            Viewing as
          </p>

          <div className="flex gap-[5px] px-0.5">
            {["patient", "provider", "admin"].map((item) => {
              const active = role === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setRole(item);
                    setPage("dashboard");
                    setRailOpen(false);
                  }}
                  className={`
                    flex-1 rounded-[7px]
                    border px-1 py-[7px]
                    text-[12.5px] font-medium capitalize
                    transition-colors
                    ${
                      active
                        ? "border-[#1F6F63] bg-[#1F6F63] text-white"
                        : "border-white/15 bg-transparent text-white/60 hover:bg-white/5"
                    }
                  `}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}