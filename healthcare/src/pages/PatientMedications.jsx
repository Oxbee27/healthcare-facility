import { FaPills } from "react-icons/fa";

import Button from "../components/Button";
import StatusPill from "../components/StatusPill";
import { Panel, PanelHeader } from "../components/Panel";
import { PATIENT } from "../data/healthData";

export default function PatientMedications() {
  return (
    <main>
      <div className="mb-5 sm:mb-[26px]">
        <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
          Prescriptions & refills
        </p>

        <h1 className="m-0 mb-1.5 font-['Newsreader'] text-[27px] font-semibold leading-tight sm:text-[30px] text-[#12232B]">
          Medications
        </h1>
      </div>

      <Panel className="animate-rise">
        <PanelHeader
          title="Current medications"
          hint={`${PATIENT.medications.length} active`}
        />

        <div>
          {PATIENT.medications.map((med) => (
            <div
              key={med.id}
              className="
                flex flex-col items-stretch gap-3
                border-b sm:flex-row sm:items-center sm:gap-4 border-[rgba(18,35,43,0.07)]
                px-4 py-4 sm:px-6
                last:border-b-0
              "
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E4EFEA] text-[#154F46]">
                <FaPills size={15} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="m-0 mb-[3px] text-[14.5px] font-semibold text-[#12232B]">
                  {med.name} · {med.dose}
                </p>
                <p className="m-0 text-[13px] text-[#4B5B5A]">
                  {med.frequency} ·{" "}
                  {med.refillsLeft > 0
                    ? `${med.refillsLeft} refill${
                        med.refillsLeft === 1 ? "" : "s"
                      } left`
                    : "No refills left"}
                </p>
              </div>

              <StatusPill status={med.status} />

              <Button
                variant="outline"
                size="small"
                disabled={med.refillsLeft === 0}
                onClick={() => alert(`Refill requested for ${med.name}`)}
              >
                {med.refillsLeft === 0 ? "Ask provider" : "Request refill"}
              </Button>
            </div>
          ))}
        </div>
      </Panel>
    </main>
  );
}
