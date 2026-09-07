import { useState } from "react";

import Avatar from "../components/Avatar";
import Button from "../components/Button";
import { Panel, PanelHeader } from "../components/Panel";
import { ROLE_IDENTITY } from "../data/healthData";

const NOTIFICATION_DEFAULTS = [
  {
    id: "appointments",
    label: "Appointment reminders",
    description: "Get notified 24 hours before a scheduled visit.",
    checked: true,
  },
  {
    id: "messages",
    label: "New messages",
    description: "Get notified when your care team sends a message.",
    checked: true,
  },
  {
    id: "billing",
    label: "Billing alerts",
    description: "Get notified about new statements and due balances.",
    checked: false,
  },
];

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`
        relative h-6 w-11 shrink-0 rounded-full transition-colors
        ${checked ? "bg-[#1F6F63]" : "bg-[rgba(18,35,43,0.18)]"}
      `}
    >
      <span
        className={`
          absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform
          ${checked ? "translate-x-[22px]" : "translate-x-0.5"}
        `}
      />
    </button>
  );
}

export default function SettingsPage({ role }) {
  const identity = ROLE_IDENTITY[role];
  const [notifications, setNotifications] = useState(NOTIFICATION_DEFAULTS);
  const [name, setName] = useState(identity.name);

  function toggleNotification(id) {
    setNotifications((current) =>
      current.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  return (
    <main>
      <div className="mb-5 sm:mb-[26px]">
        <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
          Account
        </p>

        <h1 className="m-0 mb-1.5 font-['Newsreader'] text-[27px] font-semibold leading-tight sm:text-[30px] text-[#12232B]">
          Settings
        </h1>
      </div>

      <div className="flex flex-col gap-5">
        {/* Profile */}
        <Panel className="animate-rise">
          <PanelHeader title="Profile" />

          <div className="flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:px-6">
            <Avatar
              src={identity.photo}
              initials={identity.initials}
              size="large"
            />

            <div className="grid min-w-0 flex-1 gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-[13px] font-medium text-[#4B5B5A]">
                Full name
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="
                    rounded-lg border border-[rgba(18,35,43,0.12)]
                    bg-white px-3 py-2 text-sm text-[#12232B]
                    outline-none focus:border-[#1F6F63]
                  "
                />
              </label>

              <label className="flex flex-col gap-1.5 text-[13px] font-medium text-[#4B5B5A]">
                Role
                <input
                  type="text"
                  value={identity.subtitle}
                  disabled
                  className="
                    rounded-lg border border-[rgba(18,35,43,0.12)]
                    bg-[#F3F5EF] px-3 py-2 text-sm text-[#4B5B5A]
                    outline-none
                  "
                />
              </label>
            </div>
          </div>

          <div className="flex justify-end border-t border-[rgba(18,35,43,0.07)] px-4 py-3.5 sm:px-6">
            <Button onClick={() => alert("Profile changes saved")}>
              Save changes
            </Button>
          </div>
        </Panel>

        {/* Notifications */}
        <Panel className="animate-rise" style={{ animationDelay: "80ms" }}>
          <PanelHeader title="Notifications" />

          <div>
            {notifications.map((item) => (
              <div
                key={item.id}
                className="
                  flex items-center justify-between gap-4
                  border-b border-[rgba(18,35,43,0.07)]
                  px-4 py-4 sm:px-6
                  last:border-b-0
                "
              >
                <div className="min-w-0">
                  <p className="m-0 mb-[3px] text-[14px] font-semibold text-[#12232B]">
                    {item.label}
                  </p>
                  <p className="m-0 text-[13px] text-[#4B5B5A]">
                    {item.description}
                  </p>
                </div>

                <Toggle
                  checked={item.checked}
                  onChange={() => toggleNotification(item.id)}
                />
              </div>
            ))}
          </div>
        </Panel>

        {/* Security */}
        <Panel className="animate-rise" style={{ animationDelay: "160ms" }}>
          <PanelHeader title="Security" />

          <div className="flex flex-col items-stretch gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <p className="m-0 mb-[3px] text-[14px] font-semibold text-[#12232B]">
                Password
              </p>
              <p className="m-0 text-[13px] text-[#4B5B5A]">
                Last changed 3 months ago.
              </p>
            </div>

            <Button
              variant="outline"
              size="small"
              onClick={() => alert("Password reset email sent")}
            >
              Change password
            </Button>
          </div>
        </Panel>
      </div>
    </main>
  );
}
