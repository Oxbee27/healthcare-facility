import { FaBuilding } from "react-icons/fa";

import Button from "../components/Button";
import StatusPill from "../components/StatusPill";
import { Panel, PanelHeader } from "../components/Panel";
import { DEPARTMENTS } from "../data/adminData";

export default function AdminDepartments() {
  return (
    <main>
      <div className="mb-5 sm:mb-[26px]">
        <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
          Staffing & capacity
        </p>

        <h1 className="m-0 mb-1.5 font-['Newsreader'] text-[27px] font-semibold leading-tight sm:text-[30px] text-[#12232B]">
          Departments
        </h1>
      </div>

      <Panel className="animate-rise">
        <PanelHeader title="All departments" hint={`${DEPARTMENTS.length} total`} />

        <div>
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.id}
              className="
                flex flex-col items-stretch gap-3
                border-b sm:flex-row sm:items-center sm:gap-4 border-[rgba(18,35,43,0.07)]
                px-4 py-4 sm:px-6
                last:border-b-0
              "
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E4EFEA] text-[#154F46]">
                <FaBuilding size={15} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="m-0 mb-[3px] text-[14.5px] font-semibold text-[#12232B]">
                  {dept.name}
                </p>
                <p className="m-0 text-[13px] text-[#4B5B5A]">
                  Led by {dept.head} · {dept.staff} staff
                </p>
              </div>

              <div className="text-right text-[12.5px] text-[#4B5B5A] sm:w-[130px]">
                Patients this month
                <br />
                <span className="text-[14.5px] font-semibold text-[#12232B]">
                  {dept.patientsThisMonth}
                </span>
              </div>

              <StatusPill status={dept.status} />

              <Button
                variant="outline"
                size="small"
                onClick={() => alert(`Opening ${dept.name} department report…`)}
              >
                View report
              </Button>
            </div>
          ))}
        </div>
      </Panel>
    </main>
  );
}
