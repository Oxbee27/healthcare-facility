import { FaChevronRight, FaVideo, FaMapMarkerAlt } from "react-icons/fa";

import Avatar from "../components/Avatar";
import StatCard from "../components/StatCard";
import StatusPill from "../components/StatusPill";
import { Panel, PanelHeader } from "../components/Panel";
import {
  TODAY_SCHEDULE,
  PROVIDER_INBOX,
  PROVIDER_PATIENTS,
} from "../data/providerData";
import { ROLE_IDENTITY } from "../data/healthData";

export default function ProviderDashboard({ onNavigate, onSelectPatient }) {
  const identity = ROLE_IDENTITY.provider;
  const unreadCount = PROVIDER_INBOX.filter((m) => m.unread).length;

  function openChart(patientId) {
    onSelectPatient?.(patientId);
    onNavigate("chart");
  }

  return (
    <main>
      <div className="mb-5 sm:mb-[26px]">
        <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
          Saturday, September 5
        </p>

        <h1 className="m-0 mb-1.5 font-['Newsreader'] text-[27px] font-semibold leading-tight sm:text-[30px] text-[#12232B]">
          Good afternoon, {identity.name.replace("Dr. ", "")}
        </h1>
      </div>

      {/* Stats */}
      <div className="mb-5 grid grid-cols-2 gap-3 sm:mb-[22px] sm:grid-cols-4 sm:gap-4">
        <StatCard label="Today's visits" value={TODAY_SCHEDULE.length} />
        <StatCard label="Active patients" value={PROVIDER_PATIENTS.length} />
        <StatCard label="Unread messages" value={unreadCount} />
        <StatCard label="Avg. visit length" value="22 min" />
      </div>

      <div className="grid min-w-0 gap-4 sm:gap-5 lg:grid-cols-[1.5fr_1fr]">
        {/* Today's schedule */}
        <Panel className="animate-rise">
          <PanelHeader
            title="Today's schedule"
            hint={`${TODAY_SCHEDULE.length} visits`}
          />

          <div>
            {TODAY_SCHEDULE.map((appt) => (
              <button
                key={appt.id}
                type="button"
                onClick={() => openChart(appt.patientId)}
                className="
                  flex w-full flex-col items-stretch gap-3
                  border-b sm:flex-row sm:items-center sm:gap-4 border-[rgba(18,35,43,0.07)]
                  px-4 py-4 text-left sm:px-6
                  last:border-b-0
                  hover:bg-[#F3F5EF]
                "
              >
                <span className="w-[70px] shrink-0 text-[13px] font-semibold text-[#4B5B5A]">
                  {appt.time}
                </span>

                <Avatar src={appt.photo} initials={appt.patient[0]} size="normal" />

                <div className="min-w-0 flex-1">
                  <p className="m-0 mb-[3px] text-[14.5px] font-semibold text-[#12232B]">
                    {appt.patient}
                  </p>
                  <p className="m-0 flex items-center gap-1.5 text-[13px] text-[#4B5B5A]">
                    {appt.type === "Video visit" ? (
                      <FaVideo size={11} />
                    ) : (
                      <FaMapMarkerAlt size={11} />
                    )}
                    {appt.reason}
                  </p>
                </div>

                <StatusPill status={appt.status} />

                <FaChevronRight size={13} className="hidden text-[#4B5B5A] sm:block" />
              </button>
            ))}
          </div>
        </Panel>

        {/* Inbox preview */}
        <Panel className="animate-rise" style={{ animationDelay: "80ms" }}>
          <PanelHeader
            title="Recent messages"
            hint={`${unreadCount} unread`}
          />

          <div>
            {PROVIDER_INBOX.map((message) => (
              <button
                key={message.id}
                type="button"
                onClick={() => onNavigate("inbox")}
                className="
                  flex w-full items-center gap-3
                  border-b border-[rgba(18,35,43,0.07)]
                  px-4 py-3.5 text-left sm:px-6
                  last:border-b-0
                  hover:bg-[#F3F5EF]
                "
              >
                <Avatar src={message.photo} initials={message.name[0]} size="small" />

                <div className="min-w-0 flex-1">
                  <p className="m-0 mb-[2px] truncate text-[13.5px] font-semibold text-[#12232B]">
                    {message.name}
                  </p>
                  <p className="m-0 truncate text-[12.5px] text-[#4B5B5A]">
                    {message.preview}
                  </p>
                </div>

                {message.unread && (
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#1F6F63]" />
                )}
              </button>
            ))}
          </div>
        </Panel>
      </div>
    </main>
  );
}
