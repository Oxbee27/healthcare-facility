
import { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaUserMd,
  FaVideo,
  FaHospital,
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";

const DOCTORS = [
  {
    id: 1,
    name: "Dr. Chinedu Okafor",
    specialty: "Cardiologist",
    avatar:
      "https://cardinalcarehospital.com/wp-content/uploads/2025/08/Doc-Monday.jpg",
  },
  {
    id: 2,
    name: "Dr. Amina Yusuf",
    specialty: "General Physician",
    avatar:
      "https://borromeohospital.com/wp-content/uploads/2022/09/DSC9484-Edit-scaled.jpg",
  },
  {
    id: 3,
    name: "Dr. Adaeze Nwosu",
    specialty: "Dermatologist",
    avatar:
      "https://clinikehr.com/testimonials/dr-jethro-magaji.jpg",
  },
];

const TIMES = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

export default function Appointments() {
  const [showBooking, setShowBooking] = useState(false);

  const [selectedDoctor, setSelectedDoctor] = useState(
    DOCTORS[0]
  );

  const [date, setDate] = useState("");

  const [time, setTime] = useState("");

  const [type, setType] = useState("In-person visit");

  const [reason, setReason] = useState("");

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: "Dr. Chinedu Okafor",
      specialty: "Cardiologist",
      date: "September 9, 2026",
      time: "2:00 PM",
      type: "In-person visit",
      reason: "Follow-up consultation",
      status: "Confirmed",
      avatar: DOCTORS[0].avatar,
    },
  ]);

  const openBooking = () => {
    setShowBooking(true);
  };

  const closeBooking = () => {
    setShowBooking(false);
  };

  const bookAppointment = (event) => {
    event.preventDefault();

    if (!date || !time || !reason.trim()) {
      alert("Please complete all appointment details.");
      return;
    }

    const formattedDate = new Date(
      `${date}T00:00:00`
    ).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const newAppointment = {
      id: Date.now(),
      doctor: selectedDoctor.name,
      specialty: selectedDoctor.specialty,
      date: formattedDate,
      time,
      type,
      reason: reason.trim(),
      status: "Confirmed",
      avatar: selectedDoctor.avatar,
    };

    setAppointments((current) => [
      ...current,
      newAppointment,
    ]);

    setDate("");
    setTime("");
    setReason("");
    setType("In-person visit");
    setShowBooking(false);

    alert("Your appointment has been booked successfully.");
  };

  return (
    <main className="w-full">
      {/* HEADER */}
      <div className="mb-6 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
            Your healthcare schedule
          </p>

          <h1 className="m-0 font-['Newsreader'] text-[32px] font-semibold leading-tight text-[#12232B]">
            Appointments
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#4B5B5A]">
            Schedule and manage appointments with your care team.
          </p>
        </div>

        <button
          type="button"
          onClick={openBooking}
          className="inline-flex items-center gap-2 rounded-lg bg-[#1F6F63] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#154F46]"
        >
          <FaCalendarAlt size={14} />
          Book an appointment
        </button>
      </div>

      {/* UPCOMING APPOINTMENTS */}
      <section className="mb-6 rounded-2xl border border-[rgba(18,35,43,0.08)] bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(18,35,43,0.08)] px-5 py-5 sm:px-6">
          <div>
            <h2 className="font-['Newsreader'] text-[22px] font-semibold text-[#12232B]">
              Upcoming appointments
            </h2>

            <p className="mt-1 text-xs text-[#71807D]">
              Your scheduled visits with the care team.
            </p>
          </div>

          <span className="rounded-full bg-[#E4EFEA] px-3 py-1 text-xs font-semibold text-[#1F6F63]">
            {appointments.length} scheduled
          </span>
        </div>

        <div>
          {appointments.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <FaCalendarAlt
                size={28}
                className="mx-auto text-[#9AA6A3]"
              />

              <h3 className="mt-4 text-sm font-semibold text-[#12232B]">
                No appointments yet
              </h3>

              <p className="mt-1 text-xs text-[#71807D]">
                Book your first appointment with your care team.
              </p>

              <button
                type="button"
                onClick={openBooking}
                className="mt-5 rounded-lg bg-[#1F6F63] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#154F46]"
              >
                Book an appointment
              </button>
            </div>
          ) : (
            appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex flex-col gap-5 border-b border-[rgba(18,35,43,0.07)] px-5 py-5 last:border-b-0 sm:px-6 lg:flex-row lg:items-center lg:justify-between"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <img
                    src={appointment.avatar}
                    alt={appointment.doctor}
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                  />

                  <div className="min-w-0">
                    <h3 className="truncate text-[15px] font-semibold text-[#12232B]">
                      {appointment.reason}
                    </h3>

                    <p className="mt-1 text-sm text-[#4B5B5A]">
                      {appointment.doctor} ·{" "}
                      {appointment.specialty}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#71807D]">
                      <span className="inline-flex items-center gap-1.5">
                        <FaCalendarAlt size={11} />
                        {appointment.date}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <FaClock size={11} />
                        {appointment.time}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        {appointment.type === "Video consultation" ? (
                          <FaVideo size={11} />
                        ) : (
                          <FaHospital size={11} />
                        )}

                        {appointment.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <span className="rounded-full bg-[#E4EFEA] px-3 py-1.5 text-xs font-semibold text-[#1F6F63]">
                    {appointment.status}
                  </span>

                  {appointment.type === "Video consultation" && (
                    <button
                      type="button"
                      onClick={() =>
                        alert("Video visit will open here.")
                      }
                      className="rounded-lg border border-[#1F6F63]/25 px-3 py-2 text-xs font-semibold text-[#1F6F63] transition hover:bg-[#E4EFEA]"
                    >
                      Join visit
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* BOOKING FORM */}
      {showBooking && (
        <section className="overflow-hidden rounded-2xl border border-[rgba(18,35,43,0.08)] bg-white shadow-sm">
          <div className="flex items-center gap-4 border-b border-[rgba(18,35,43,0.08)] px-5 py-5 sm:px-6">
            <button
              type="button"
              onClick={closeBooking}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#4B5B5A] transition hover:bg-[#F3F5EF] hover:text-[#1F6F63]"
              aria-label="Back"
            >
              <FaArrowLeft size={14} />
            </button>

            <div>
              <h2 className="font-['Newsreader'] text-[24px] font-semibold text-[#12232B]">
                Book an appointment
              </h2>

              <p className="mt-1 text-xs text-[#71807D]">
                Choose your doctor, preferred date and appointment
                time.
              </p>
            </div>
          </div>

          <form
            onSubmit={bookAppointment}
            className="p-5 sm:p-6"
          >
            {/* DOCTOR */}
            <div className="mb-7">
              <label className="mb-3 block text-sm font-semibold text-[#12232B]">
                Select doctor
              </label>

              <div className="grid gap-3 md:grid-cols-3">
                {DOCTORS.map((doctor) => {
                  const selected =
                    selectedDoctor.id === doctor.id;

                  return (
                    <button
                      key={doctor.id}
                      type="button"
                      onClick={() =>
                        setSelectedDoctor(doctor)
                      }
                      className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
                        selected
                          ? "border-[#1F6F63] bg-[#E4EFEA]"
                          : "border-[rgba(18,35,43,0.1)] hover:border-[#1F6F63]/40 hover:bg-[#F7F8F5]"
                      }`}
                    >
                      <img
                        src={doctor.avatar}
                        alt={doctor.name}
                        className="h-11 w-11 shrink-0 rounded-full object-cover"
                      />

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-[#12232B]">
                          {doctor.name}
                        </p>

                        <p className="mt-0.5 text-xs text-[#71807D]">
                          {doctor.specialty}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* DATE + TIME */}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="appointment-date"
                  className="mb-2 block text-sm font-semibold text-[#12232B]"
                >
                  Appointment date
                </label>

                <div className="relative">
                  <FaCalendarAlt
                    size={14}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71807D]"
                  />

                  <input
                    id="appointment-date"
                    type="date"
                    min="2026-09-07"
                    value={date}
                    onChange={(event) =>
                      setDate(event.target.value)
                    }
                    className="w-full rounded-xl border border-[rgba(18,35,43,0.12)] bg-[#F7F8F5] px-3.5 py-3 pl-10 text-sm text-[#12232B] outline-none transition focus:border-[#1F6F63] focus:bg-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="appointment-time"
                  className="mb-2 block text-sm font-semibold text-[#12232B]"
                >
                  Preferred time
                </label>

                <div className="relative">
                  <FaClock
                    size={14}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71807D]"
                  />

                  <select
                    id="appointment-time"
                    value={time}
                    onChange={(event) =>
                      setTime(event.target.value)
                    }
                    className="w-full appearance-none rounded-xl border border-[rgba(18,35,43,0.12)] bg-[#F7F8F5] px-3.5 py-3 pl-10 text-sm text-[#12232B] outline-none transition focus:border-[#1F6F63] focus:bg-white"
                    required
                  >
                    <option value="">
                      Select a time
                    </option>

                    {TIMES.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* APPOINTMENT TYPE */}
            <div className="mt-5">
              <label className="mb-3 block text-sm font-semibold text-[#12232B]">
                Appointment type
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() =>
                    setType("In-person visit")
                  }
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
                    type === "In-person visit"
                      ? "border-[#1F6F63] bg-[#E4EFEA]"
                      : "border-[rgba(18,35,43,0.1)] hover:bg-[#F7F8F5]"
                  }`}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#1F6F63]">
                    <FaHospital size={15} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#12232B]">
                      In-person visit
                    </p>

                    <p className="mt-0.5 text-xs text-[#71807D]">
                      Visit the healthcare facility
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setType("Video consultation")
                  }
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
                    type === "Video consultation"
                      ? "border-[#1F6F63] bg-[#E4EFEA]"
                      : "border-[rgba(18,35,43,0.1)] hover:bg-[#F7F8F5]"
                  }`}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#1F6F63]">
                    <FaVideo size={15} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#12232B]">
                      Video consultation
                    </p>

                    <p className="mt-0.5 text-xs text-[#71807D]">
                      Meet your doctor online
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* REASON */}
            <div className="mt-5">
              <label
                htmlFor="appointment-reason"
                className="mb-2 block text-sm font-semibold text-[#12232B]"
              >
                Reason for appointment
              </label>

              <textarea
                id="appointment-reason"
                value={reason}
                onChange={(event) =>
                  setReason(event.target.value)
                }
                rows={4}
                placeholder="Briefly describe why you would like to see the doctor..."
                className="w-full resize-none rounded-xl border border-[rgba(18,35,43,0.12)] bg-[#F7F8F5] px-3.5 py-3 text-sm text-[#12232B] outline-none transition placeholder:text-[#8A9693] focus:border-[#1F6F63] focus:bg-white"
                required
              />
            </div>

            {/* ACTIONS */}
            <div className="mt-7 flex flex-wrap justify-end gap-3 border-t border-[rgba(18,35,43,0.08)] pt-5">
              <button
                type="button"
                onClick={closeBooking}
                className="rounded-lg border border-[rgba(18,35,43,0.12)] bg-white px-4 py-2.5 text-sm font-semibold text-[#4B5B5A] transition hover:bg-[#F3F5EF]"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-[#1F6F63] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#154F46]"
              >
                <FaCheckCircle size={14} />
                Confirm appointment
              </button>
            </div>
          </form>
        </section>
      )}

      {/* DOCTORS */}
      {!showBooking && (
        <section className="rounded-2xl border border-[rgba(18,35,43,0.08)] bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5">
            <h2 className="font-['Newsreader'] text-[22px] font-semibold text-[#12232B]">
              Your care team
            </h2>

            <p className="mt-1 text-xs text-[#71807D]">
              Book directly with a member of your healthcare team.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {DOCTORS.map((doctor) => (
              <div
                key={doctor.id}
                className="rounded-xl border border-[rgba(18,35,43,0.08)] p-4 transition hover:border-[#1F6F63]/30 hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={doctor.avatar}
                    alt={doctor.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-[#12232B]">
                      {doctor.name}
                    </h3>

                    <p className="mt-0.5 text-xs text-[#71807D]">
                      {doctor.specialty}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedDoctor(doctor);
                    setShowBooking(true);
                  }}
                  className="mt-4 w-full rounded-lg border border-[#1F6F63]/25 px-3 py-2 text-xs font-semibold text-[#1F6F63] transition hover:bg-[#E4EFEA]"
                >
                  Book with doctor
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

