import {
  FaCalendarAlt,
  FaClock,
  FaPlus,
  FaVideo,
} from "react-icons/fa";

import Avatar from "../components/Avatar";
import Button from "../components/Button";
import { APPOINTMENTS } from "../data/healthData";

export default function Appointments({
  onBookAppointment,
}) {
  return (
    <div className="space-y-6">

      {/* PAGE HEADER */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

        <div>

          <p className="text-sm font-semibold text-brand-600">
            My care
          </p>

          <h1 className="mt-1 text-2xl font-extrabold">
            Appointments
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your upcoming and previous appointments.
          </p>

        </div>

        <Button onClick={onBookAppointment}>
          <FaPlus />
          Book appointment
        </Button>

      </div>


      {/* APPOINTMENTS */}
      <div className="grid gap-4">

        {APPOINTMENTS.map((appointment) => (
          <div
            key={appointment.id}
            className="card p-5 sm:p-6"
          >

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

              {/* DOCTOR */}
              <div className="flex items-center gap-4">

                <Avatar
                  src={appointment.avatar}
                  name={appointment.doctor}
                  size="lg"
                />

                <div>

                  <h3 className="font-bold">
                    {appointment.doctor}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {appointment.specialty}
                  </p>

                  <span className="mt-2 inline-block rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                    {appointment.status}
                  </span>

                </div>

              </div>


              {/* DETAILS */}
              <div className="flex flex-wrap gap-3 text-sm text-slate-600">

                <span className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2">
                  <FaCalendarAlt />
                  {appointment.date}
                </span>

                <span className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2">
                  <FaClock />
                  {appointment.time}
                </span>

                {appointment.type.includes("Video") && (
                  <Button>
                    <FaVideo />
                    Join
                  </Button>
                )}

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}