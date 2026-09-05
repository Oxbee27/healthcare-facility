import {
  FaDownload,
  FaHeartbeat,
  FaTint,
  FaWeight,
  FaThermometerHalf,
  FaStethoscope,
  FaPills,
  FaNotesMedical,
} from "react-icons/fa";

import Avatar from "../components/Avatar";

export default function HealthRecords({ patient }) {
  if (!patient) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-sm text-[#4B5B5A]">
          No patient selected.
        </p>
      </div>
    );
  }

  const vitals = [
    {
      label: "Blood pressure",
      value: patient.vitals?.bloodPressure || "N/A",
      icon: FaHeartbeat,
    },
    {
      label: "Heart rate",
      value: patient.vitals?.heartRate || "N/A",
      icon: FaHeartbeat,
    },
    {
      label: "Temperature",
      value: patient.vitals?.temperature || "N/A",
      icon: FaThermometerHalf,
    },
    {
      label: "Weight",
      value: patient.vitals?.weight || "N/A",
      icon: FaWeight,
    },
  ];

  return (
    <main className="w-full">
      {/* Header */}
      <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
            Medical information
          </p>

          <h1 className="font-['Newsreader'] text-[30px] font-semibold text-[#12232B]">
            Health Records
          </h1>

          <p className="mt-2 text-sm text-[#4B5B5A]">
            Complete medical history and health information
          </p>
        </div>

        <button
          type="button"
          onClick={() => alert("Download records coming soon")}
          className="
            inline-flex items-center gap-2
            rounded-lg
            border border-[rgba(18,35,43,0.12)]
            bg-white
            px-4 py-2.5
            text-sm font-semibold
            text-[#12232B]
            hover:border-[#1F6F63]
          "
        >
          <FaDownload size={14} />
          Download records
        </button>
      </div>

      {/* Patient profile */}
      <section className="mb-5 rounded-[14px] border border-black/10 bg-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-4">
          <Avatar
            src={patient.avatar}
            name={patient.name}
            size="lg"
          />

          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-semibold text-[#12232B]">
              {patient.name}
            </h2>

            <p className="mt-1 text-xs text-[#4B5B5A]">
              Patient ID: CP-2026-
              {String(patient.id).padStart(3, "0")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-[#F3F5EF] px-4 py-3">
              <p className="text-[11px] text-[#4B5B5A]">
                Age
              </p>

              <p className="mt-1 text-sm font-semibold text-[#12232B]">
                {patient.age}
              </p>
            </div>

            <div className="rounded-lg bg-[#F3F5EF] px-4 py-3">
              <p className="text-[11px] text-[#4B5B5A]">
                Blood group
              </p>

              <p className="mt-1 text-sm font-semibold text-[#12232B]">
                {patient.bloodGroup}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vitals */}
      <section className="mb-6">
        <h2 className="mb-3 text-[17px] font-semibold text-[#12232B]">
          Vital signs
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {vitals.map((vital) => {
            const Icon = vital.icon;

            return (
              <div
                key={vital.label}
                className="rounded-[14px] border border-black/10 bg-white p-5"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#E4EFEA] text-[#1F6F63]">
                  <Icon size={16} />
                </div>

                <p className="text-xs text-[#4B5B5A]">
                  {vital.label}
                </p>

                <p className="mt-1 text-xl font-semibold text-[#12232B]">
                  {vital.value}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Medical history */}
      <section className="mb-6 overflow-hidden rounded-[14px] border border-black/10 bg-white">
        <div className="border-b border-black/10 px-5 py-[18px] sm:px-6">
          <h2 className="text-[17px] font-semibold text-[#12232B]">
            Medical history
          </h2>

          <p className="mt-1 text-xs text-[#4B5B5A]">
            Previous consultations, tests and diagnoses
          </p>
        </div>

        <div>
          {patient.medicalHistory?.map((record) => (
            <div
              key={record.title}
              className="border-b border-black/5 px-5 py-5 last:border-0 sm:px-6"
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E4EFEA] text-[#1F6F63]">
                  <FaNotesMedical size={17} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap justify-between gap-2">
                    <h3 className="text-sm font-semibold text-[#12232B]">
                      {record.title}
                    </h3>

                    <span className="text-xs text-[#4B5B5A]">
                      {record.date}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-[#1F6F63]">
                    {record.type} · {record.doctor}
                  </p>

                  <p className="mt-3 text-sm text-[#4B5B5A]">
                    <span className="font-semibold text-[#12232B]">
                      Diagnosis:
                    </span>{" "}
                    {record.diagnosis}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#4B5B5A]">
                    {record.notes}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Allergies and conditions */}
      <div className="mb-6 grid gap-5 lg:grid-cols-2">
        <section className="rounded-[14px] border border-black/10 bg-white p-5 sm:p-6">
          <h2 className="mb-4 text-[17px] font-semibold text-[#12232B]">
            Allergies
          </h2>

          <div className="flex flex-wrap gap-2">
            {patient.allergies?.map((allergy) => (
              <span
                key={allergy}
                className="rounded-full bg-[#FFF1E9] px-3 py-1.5 text-xs font-semibold text-[#C1622E]"
              >
                {allergy}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-[14px] border border-black/10 bg-white p-5 sm:p-6">
          <h2 className="mb-4 text-[17px] font-semibold text-[#12232B]">
            Medical conditions
          </h2>

          <div className="flex flex-wrap gap-2">
            {patient.conditions?.map((condition) => (
              <span
                key={condition}
                className="rounded-full bg-[#E4EFEA] px-3 py-1.5 text-xs font-semibold text-[#1F6F63]"
              >
                {condition}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Medications */}
      <section className="overflow-hidden rounded-[14px] border border-black/10 bg-white">
        <div className="border-b border-black/10 px-5 py-[18px] sm:px-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[17px] font-semibold text-[#12232B]">
                Current medications
              </h2>

              <p className="mt-1 text-xs text-[#4B5B5A]">
                Active prescriptions for {patient.firstName}
              </p>
            </div>

            <FaPills
              size={18}
              className="text-[#1F6F63]"
            />
          </div>
        </div>

        <div>
          {patient.medications?.map((medication) => (
            <div
              key={medication.name}
              className="flex flex-wrap items-center gap-4 border-b border-black/5 px-5 py-4 last:border-0 sm:px-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F3F5EF] text-[#1F6F63]">
                <FaPills size={16} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-[#12232B]">
                  {medication.name}
                </h3>

                <p className="mt-1 text-xs text-[#4B5B5A]">
                  {medication.dose} · {medication.instruction}
                </p>
              </div>

              <span className="rounded-full bg-[#E4EFEA] px-3 py-1.5 text-xs font-semibold text-[#1F6F63]">
                {medication.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}