import { FaFileMedical, FaDownload } from "react-icons/fa";

import Button from "../components/Button";
import StatusPill from "../components/StatusPill";
import { Panel, PanelHeader } from "../components/Panel";
import { RECORDS } from "../data/patientData";

export default function PatientRecords() {
  return (
    <main>
      <div className="mb-5 sm:mb-[26px]">
        <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
          Your health information
        </p>

        <h1 className="m-0 mb-1.5 font-['Newsreader'] text-[27px] font-semibold leading-tight sm:text-[30px] text-[#12232B]">
          Medical records
        </h1>
      </div>

      <Panel className="animate-rise">
        <PanelHeader title="All records" hint={`${RECORDS.length} items`} />

        <div>
          {RECORDS.map((record) => (
            <div
              key={record.id}
              className="
                flex flex-col items-stretch gap-3
                border-b sm:flex-row sm:items-center sm:gap-4 border-[rgba(18,35,43,0.07)]
                px-4 py-4 sm:px-6
                last:border-b-0
              "
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E4EFEA] text-[#154F46]">
                <FaFileMedical size={15} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="m-0 mb-[3px] text-[14.5px] font-semibold text-[#12232B]">
                  {record.title}
                </p>
                <p className="m-0 text-[13px] text-[#4B5B5A]">
                  {record.type} · {record.provider} · {record.date}
                </p>
              </div>

              <StatusPill status={record.status} />

              <Button
                variant="outline"
                size="small"
                icon={<FaDownload size={12} />}
                onClick={() => alert(`Downloading "${record.title}"…`)}
              >
                <span className="hidden sm:inline">Download</span>
              </Button>
            </div>
          ))}
        </div>
      </Panel>
    </main>
  );
}
