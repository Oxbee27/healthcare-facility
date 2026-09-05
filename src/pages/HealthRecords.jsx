import {
  FaDownload,
  FaFileMedical,
  FaHeartbeat,
  FaNotesMedical,
  FaPills,
  FaStethoscope,
  FaTint,
  FaWeight,
} from "react-icons/fa";

import Avatar from "../components/Avatar";
import { PATIENT, PRESCRIPTIONS } from "../data/healthData";

const records = [
  {
    id: 1,
    title: "General Health Checkup",
    doctor: "Dr. Michael Chen",
    date: "August 28, 2026",
    type: "Consultation",
    status: "Completed",
  },
  {
    id: 2,
    title: "Cardiology Consultation",
    doctor: "Dr. Sarah Wilson",
    date: "August 15, 2026",
    type: "Specialist visit",
    status: "Completed",
  },
  {
    id: 3,
    title: "Blood Test",
    doctor: "CarePoint Laboratory",
    date: "July 30, 2026",
    type: "Laboratory",
    status: "Completed",
  },
];

const vitals = [
  {
    label: "Blood pressure",
    value: "118/76",
    unit: "mmHg",
    icon: FaHeartbeat,
  },
  {
    label: "Heart rate",
    value: "72",
    unit: "bpm",
    icon: FaHeartbeat,
  },
  {
    label: "Weight",
    value: "68",
    unit: "kg",
    icon: FaWeight,
  },
  {
    label: "Blood group",
    value: PATIENT.bloodGroup || "O+",
    unit: "",
    icon: FaTint,
  },
];

export default function HealthRecords() {
  return (
    <main className="w-full">

      {/* Header */}
      <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
            Your medical information
          </p>

          <h1 className="m-0 font-['Newsreader'] text-[30px] font-semibold leading-tight text-[#12232B]">
            Health Records
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#4B5B5A]">
            View your medical history, vital signs, medications, and
            previous consultations in one place.
          </p>
        </div>

        <button
          type="button"
          onClick={() => alert("Health records exported")}
          className="
            inline-flex items-center justify-center gap-2
            rounded-lg
            border border-[rgba(18,35,43,0.12)]
            bg-white
            px-4 py-2.5
            text-sm font-semibold
            text-[#12232B]
            transition
            hover:border-[#1F6F63]
            hover:text-[#1F6F63]
          "
        >
          <FaDownload size={14} />
          Export records
        </button>
      </div>

      {/* Patient summary */}
      <section
        className="
          mb-5 flex flex-wrap items-center justify-between gap-5
          rounded-2xl bg-[#12232B]
          px-6 py-5
          text-[#EDEFE9]
        "
      >
        <div className="flex items-center gap-4">
          <Avatar
            src={PATIENT.avatar}
            name={PATIENT.name}
            size="lg"
          />

          <div>
            <h2 className="m-0 text-lg font-semibold">
              {PATIENT.name}
            </h2>

            <p className="mt-1 text-sm text-white/60">
              Patient ID: CP-2026-001
            </p>
          </div>
        </div>

        <div className="text-left sm:text-right">
          <p className="m-0 text-xs text-white/50">
            Records updated
          </p>

          <p className="mt-1 text-sm font-medium">
            September 5, 2026
          </p>
        </div>
      </section>

      {/* Vitals */}
      <section className="mb-5">
        <div className="mb-3">
          <h2 className="m-0 text-lg font-semibold text-[#12232B]">
            Current vitals
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {vitals.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  rounded-[14px]
                  border border-[rgba(18,35,43,0.12)]
                  bg-white
                  p-5
                "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[#4B5B5A]">
                    {item.label}
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E4EFEA] text-[#1F6F63]">
                    <Icon size={15} />
                  </div>
                </div>

                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold text-[#12232B]">
                    {item.value}
                  </span>

                  {item.unit && (
                    <span className="text-xs text-[#4B5B5A]">
                      {item.unit}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main content */}
      <div className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">

        {/* Medical records */}
        <section
          className="
            overflow-hidden
            rounded-[14px]
            border border-[rgba(18,35,43,0.12)]
            bg-white
          "
        >
          <div
            className="
              flex flex-wrap items-center justify-between gap-3
              border-b border-[rgba(18,35,43,0.12)]
              px-6 py-[18px]
            "
          >
            <div>
              <h2 className="m-0 text-[17px] font-semibold text-[#12232B]">
                Medical records
              </h2>

              <p className="mt-1 text-xs text-[#4B5B5A]">
                Your recent consultations and test results
              </p>
            </div>

            <FaFileMedical
              size={18}
              className="text-[#1F6F63]"
            />
          </div>

          <div>
            {records.map((record) => (
              <div
                key={record.id}
                className="
                  flex flex-col gap-4
                  border-b border-[rgba(18,35,43,0.07)]
                  px-6 py-5
                  last:border-b-0
                  sm:flex-row sm:items-center
                "
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E4EFEA] text-[#1F6F63]">
                  {record.type === "Laboratory" ? (
                    <FaNotesMedical size={17} />
                  ) : (
                    <FaStethoscope size={17} />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="m-0 text-[14.5px] font-semibold text-[#12232B]">
                    {record.title}
                  </h3>

                  <p className="mt-1 text-[13px] text-[#4B5B5A]">
                    {record.doctor}
                  </p>

                  <p className="mt-1 text-xs text-[#4B5B5A]">
                    {record.date} · {record.type}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
                  <span className="rounded-full bg-[#E4EFEA] px-2.5 py-1 text-[11px] font-semibold text-[#1F6F63]">
                    {record.status}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      alert(`Opening ${record.title}`)
                    }
                    className="
                      text-xs font-semibold
                      text-[#1F6F63]
                      hover:underline
                    "
                  >
                    View record
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right column */}
        <div className="flex flex-col gap-5">

          {/* Medications */}
          <section
            className="
              overflow-hidden
              rounded-[14px]
              border border-[rgba(18,35,43,0.12)]
              bg-white
            "
          >
            <div
              className="
                flex items-center justify-between
                border-b border-[rgba(18,35,43,0.12)]
                px-6 py-[18px]
              "
            >
              <div>
                <h2 className="m-0 text-[17px] font-semibold text-[#12232B]">
                  Current medications
                </h2>

                <p className="mt-1 text-xs text-[#4B5B5A]">
                  Your active prescriptions
                </p>
              </div>

              <FaPills
                size={18}
                className="text-[#1F6F63]"
              />
            </div>

            <div>
              {PRESCRIPTIONS.map((medicine) => (
                <div
                  key={medicine.name}
                  className="
                    border-b border-[rgba(18,35,43,0.07)]
                    px-6 py-4
                    last:border-b-0
                  "
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="m-0 text-sm font-semibold text-[#12232B]">
                        {medicine.name}
                      </h3>

                      <p className="mt-1 text-xs text-[#4B5B5A]">
                        {medicine.dose}
                      </p>
                    </div>

                    <span className="text-xs font-medium text-[#1F6F63]">
                      {medicine.remaining} left
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-[#4B5B5A]">
                    {medicine.instruction}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Medical history */}
          <section
            className="
              rounded-[14px]
              border border-[rgba(18,35,43,0.12)]
              bg-white
              p-6
            "
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E4EFEA] text-[#1F6F63]">
                <FaNotesMedical size={16} />
              </div>

              <h2 className="m-0 text-[17px] font-semibold text-[#12232B]">
                Medical history
              </h2>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <p className="m-0 text-xs font-semibold uppercase tracking-wide text-[#4B5B5A]">
                  Allergies
                </p>

                <p className="mt-1 text-sm text-[#12232B]">
                  No known allergies
                </p>
              </div>

              <div>
                <p className="m-0 text-xs font-semibold uppercase tracking-wide text-[#4B5B5A]">
                  Conditions
                </p>

                <p className="mt-1 text-sm text-[#12232B]">
                  No active chronic conditions
                </p>
              </div>

              <div>
                <p className="m-0 text-xs font-semibold uppercase tracking-wide text-[#4B5B5A]">
                  Blood group
                </p>

                <p className="mt-1 text-sm font-semibold text-[#12232B]">
                  {PATIENT.bloodGroup || "O+"}
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}