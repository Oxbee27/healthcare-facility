import {
  FaCalendarCheck,
  FaSearch,
  FaStar,
} from "react-icons/fa";

import Avatar from "../components/Avatar";
import Button from "../components/Button";
import { DOCTORS } from "../data/healthData";

export default function Doctors({
  onBookAppointment,
}) {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>

        <p className="text-sm font-semibold text-brand-600">
          Care team
        </p>

        <h1 className="mt-1 text-2xl font-extrabold">
          Find a doctor
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Connect with trusted healthcare professionals.
        </p>

      </div>


      {/* SEARCH */}
      <div className="card flex flex-col gap-3 p-4 sm:flex-row">

        <div className="flex flex-1 items-center gap-3 rounded-xl bg-slate-100 px-4 py-3 text-slate-400">

          <FaSearch />

          <input
            type="text"
            placeholder="Search by doctor or specialty"
            className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
          />

        </div>

        <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500">

          <option>
            All specialties
          </option>

          <option>
            Cardiology
          </option>

          <option>
            General Medicine
          </option>

          <option>
            Dermatology
          </option>

          <option>
            Neurology
          </option>

        </select>

      </div>


      {/* DOCTOR CARDS */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

        {DOCTORS.map((doctor) => (
          <div
            className="card p-5 transition hover:-translate-y-1 hover:shadow-lg"
            key={doctor.id}
          >

            <div className="flex items-start justify-between">

              <Avatar
                src={doctor.avatar}
                name={doctor.name}
                size="lg"
              />

              <span className="flex items-center gap-1 text-sm font-semibold text-amber-500">
                <FaStar />
                {doctor.rating}
              </span>

            </div>


            <h3 className="mt-4 font-bold">
              {doctor.name}
            </h3>

            <p className="text-sm font-medium text-brand-600">
              {doctor.specialty}
            </p>

            <p className="mt-2 text-xs text-slate-500">
              {doctor.experience} experience
            </p>


            <Button
              onClick={onBookAppointment}
              className="mt-5 w-full"
            >
              <FaCalendarCheck />
              Book appointment
            </Button>

          </div>
        ))}

      </div>

    </div>
  );
}