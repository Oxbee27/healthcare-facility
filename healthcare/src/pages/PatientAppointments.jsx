import { useState } from "react";
import { FaPlus, FaVideo, FaMapMarkerAlt } from "react-icons/fa";

import Button from "../components/Button";
import Avatar from "../components/Avatar";
import Tabs from "../components/Tabs";
import { Panel, PanelHeader } from "../components/Panel";
import { APPOINTMENTS } from "../data/patientData";

const TABS = [
  { id: "upcoming", label: "Upcoming" },
  { id: "past", label: "Past" },
];

export default function PatientAppointments({ onBookAppointment }) {
  const [tab, setTab] = useState("upcoming");
  const list = tab === "upcoming" ? APPOINTMENTS.upcoming : APPOINTMENTS.past;

  return (
    <main>
      <div className="mb-5 flex flex-col items-stretch justify-between gap-4 sm:mb-[26px] sm:flex-row sm:items-end sm:gap-5">
        <div>
          <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
            Care schedule
          </p>

          <h1 className="m-0 mb-1.5 font-['Newsreader'] text-[27px] font-semibold leading-tight sm:text-[30px] text-[#12232B]">
            Appointments
          </h1>
        </div>

        <Button icon={<FaPlus size={15} />} onClick={onBookAppointment}>
          Book an appointment
        </Button>
      </div>

      <div className="mb-4 sm:mb-5">
        <Tabs
          tabs={[
            { ...TABS[0], count: APPOINTMENTS.upcoming.length },
            { ...TABS[1], count: APPOINTMENTS.past.length },
          ]}
          active={tab}
          onChange={setTab}
        />
      </div>

      <Panel className="animate-rise">
        {list.length === 0 ? (
          <div className="px-6 py-10 text-center text-[13.5px] text-[#4B5B5A]">
            Nothing here yet.
          </div>
        ) : (
          <div>
            {list.map((appt) => (
              <div
                key={appt.id}
                className="
                  flex flex-col items-stretch gap-3
                  border-b sm:flex-row sm:items-center sm:gap-4 border-[rgba(18,35,43,0.07)]
                  px-4 py-4 sm:px-6
                  last:border-b-0
                "
              >
                <Avatar
                  src={appt.providerPhoto}
                  initials={appt.provider
                    .replace("Dr. ", "")
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                  size="normal"
                />

                <div className="min-w-0 flex-1">
                  <p className="m-0 mb-[3px] text-[14.5px] font-semibold text-[#12232B]">
                    {appt.reason}
                  </p>
                  <p className="m-0 text-[13px] text-[#4B5B5A]">
                    {appt.provider} · {appt.date} at {appt.time}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[12.5px] font-medium text-[#4B5B5A]">
                  {appt.type === "Video visit" ? (
                    <FaVideo size={13} />
                  ) : (
                    <FaMapMarkerAlt size={13} />
                  )}
                  {appt.type}
                </div>

                {tab === "upcoming" ? (
                  <div className="flex w-full gap-2 sm:w-auto">
                    {appt.type === "Video visit" && (
                      <Button
                        size="small"
                        onClick={() => alert("Joining video visit…")}
                      >
                        Join
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="small"
                      onClick={() =>
                        alert(`Rescheduling "${appt.reason}"…`)
                      }
                    >
                      Reschedule
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    size="small"
                    onClick={() => alert(`Viewing summary for "${appt.reason}"…`)}
                  >
                    View summary
                  </Button>
                )}
              </div>
            ))}
          </div>
        )}
      </Panel>
    </main>
  );
}
