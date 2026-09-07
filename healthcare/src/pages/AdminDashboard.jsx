import { FaChevronRight } from "react-icons/fa";

import StatCard from "../components/StatCard";
import StatusPill from "../components/StatusPill";
import TrendChart from "../components/TrendChart";
import { Panel, PanelHeader } from "../components/Panel";
import { ADMIN_STATS, APPOINTMENT_VOLUME, DEPARTMENTS } from "../data/adminData";

export default function AdminDashboard({ onNavigate }) {
  return (
    <main>
      <div className="mb-5 sm:mb-[26px]">
        <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
          Saturday, September 5
        </p>

        <h1 className="m-0 mb-1.5 font-['Newsreader'] text-[27px] font-semibold leading-tight sm:text-[30px] text-[#12232B]">
          Practice overview
        </h1>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-3 sm:mb-[22px] sm:grid-cols-4 sm:gap-4">
        {ADMIN_STATS.map((stat) => (
          <StatCard
            key={stat.id}
            label={stat.label}
            value={stat.value}
            change={stat.change}
          />
        ))}
      </div>

      <div className="grid min-w-0 gap-4 sm:gap-5 lg:grid-cols-[1.5fr_1fr]">
        <Panel className="animate-rise">
          <PanelHeader
            title="Appointment volume"
            hint="Last 6 months"
          />

          <div className="px-4 py-5 sm:px-6 sm:py-[22px]">
            <TrendChart
              labels={APPOINTMENT_VOLUME.months}
              values={APPOINTMENT_VOLUME.values}
            />
          </div>
        </Panel>

        <Panel className="animate-rise" style={{ animationDelay: "80ms" }}>
          <PanelHeader title="Departments" />

          <div>
            {DEPARTMENTS.slice(0, 4).map((dept) => (
              <button
                key={dept.id}
                type="button"
                onClick={() => onNavigate("departments")}
                className="
                  flex w-full items-center justify-between gap-3
                  border-b border-[rgba(18,35,43,0.07)]
                  px-4 py-3.5 text-left sm:px-6
                  last:border-b-0
                  hover:bg-[#F3F5EF]
                "
              >
                <div className="min-w-0">
                  <p className="m-0 mb-[2px] text-[13.5px] font-semibold text-[#12232B]">
                    {dept.name}
                  </p>
                  <p className="m-0 text-[12px] text-[#4B5B5A]">
                    {dept.staff} staff
                  </p>
                </div>

                <StatusPill status={dept.status} />
              </button>
            ))}

            <button
              type="button"
              onClick={() => onNavigate("departments")}
              className="
                flex w-full items-center justify-center gap-1.5
                px-4 py-3 text-[13px] font-semibold text-[#1F6F63]
                hover:bg-[#F3F5EF]
              "
            >
              View all departments
              <FaChevronRight size={11} />
            </button>
          </div>
        </Panel>
      </div>
    </main>
  );
}
