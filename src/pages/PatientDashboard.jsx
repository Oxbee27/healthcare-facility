import {
  FaPlus,
  FaVideo,
  FaChevronRight,
  FaCommentDots,
  FaPills,
  FaCreditCard,
  FaHeartbeat,
  FaShieldAlt,
} from "react-icons/fa";

import Button from "../components/Button";
import Avatar from "../components/Avatar";
import { Panel, PanelHeader } from "../components/Panel";
import { PATIENTS } from "../data/healthData";

const NIGERIA_HEALTHCARE_IMAGE =
  "https://www.lasuth.org.ng/clinical_department/1737581777yYAyd65UUrgHy0qUpkkyK6uw.jpg";

export default function PatientDashboard({
  patient,
  onBookAppointment,
  onNavigate,
  onSelectPatient,
}) {
  if (!patient) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-sm text-[#4B5B5A]">
          No patient selected.
        </p>
      </div>
    );
  }

  const nextAppointment = patient.nextAppointment || {
    reason: "General consultation",
    provider: "Dr. Michael Chen",
    date: "September 9, 2026",
    time: "2:00 PM",
    type: "In-person visit",
  };

  const tasks = patient.tasks || [
    {
      id: 1,
      text: "Complete your health profile",
    },
    {
      id: 2,
      text: "Review your latest test results",
    },
    {
      id: 3,
      text: "Take your prescribed medication",
    },
  ];

 const careTeam = patient.careTeam || [
  {
    name: "Dr. Chinedu Okafor",
    specialty: "Cardiologist",
    avatar:
      "https://cardinalcarehospital.com/wp-content/uploads/2025/08/Doc-Monday.jpg",
  },
  {
    name: "Dr. Amina Yusuf",
    specialty: "General Physician",
    avatar:
      "https://borromeohospital.com/wp-content/uploads/2022/09/DSC9484-Edit-scaled.jpg",
  },
  {
    name: "Dr. Adaeze Nwosu",
    specialty: "Dermatologist",
    avatar:
      "https://clinikehr.com/testimonials/dr-jethro-magaji.jpg",
  },
];
  return (
    <main className="w-full">
      {/* INTRO */}
      <div className="mb-6 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
            Saturday, September 5
          </p>

          <h1 className="m-0 mb-1.5 font-['Newsreader'] text-[30px] font-semibold leading-tight text-[#12232B]">
            Good afternoon, {patient.firstName || patient.name}
          </h1>

          <p className="text-sm text-[#4B5B5A]">
            Viewing health information for{" "}
            <span className="font-semibold text-[#12232B]">
              {patient.name}
            </span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={patient.id}
            onChange={(e) => {
              const selected = PATIENTS.find(
                (item) => item.id === Number(e.target.value)
              );

              if (selected && onSelectPatient) {
                onSelectPatient(selected);
              }
            }}
            className="max-w-full rounded-lg border border-[rgba(18,35,43,0.12)] bg-white px-3 py-2.5 text-sm font-medium text-[#12232B] outline-none transition focus:border-[#1F6F63]"
          >
            {PATIENTS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <Button
            icon={<FaPlus size={15} />}
            onClick={onBookAppointment}
          >
            Book an appointment
          </Button>
        </div>
      </div>

      {/* NIGERIAN HEALTHCARE HERO */}
      <section className="group relative mb-5 min-h-[330px] overflow-hidden rounded-3xl bg-[#12232B] shadow-sm">
        <img
          src={NIGERIA_HEALTHCARE_IMAGE}
          alt="Doctor consulting with a patient in a Nigerian hospital"
          className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#12232B] via-[#12232B]/75 to-transparent" />

        <div className="relative z-10 flex min-h-[330px] max-w-2xl flex-col justify-center px-6 py-10 sm:px-9">
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm animate-[fadeIn_0.7s_ease-out]">
            <FaHeartbeat className="text-[#8FB58B]" />
            Connected healthcare in Nigeria
          </div>

          <h2 className="max-w-xl font-['Newsreader'] text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Better care starts with{" "}
            <span className="text-[#9FC39A]">
              better connection.
            </span>
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-6 text-white/75 sm:text-[15px]">
            Manage appointments, health records, prescriptions, care-team
            communication and payments from one secure healthcare platform.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              onClick={onBookAppointment}
              icon={<FaPlus size={13} />}
            >
              Book an appointment
            </Button>

            <button
              type="button"
              onClick={() => onNavigate("records")}
              className="rounded-lg border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              View health records
            </button>
          </div>
        </div>

        <div className="absolute bottom-5 right-5 hidden rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md sm:block animate-[float_4s_ease-in-out_infinite]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F6F63]">
              <FaShieldAlt />
            </div>

            <div>
              <p className="text-xs text-white/60">
                Care status
              </p>

              <p className="text-sm font-semibold">
                Connected & protected
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT APPOINTMENT */}
      <section className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-[#12232B] px-5 py-6 text-[#EDEFE9] shadow-sm sm:px-7">
        <div className="min-w-0">
          <div className="mb-1.5 text-[12.5px] font-semibold text-[#7C9A78]">
            Your next visit
          </div>

          <h2 className="m-0 mb-1.5 font-['Newsreader'] text-[22px] font-semibold">
            {nextAppointment.reason} with{" "}
            {nextAppointment.provider}
          </h2>

          <p className="m-0 text-[13.5px] text-[rgba(237,239,233,0.65)]">
            {nextAppointment.date} at {nextAppointment.time} ·{" "}
            {nextAppointment.type}
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <Button
            icon={<FaVideo size={15} />}
            onClick={() => alert("Joining video visit…")}
          >
            Join video visit
          </Button>

          <Button
            variant="outline"
            onClick={() => onNavigate("appointments")}
            className="border-[rgba(237,239,233,0.3)] bg-transparent text-[#EDEFE9] hover:border-[rgba(237,239,233,0.5)]"
          >
            View details
          </Button>
        </div>
      </section>

      {/* MAIN DASHBOARD */}
      <div className="mt-[22px] grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        {/* LEFT */}
        <div className="flex flex-col gap-5">
          {/* TASKS */}
          <Panel>
            <PanelHeader
              title="To do"
              hint={`${tasks.length} open`}
            />

            <div>
              {tasks.map((task, index) => (
                <div
                  key={task.id}
                  className="flex flex-wrap items-center gap-4 border-b border-[rgba(18,35,43,0.07)] px-5 py-4 transition duration-300 hover:bg-[#F8F9F5] last:border-b-0 sm:px-6"
                  style={{
                    animation: `slideUp 0.45s ease-out ${index * 0.08}s both`,
                  }}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E4EFEA] text-xs font-bold text-[#1F6F63]">
                    {index + 1}
                  </div>

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

          {/* HEALTH SNAPSHOT */}
          <Panel>
            <PanelHeader
              title="Health snapshot"
              hint="Last 6 visits"
            />

            <div className="px-5 py-[22px] sm:px-6">
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
          {/* CARE TEAM */}
          <Panel>
            <PanelHeader title="Care team" />

            <div>
              {careTeam.map((person, index) => (
                <div
                  key={person.name}
                  className="flex items-center gap-4 border-b border-[rgba(18,35,43,0.07)] px-5 py-4 transition duration-300 hover:bg-[#F8F9F5] last:border-b-0 sm:px-6"
                  style={{
                    animation: `slideRight 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="transition duration-300 hover:scale-110">
                    <Avatar
                      src={person.avatar}
                      name={person.name}
                      size="sm"
                    />
                  </div>

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

          {/* QUICK ACTIONS */}
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
                onClick={() => onNavigate("prescriptions")}
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

      {/* ANIMATION STYLES */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}

function QuickAction({ icon, text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center gap-2 border-b border-[rgba(18,35,43,0.07)] bg-transparent px-5 py-4 text-left transition duration-300 hover:bg-[#F3F5EF] sm:px-6"
    >
      <div className="flex items-center text-[#1F6F63] transition duration-300 group-hover:scale-110">
        {icon}
      </div>

      <span className="flex-1 text-sm font-medium">
        {text}
      </span>

      <FaChevronRight
        size={14}
        className="text-[#4B5B5A] transition duration-300 group-hover:translate-x-1"
      />
    </button>
  );
}

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