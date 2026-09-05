import {
  FaHeartbeat,
  FaHome,
  FaCalendarAlt,
  FaFolder,
  FaCommentDots,
  FaPills,
  FaCog,
  FaUsers,
} from "react-icons/fa";

const navigation = [
  {
    label: "Dashboard",
    key: "dashboard",
    icon: FaHome,
  },
  {
    label: "Appointments",
    key: "appointments",
    icon: FaCalendarAlt,
  },
  {
    label: "Doctors",
    key: "doctors",
    icon: FaUsers,
  },
  {
    label: "Prescriptions",
    key: "prescriptions",
    icon: FaPills,
  },
  {
    label: "Health Records",
    key: "records",
    icon: FaFolder,
  },
  {
    label: "Messages",
    key: "messages",
    icon: FaCommentDots,
  },
];

export default function Sidebar({
  active,
  onNavigate,
  open,
  onClose,
}) {
  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-64 flex-col
          bg-[#12232B] p-5 text-[#EDEFE9]
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1F6F63]">
            <FaHeartbeat size={18} />
          </div>

          <span className="font-['Newsreader'] text-xl font-semibold">
            Meridian
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.key;

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => {
                  onNavigate(item.key);
                  onClose();
                }}
                className={`
                  flex w-full items-center gap-3
                  rounded-lg px-3 py-3
                  text-left text-sm font-medium
                  transition
                  ${
                    isActive
                      ? "bg-[#1F6F63] text-white"
                      : "text-white/65 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <Icon size={17} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="mt-auto border-t border-white/10 pt-4">
          <button
            type="button"
            onClick={() => {
              onNavigate("profile");
              onClose();
            }}
            className="
              flex w-full items-center gap-3
              rounded-lg px-3 py-3
              text-left text-sm font-medium
              text-white/65
              hover:bg-white/10 hover:text-white
            "
          >
            <FaCog size={17} />
            <span>Settings</span>
          </button>
        </div>
      </aside>
    </>
  );
}