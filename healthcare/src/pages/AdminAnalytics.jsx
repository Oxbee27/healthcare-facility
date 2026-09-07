import StatCard from "../components/StatCard";
import TrendChart from "../components/TrendChart";
import { Panel, PanelHeader } from "../components/Panel";
import { ADMIN_STATS, APPOINTMENT_VOLUME, DEPARTMENTS } from "../data/adminData";

export default function AdminAnalytics() {
  const totalPatientsThisMonth = DEPARTMENTS.reduce(
    (sum, dept) => sum + dept.patientsThisMonth,
    0
  );

  return (
    <main>
      <div className="mb-5 sm:mb-[26px]">
        <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
          Practice performance
        </p>

        <h1 className="m-0 mb-1.5 font-['Newsreader'] text-[27px] font-semibold leading-tight sm:text-[30px] text-[#12232B]">
          Analytics
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

      <Panel className="animate-rise">
        <PanelHeader title="Appointment volume" hint="Last 6 months" />

        <div className="px-4 py-5 sm:px-6 sm:py-[22px]">
          <TrendChart
            labels={APPOINTMENT_VOLUME.months}
            values={APPOINTMENT_VOLUME.values}
          />
        </div>
      </Panel>

      <div className="mt-5 sm:mt-[22px]">
        <Panel className="animate-rise" style={{ animationDelay: "80ms" }}>
          <PanelHeader
            title="Patients by department"
            hint={`${totalPatientsThisMonth} this month`}
          />

          <div>
            {DEPARTMENTS.map((dept) => {
              const share = Math.round(
                (dept.patientsThisMonth / totalPatientsThisMonth) * 100
              );

              return (
                <div
                  key={dept.id}
                  className="
                    flex items-center gap-4
                    border-b border-[rgba(18,35,43,0.07)]
                    px-4 py-3.5 sm:px-6
                    last:border-b-0
                  "
                >
                  <p className="m-0 w-[150px] shrink-0 truncate text-[13.5px] font-semibold text-[#12232B]">
                    {dept.name}
                  </p>

                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-[rgba(18,35,43,0.08)]">
                    <div
                      className="h-full rounded-full bg-[#1F6F63]"
                      style={{ width: `${share}%` }}
                    />
                  </div>

                  <p className="m-0 w-[80px] shrink-0 text-right text-[13px] text-[#4B5B5A]">
                    {dept.patientsThisMonth} ({share}%)
                  </p>
                </div>
              );
            })}
          </div>
        </Panel>
      </div>
    </main>
  );
}
