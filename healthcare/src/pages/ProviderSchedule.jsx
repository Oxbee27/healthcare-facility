import { FaVideo, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

import Avatar from "../components/Avatar";
import StatusPill from "../components/StatusPill";
import { Panel, PanelHeader } from "../components/Panel";
import { TODAY_SCHEDULE } from "../data/providerData";

export default function ProviderSchedule({ onSelectPatient, onNavigate }) {
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
          Schedule
        </h1>
      </div>

      <Panel className="animate-rise">
        <PanelHeader title="Today" hint={`${TODAY_SCHEDULE.length} visits`} />

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
                  {appt.reason} · {appt.type}
                </p>
              </div>

              <StatusPill status={appt.status} />

              <FaChevronRight size={13} className="hidden text-[#4B5B5A] sm:block" />
            </button>
          ))}
        </div>
      </Panel>
    </main>
  );
}
