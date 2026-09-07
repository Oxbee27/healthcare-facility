import { FaArrowLeft, FaHeartbeat, FaWeight, FaTachometerAlt } from "react-icons/fa";

import Avatar from "../components/Avatar";
import Button from "../components/Button";
import { Panel, PanelHeader } from "../components/Panel";
import { PROVIDER_PATIENTS } from "../data/providerData";

export default function ProviderPatientChart({ patientId, onNavigate }) {
  const patient =
    PROVIDER_PATIENTS.find((p) => p.id === patientId) || PROVIDER_PATIENTS[0];

  return (
    <main>
      <button
        type="button"
        onClick={() => onNavigate("patients")}
        className="mb-4 flex items-center gap-2 text-[13.5px] font-semibold text-[#4B5B5A] hover:text-[#12232B]"
      >
        <FaArrowLeft size={12} />
        Back to patients
      </button>

      {/* Patient header */}
      <section
        className="
          mb-5 flex flex-col items-stretch gap-4
          rounded-2xl border border-[rgba(18,35,43,0.12)] bg-white px-5 py-5
          sm:mb-[22px] sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6
          animate-rise
        "
      >
        <div className="flex items-center gap-4">
          <Avatar src={patient.photo} initials={patient.name[0]} size="large" />

          <div>
            <h1 className="m-0 mb-1 font-['Newsreader'] text-[22px] font-semibold text-[#12232B] sm:text-[25px]">
              {patient.name}
            </h1>
            <p className="m-0 text-[13.5px] text-[#4B5B5A]">
              {patient.age}{patient.sex} · {patient.conditions.join(", ")}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="small"
            onClick={() => alert(`Messaging ${patient.name}…`)}
          >
            Message
          </Button>
          <Button
            size="small"
            onClick={() => alert(`Adding a note for ${patient.name}…`)}
          >
            Add note
          </Button>
        </div>
      </section>

      <div className="grid min-w-0 gap-4 sm:gap-5 lg:grid-cols-[1fr_1.4fr]">
        {/* Vitals + meds */}
        <div className="flex flex-col gap-4 sm:gap-5">
          <Panel className="animate-rise" style={{ animationDelay: "80ms" }}>
            <PanelHeader title="Latest vitals" hint={patient.vitals.updated} />

            <div className="grid grid-cols-3 gap-3 px-4 py-5 sm:px-6">
              <VitalStat
                icon={FaTachometerAlt}
                label="Blood pressure"
                value={patient.vitals.bp}
              />
              <VitalStat
                icon={FaHeartbeat}
                label="Heart rate"
                value={patient.vitals.hr}
              />
              <VitalStat
                icon={FaWeight}
                label="Weight"
                value={patient.vitals.weight}
              />
            </div>
          </Panel>

          <Panel className="animate-rise" style={{ animationDelay: "140ms" }}>
            <PanelHeader
              title="Medications"
              hint={`${patient.medications.length} active`}
            />

            <div>
              {patient.medications.length === 0 ? (
                <div className="px-6 py-6 text-center text-[13.5px] text-[#4B5B5A]">
                  No active medications on file.
                </div>
              ) : (
                patient.medications.map((med) => (
                  <div
                    key={med.name}
                    className="
                      flex items-center justify-between gap-3
                      border-b border-[rgba(18,35,43,0.07)]
                      px-4 py-3.5 sm:px-6
                      last:border-b-0
                    "
                  >
                    <p className="m-0 text-[14px] font-semibold text-[#12232B]">
                      {med.name} · {med.dose}
                    </p>
                    <p className="m-0 text-[13px] text-[#4B5B5A]">
                      {med.frequency}
                    </p>
                  </div>
                ))
              )}
            </div>
          </Panel>
        </div>

        {/* Notes */}
        <Panel className="animate-rise" style={{ animationDelay: "100ms" }}>
          <PanelHeader title="Visit notes" hint={`${patient.notes.length} entries`} />

          <div>
            {patient.notes.length === 0 ? (
              <div className="px-6 py-10 text-center text-[13.5px] text-[#4B5B5A]">
                No visit notes yet — this looks like a new patient.
              </div>
            ) : (
              patient.notes.map((note, index) => (
                <div
                  key={index}
                  className="
                    border-b border-[rgba(18,35,43,0.07)]
                    px-4 py-4 sm:px-6
                    last:border-b-0
                  "
                >
                  <div className="mb-1.5 flex items-center justify-between gap-2">
                    <p className="m-0 text-[13.5px] font-semibold text-[#12232B]">
                      {note.author}
                    </p>
                    <span className="text-[12px] text-[#4B5B5A]">
                      {note.date}
                    </span>
                  </div>
                  <p className="m-0 text-[13.5px] leading-relaxed text-[#4B5B5A]">
                    {note.text}
                  </p>
                </div>
              ))
            )}
          </div>
        </Panel>
      </div>
    </main>
  );
}

function VitalStat({ icon: Icon, label, value }) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#E4EFEA] text-[#154F46]">
        <Icon size={14} />
      </div>
      <p className="m-0 mb-0.5 text-[15px] font-semibold text-[#12232B]">
        {value}
      </p>
      <p className="m-0 text-[11.5px] text-[#4B5B5A]">{label}</p>
    </div>
  );
}
