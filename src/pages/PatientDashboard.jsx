import {
  FaPlus,
  FaVideo,
  FaChevronRight,
  FaCommentDots,
  FaPills,
  FaCreditCard,
} from "react-icons/fa";

import Button from "../components/Button";
import Avatar from "../components/Avatar";
import { Panel, PanelHeader } from "../components/Panel";
import { PATIENT } from "../data/healthData";

export default function PatientDashboard({
  onBookAppointment,
  onNavigate,
}) {
  return (
    <main>
      {/* Page heading */}
      <div className="mb-[26px] flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
            Saturday, September 5
          </p>

          <h1 className="m-0 mb-1.5 font-['Newsreader'] text-[30px] font-semibold leading-tight text-[#12232B]">
            Good afternoon, Jordan
          </h1>
        </div>

        <Button
          icon={<FaPlus size={15} />}
          onClick={onBookAppointment}
        >
          Book an appointment
        </Button>
      </div>

      {/* Next appointment */}
      <section
        className="
          flex flex-wrap items-center justify-between gap-6
          rounded-2xl bg-[#12232B] px-7 py-[26px]
          text-[#EDEFE9] shadow-sm
        "
        style={{
          animation: "rise .5s ease both",
        }}
      >
        <div>
          <div className="mb-1.5 text-[12.5px] font-semibold text-[#7C9A78]">
            Your next visit
          </div>

          <h2 className="m-0 mb-1.5 font-['Newsreader'] text-[22px] font-semibold">
            {PATIENT.nextAppointment.reason} with{" "}
            {PATIENT.nextAppointment.provider}
          </h2>

          <p className="m-0 text-[13.5px] text-[rgba(237,239,233,0.65)]">
            {PATIENT.nextAppointment.date} at{" "}
            {PATIENT.nextAppointment.time} ·{" "}
            {PATIENT.nextAppointment.type}
          </p>
        </div>

        <div className="flex gap-2.5">
          <Button
            icon={<FaVideo size={15} />}
            onClick={() => alert("Joining video visit…")}
          >
            Join video visit
          </Button>

          <Button
            variant="outline"
            onClick={() => onNavigate("appointments")}
            className="
              border-[rgba(237,239,233,0.3)]
              bg-transparent
              text-[#EDEFE9]
              hover:border-[rgba(237,239,233,0.5)]
            "
          >
            View details
          </Button>
        </div>
      </section>

      {/* Main dashboard */}
      <div className="mt-[22px] grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        {/* LEFT */}
        <div className="flex flex-col gap-5">

          {/* Tasks */}
          <Panel>
            <PanelHeader
              title="To do"
              hint={`${PATIENT.tasks.length} open`}
            />

            <div>
              {PATIENT.tasks.map((task) => (
                <div
                  key={task.id}
                  className="
                    flex items-center gap-4
                    border-b border-[rgba(18,35,43,0.07)]
                    px-6 py-4
                    last:border-b-0
                  "
                >
                  <div className="min-w-0 flex-1">
                    <p className="m-0 text-[14.5px] font-semibold">
                      {task.text}
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    size="small"
                    onClick={() => alert("Task marked as done")}
                  >
                    Mark done
                  </Button>
                </div>
              ))}
            </div>
          </Panel>

          {/* Health snapshot */}
          <Panel>
            <PanelHeader
              title="Health snapshot"
              hint="Last 6 visits"
            />

            <div className="px-6 py-[22px]">
              <HealthChart />

              <div className="mt-3 flex flex-wrap gap-3.5">
                <div className="flex items-center gap-[7px] text-[13px] text-[#4B5B5A]">
                  <span className="h-[9px] w-[9px] rounded-sm bg-[#1F6F63]" />

                  Systolic blood pressure (mmHg)
                </div>
              </div>
            </div>
          </Panel>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-5">

          {/* Care team */}
          <Panel>
            <PanelHeader title="Care team" />

            <div>
              {PATIENT.careTeam.map((person) => (
                <div
                  key={person.name}
                  className="
                    flex items-center gap-4
                    border-b border-[rgba(18,35,43,0.07)]
                    px-6 py-4
                    last:border-b-0
                  "
                >
                  <Avatar
                    initials={person.initials}
                    size="small"
                  />

                  <div className="min-w-0">
                    <p className="m-0 mb-[3px] text-[14.5px] font-semibold">
                      {person.name}
                    </p>

                    <p className="m-0 text-[13px] text-[#4B5B5A]">
                      {person.specialty}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          {/* Quick actions */}
          <Panel>
            <PanelHeader title="Quick actions" />

            <div>
              <QuickAction
                icon={<FaCommentDots size={17} />}
                text="Message care team"
                onClick={() => onNavigate("messages")}
              />

              <QuickAction
                icon={<FaPills size={17} />}
                text="Request a prescription refill"
                onClick={() => onNavigate("medications")}
              />

              <QuickAction
                icon={<FaCreditCard size={17} />}
                text="View billing & pay a balance"
                onClick={() => onNavigate("billing")}
              />
            </div>
          </Panel>
        </div>
      </div>
    </main>
  );
}


/* =========================
   QUICK ACTION
========================= */

function QuickAction({
  icon,
  text,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex w-full items-center gap-2
        border-b border-[rgba(18,35,43,0.07)]
        bg-transparent px-6 py-4
        text-left
        last:border-b-0
        hover:bg-[#F3F5EF]
      "
    >
      <div className="flex items-center text-[#1F6F63]">
        {icon}
      </div>

      <span className="flex-1 text-sm font-medium">
        {text}
      </span>

      <FaChevronRight
        size={14}
        className="text-[#4B5B5A]"
      />
    </button>
  );
}


/* =========================
   HEALTH CHART
========================= */

function HealthChart() {
  const points = [
    [0, 65],
    [20, 57],
    [40, 61],
    [60, 48],
    [80, 52],
    [100, 40],
  ];

  const line = points
    .map(([x, y], index) => {
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <div className="w-full overflow-hidden">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="h-[160px] w-full"
      >
        <defs>
          <linearGradient
            id="healthGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#1F6F63"
              stopOpacity="0.22"
            />

            <stop
              offset="100%"
              stopColor="#1F6F63"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        <path
          d={`${line} L100 100 L0 100 Z`}
          fill="url(#healthGradient)"
        />

        <path
          d={line}
          fill="none"
          stroke="#1F6F63"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />

        {points.map(([x, y], index) => (
          <circle
            key={index}
            cx={x}
            cy={y}
            r="1.8"
            fill="#1F6F63"
          />
        ))}
      </svg>

      <div className="flex justify-between px-1 text-[10.5px] text-[#4B5B5A]">
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
        <span>Aug</span>
        <span>Sep</span>
      </div>
    </div>
  );
}