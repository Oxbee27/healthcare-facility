import {
  FaSearch,
  FaBell,
  FaBars,

} from "react-icons/fa";

import Avatar from "./Avatar";

import { ROLE_IDENTITY } from "../data/healthData";

export default function Topbar({
  role,
  setRailOpen,
}) {
  const identity = ROLE_IDENTITY[role];

  return (
    <header
      className="
        sticky
        top-0
        z-20
        flex
        min-h-[65px]
        items-center
        gap-4
        border-b
        border-[rgba(18,35,43,0.12)]
        bg-[#F3F5EF]
        px-4
        py-3
        sm:px-6
        lg:px-8
      "
    >
      {/* Mobile menu */}
      <button
        onClick={() => setRailOpen(true)}
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-[rgba(18,35,43,0.12)]
          bg-white
          lg:hidden
        "
      >
        <FaBars size={17} />
      </button>

      {/* Search */}
      <div
        className="
          flex
          max-w-[360px]
          flex-1
          items-center
          gap-2
          rounded-[9px]
          border
          border-[rgba(18,35,43,0.12)]
          bg-white
          px-3
          py-2
          text-[rgba(18,35,43,0.5)]
        "
      >
        <FaSearch size={16} />

        <input
          type="text"
          placeholder={
            role === "patient"
              ? "Search records, medications, messages…"
              : "Search patients, charts, orders…"
          }
          className="
            min-w-0
            w-full
            border-0
            bg-transparent
            text-sm
            text-[#12232B]
            outline-none
            placeholder:text-[rgba(18,35,43,0.5)]
          "
        />
      </div>

      <div className="flex-1" />

      {/* Notification */}
      <button
        className="
          relative
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-[9px]
          border
          border-[rgba(18,35,43,0.12)]
          bg-white
        "
      >
        <FaBell
          size={17}
          className="text-[rgba(18,35,43,0.7)]"
        />

        <span
          className="
            absolute
            right-[7px]
            top-[6px]
            h-[7px]
            w-[7px]
            rounded-full
            border-[1.5px]
            border-[#F3F5EF]
            bg-[#C1622E]
          "
        />
      </button>

      {/* User */}
      <div className="flex items-center gap-2.5 pl-1.5">
        <Avatar
          initials={identity.initials}
          size="small"
        />

        <div className="hidden flex-col leading-tight sm:flex">
          <strong className="text-[13.5px] font-semibold">
            {identity.name}
          </strong>

          <span className="text-xs text-[rgba(18,35,43,0.5)]">
            {identity.subtitle}
          </span>
        </div>
      </div>
    </header>
  );
}