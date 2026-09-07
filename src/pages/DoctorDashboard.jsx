import {
  FaCalendarCheck,
  FaUsers,
  FaFileMedical,
  FaComment,
  FaArrowRight,
  FaClock,
  FaSignOutAlt,
} from "react-icons/fa";

const appointments = [
  {
    time: "09:00 AM",
    patient: "Chinedu Okafor",
    type: "General Consultation",
    status: "Confirmed",
  },
  {
    time: "10:30 AM",
    patient: "Amaka Eze",
    type: "Follow-up",
    status: "Confirmed",
  },
  {
    time: "12:00 PM",
    patient: "David Ibrahim",
    type: "Routine Checkup",
    status: "Pending",
  },
  {
    time: "02:30 PM",
    patient: "Blessing James",
    type: "Consultation",
    status: "Confirmed",
  },
];

const patients = [
  {
    name: "Chinedu Okafor",
    age: 34,
    condition: "Hypertension",
    lastVisit: "Sep 4, 2026",
  },
  {
    name: "Amaka Eze",
    age: 29,
    condition: "Diabetes",
    lastVisit: "Sep 3, 2026",
  },
  {
    name: "David Ibrahim",
    age: 41,
    condition: "Asthma",
    lastVisit: "Aug 29, 2026",
  },
  {
    name: "Blessing James",
    age: 26,
    condition: "Routine Care",
    lastVisit: "Aug 27, 2026",
  },
];

export default function DoctorDashboard({ onLogout }) {
  return (
    <div className="min-h-screen bg-[#F3F5EF] px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1500px]">

        <header className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-[#1F6F63]">
              HAVILLAH HEALTH
            </p>

            <h1 className="font-serif text-3xl font-semibold text-[#12232B] sm:text-4xl">
              Doctor Dashboard
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Good morning, Doctor. Here is your clinical overview for today.
            </p>
          </div>

          <button
            onClick={onLogout}
            className="flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#12232B] shadow-sm transition hover:bg-gray-50"
          >
            <FaSignOutAlt />
            Sign out
          </button>
        </header>

        <section className="mb-8 overflow-hidden rounded-3xl bg-[#12232B] p-6 text-white shadow-lg sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1F6F63] text-xl font-bold">
                DR
              </div>

              <div>
                <p className="text-sm text-white/60">
                  Medical Practitioner
                </p>

                <h2 className="text-2xl font-semibold">
                  Dr. Sarah Adeyemi
                </h2>

                <p className="mt-1 text-sm text-white/60">
                  General Medicine · HAVILLAH HEALTH
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-4">
              <p className="text-xs uppercase tracking-wider text-white/50">
                Today's schedule
              </p>

              <p className="mt-1 text-2xl font-bold">
                8 appointments
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            icon={<FaCalendarCheck />}
            title="Today's Appointments"
            value="8"
            subtitle="3 remaining"
          />

          <StatCard
            icon={<FaUsers />}
            title="Active Patients"
            value="124"
            subtitle="+8 this month"
          />

          <StatCard
            icon={<FaFileMedical />}
            title="Pending Results"
            value="6"
            subtitle="Needs review"
          />

          <StatCard
            icon={<FaComment />}
            title="Messages"
            value="12"
            subtitle="4 unread"
          />
        </section>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">

          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-[#12232B]">
                  Today's Appointments
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Your upcoming consultations
                </p>
              </div>

              <button className="hidden items-center gap-2 text-sm font-semibold text-[#1F6F63] sm:flex">
                View schedule
                <FaArrowRight className="text-xs" />
              </button>
            </div>

            <div className="space-y-3">
              {appointments.map((appointment) => (
                <div
                  key={`${appointment.time}-${appointment.patient}`}
                  className="flex flex-col gap-3 rounded-2xl border border-gray-100 p-4 transition hover:border-[#1F6F63]/30 hover:bg-[#F8FAF7] sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E4EFEA] text-[#1F6F63]">
                      <FaClock />
                    </div>

                    <div>
                      <p className="font-semibold text-[#12232B]">
                        {appointment.patient}
                      </p>

                      <p className="text-sm text-gray-500">
                        {appointment.type}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:text-right">
                    <div>
                      <p className="text-sm font-semibold text-[#12232B]">
                        {appointment.time}
                      </p>

                      <p
                        className={`text-xs font-medium ${
                          appointment.status === "Confirmed"
                            ? "text-[#1F6F63]"
                            : "text-[#C1622E]"
                        }`}
                      >
                        {appointment.status}
                      </p>
                    </div>

                    <button className="rounded-lg bg-[#1F6F63] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#154F46]">
                      Open
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#12232B]">
              Quick Actions
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Common clinical tasks
            </p>

            <div className="mt-6 grid gap-3">
              <QuickAction
                icon={<FaUsers />}
                title="Patient Records"
                description="Review patient information"
              />

              <QuickAction
                icon={<FaCalendarCheck />}
                title="Manage Schedule"
                description="View and manage appointments"
              />

              <QuickAction
                icon={<FaFileMedical />}
                title="Clinical Records"
                description="Review medical records"
              />

              <QuickAction
                icon={<FaComment />}
                title="Messages"
                description="Communicate with patients"
              />
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-[#12232B]">
                Recent Patients
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Patients recently seen at HAVILLAH HEALTH
              </p>
            </div>

            <button className="hidden items-center gap-2 text-sm font-semibold text-[#1F6F63] sm:flex">
              View all
              <FaArrowRight className="text-xs" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px]">
              <thead>
                <tr className="border-b border-gray-100 text-left">
                  <th className="pb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Patient
                  </th>

                  <th className="pb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Age
                  </th>

                  <th className="pb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Condition
                  </th>

                  <th className="pb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Last Visit
                  </th>

                  <th className="pb-4"></th>
                </tr>
              </thead>

              <tbody>
                {patients.map((patient) => (
                  <tr
                    key={patient.name}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="py-4 font-semibold text-[#12232B]">
                      {patient.name}
                    </td>

                    <td className="py-4 text-sm text-gray-500">
                      {patient.age}
                    </td>

                    <td className="py-4">
                      <span className="rounded-full bg-[#E4EFEA] px-3 py-1 text-xs font-medium text-[#1F6F63]">
                        {patient.condition}
                      </span>
                    </td>

                    <td className="py-4 text-sm text-gray-500">
                      {patient.lastVisit}
                    </td>

                    <td className="py-4 text-right">
                      <button className="text-sm font-semibold text-[#1F6F63]">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
}

function StatCard({ icon, title, value, subtitle }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E4EFEA] text-[#1F6F63]">
          {icon}
        </div>

        <span className="text-xs font-medium text-[#1F6F63]">
          Live
        </span>
      </div>

      <p className="mt-5 text-sm text-gray-500">
        {title}
      </p>

      <div className="mt-1 flex items-end gap-2">
        <span className="text-3xl font-bold text-[#12232B]">
          {value}
        </span>

        <span className="mb-1 text-xs text-gray-400">
          {subtitle}
        </span>
      </div>
    </div>
  );
}

function QuickAction({ icon, title, description }) {
  return (
    <button className="flex w-full items-center gap-4 rounded-2xl border border-gray-100 p-4 text-left transition hover:border-[#1F6F63]/30 hover:bg-[#F8FAF7]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E4EFEA] text-[#1F6F63]">
        {icon}
      </div>

      <div className="flex-1">
        <p className="font-semibold text-[#12232B]">
          {title}
        </p>

        <p className="mt-1 text-xs text-gray-500">
          {description}
        </p>
      </div>

      <FaArrowRight className="text-xs text-gray-400" />
    </button>
  );
}