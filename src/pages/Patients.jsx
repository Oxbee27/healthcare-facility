import {
  FaSearch,
  FaUserPlus,
  FaChevronRight,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import Avatar from "../components/Avatar";
import { PATIENTS } from "../data/healthData";

export default function Patients({ onSelectPatient }) {
  return (
    <main className="w-full">

      {/* Header */}
      <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
            Patient management
          </p>

          <h1 className="m-0 font-['Newsreader'] text-[30px] font-semibold text-[#12232B]">
            Patients
          </h1>

          <p className="mt-2 text-sm text-[#4B5B5A]">
            View and manage patient information and health records.
          </p>
        </div>

        <button
          type="button"
          onClick={() => alert("Add patient form coming soon")}
          className="
            inline-flex items-center gap-2
            rounded-lg
            bg-[#1F6F63]
            px-4 py-2.5
            text-sm font-semibold text-white
            transition
            hover:bg-[#154F46]
          "
        >
          <FaUserPlus size={14} />
          Add patient
        </button>
      </div>

      {/* Search */}
      <div
        className="
          mb-5 flex max-w-xl items-center gap-3
          rounded-xl
          border border-[rgba(18,35,43,0.12)]
          bg-white
          px-4 py-3
        "
      >
        <FaSearch
          size={15}
          className="shrink-0 text-[#4B5B5A]"
        />

        <input
          type="text"
          placeholder="Search patients..."
          className="
            min-w-0 flex-1
            bg-transparent
            text-sm text-[#12232B]
            outline-none
            placeholder:text-[#4B5B5A]
          "
        />
      </div>

      {/* Patient count */}
      <div className="mb-3">
        <p className="text-sm text-[#4B5B5A]">
          {PATIENTS.length} patients
        </p>
      </div>

      {/* Patients */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {PATIENTS.map((patient) => (
          <button
            key={patient.id}
            type="button"
            onClick={() => onSelectPatient(patient)}
            className="
              group
              w-full
              rounded-[14px]
              border border-[rgba(18,35,43,0.12)]
              bg-white
              p-5
              text-left
              transition
              hover:-translate-y-0.5
              hover:border-[#1F6F63]
              hover:shadow-md
            "
          >
            {/* Patient */}
            <div className="flex items-center gap-4">
              <Avatar
                src={patient.avatar}
                name={patient.name}
                size="lg"
              />

              <div className="min-w-0 flex-1">
                <h2 className="truncate text-[16px] font-semibold text-[#12232B]">
                  {patient.name}
                </h2>

                <p className="mt-1 text-xs text-[#4B5B5A]">
                  Patient ID: CP-2026-{String(patient.id).padStart(3, "0")}
                </p>
              </div>

              <FaChevronRight
                size={14}
                className="
                  text-[#4B5B5A]
                  transition
                  group-hover:translate-x-1
                  group-hover:text-[#1F6F63]
                "
              />
            </div>

            {/* Details */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-[#F3F5EF] p-3">
                <p className="text-[11px] text-[#4B5B5A]">
                  Age
                </p>

                <p className="mt-1 text-sm font-semibold text-[#12232B]">
                  {patient.age} years
                </p>
              </div>

              <div className="rounded-lg bg-[#F3F5EF] p-3">
                <p className="text-[11px] text-[#4B5B5A]">
                  Blood group
                </p>

                <p className="mt-1 text-sm font-semibold text-[#12232B]">
                  {patient.bloodGroup}
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#4B5B5A]">
                <FaPhone size={11} />
                <span>{patient.phone}</span>
              </div>

              <div className="flex min-w-0 items-center gap-2 text-xs text-[#4B5B5A]">
                <FaEnvelope size={11} />
                <span className="truncate">{patient.email}</span>
              </div>
            </div>

            <div className="mt-5 border-t border-black/5 pt-4">
              <span className="text-xs font-semibold text-[#1F6F63]">
                View patient profile →
              </span>
            </div>
          </button>
        ))}
      </div>
    </main>
  );
}