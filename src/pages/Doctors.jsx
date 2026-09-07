import { useMemo, useState } from "react";
import {
  FaArrowRight,
  FaCalendarCheck,
  FaSearch,
  FaStar,
  FaVideo,
} from "react-icons/fa";

import { DOCTORS } from "../data/healthData";
import Button from "../components/Button";
import { Panel } from "../components/Panel";

const NIGERIAN_DOCTOR_IMAGES = [
  "https://cardinalcarehospital.com/wp-content/uploads/2025/08/Doc-Monday.jpg",
  "https://borromeohospital.com/wp-content/uploads/2022/09/DSC9484-Edit-scaled.jpg",
  "https://ariseafricanews.com/wp-content/uploads/2024/12/6801bd25-c397-41a3-8164-f7b8b50c75ab.jpeg",
  "https://clinikehr.com/testimonials/dr-jethro-magaji.jpg",
];

const FALLBACK_DOCTOR_IMAGE =
  "https://borromeohospital.com/wp-content/uploads/2022/09/DSC9484-Edit-scaled.jpg";

const MERIDIAN_DOCTOR_NAMES = [
  "Dr. Chinedu Okafor",
  "Dr. Amina Yusuf",
  "Dr. Adaeze Nwosu",
  "Dr. Tunde Adeyemi",
];

const FALLBACK_SPECIALTIES = [
  "Cardiology",
  "General Medicine",
  "Paediatrics",
  "Family Medicine",
];

const MERIDIAN_DOCTORS = DOCTORS.map((doctor, index) => ({
  ...doctor,
  id: doctor.id || `meridian-doctor-${index + 1}`,
  name:
    MERIDIAN_DOCTOR_NAMES[index] ||
    doctor.name ||
    `Dr. Meridian ${index + 1}`,
  specialty:
    doctor.specialty ||
    FALLBACK_SPECIALTIES[index] ||
    "General Medicine",
  image:
    NIGERIAN_DOCTOR_IMAGES[index % NIGERIAN_DOCTOR_IMAGES.length],
}));

export default function Doctors({ onBookAppointment }) {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All specialties");

  const specialties = useMemo(() => {
    const values = MERIDIAN_DOCTORS.map((doctor) => doctor.specialty).filter(
      Boolean
    );

    return ["All specialties", ...new Set(values)];
  }, []);

  const filteredDoctors = useMemo(() => {
    const query = search.trim().toLowerCase();

    return MERIDIAN_DOCTORS.filter((doctor) => {
      const matchesSearch =
        !query ||
        doctor.name.toLowerCase().includes(query) ||
        doctor.specialty.toLowerCase().includes(query);

      const matchesSpecialty =
        specialty === "All specialties" ||
        doctor.specialty === specialty;

      return matchesSearch && matchesSpecialty;
    });
  }, [search, specialty]);

  return (
    <div className="space-y-7">
      <style>{`
        @keyframes doctorsFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes doctorsFadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes doctorsFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-3px);
          }
        }

        .doctor-page-enter {
          animation: doctorsFadeIn 0.5s ease-out both;
        }

        .doctor-card-enter {
          animation: doctorsFadeUp 0.55s ease-out both;
        }

        .doctor-card-image {
          transition:
            transform 0.6s ease,
            filter 0.6s ease;
        }

        .doctor-card:hover .doctor-card-image {
          transform: scale(1.06);
          filter: saturate(1.08);
        }

        .doctor-status {
          animation: doctorsFloat 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .doctor-page-enter,
          .doctor-card-enter,
          .doctor-status {
            animation: none;
          }

          .doctor-card-image {
            transition: none;
          }
        }
      `}</style>

      {/* PAGE HEADER */}
      <div className="doctor-page-enter">
        <p className="text-sm font-semibold text-[#1F6F63]">
          Care team
        </p>

        <h1 className="mt-1 font-['Newsreader'] text-3xl font-semibold text-[#12232B] sm:text-4xl">
          Find a doctor
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#4B5B5A]">
          Connect with trusted healthcare professionals and choose the
          specialist that best fits your care needs.
        </p>
      </div>

      {/* SEARCH */}
      <Panel>
        <div className="flex flex-col gap-4 p-5 sm:p-6 lg:flex-row">
          <div className="relative flex-1">
            <FaSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A8987]"
              size={14}
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by doctor or specialty..."
              className="w-full rounded-xl border border-[rgba(18,35,43,0.12)] bg-[#F8F9F5] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#1F6F63] focus:ring-2 focus:ring-[#1F6F63]/10"
            />
          </div>

          <select
            value={specialty}
            onChange={(event) => setSpecialty(event.target.value)}
            className="rounded-xl border border-[rgba(18,35,43,0.12)] bg-[#F8F9F5] px-4 py-3 text-sm text-[#12232B] outline-none transition focus:border-[#1F6F63] focus:ring-2 focus:ring-[#1F6F63]/10"
          >
            {specialties.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </Panel>

      {/* SECTION HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-['Newsreader'] text-2xl font-semibold text-[#12232B]">
            Our specialists
          </h2>

          <p className="mt-1 text-sm text-[#687876]">
            {filteredDoctors.length} doctor
            {filteredDoctors.length !== 1 ? "s" : ""} available
          </p>
        </div>

        <div className="hidden items-center gap-2 rounded-full bg-[#E4EFEA] px-3 py-2 text-xs font-semibold text-[#1F6F63] sm:flex">
          <span className="h-2 w-2 rounded-full bg-[#1F6F63]" />
          Care available
        </div>
      </div>

      {/* DOCTORS */}
      {filteredDoctors.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredDoctors.map((doctor, index) => (
            <article
              key={doctor.id}
              className="doctor-card doctor-card-enter group overflow-hidden rounded-2xl border border-[rgba(18,35,43,0.08)] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* IMAGE ONLY */}
              <div className="relative h-60 overflow-hidden bg-[#E4EFEA]">
                <img
                  src={doctor.image}
                  alt={`${doctor.name} - Meridian healthcare`}
                  className="doctor-card-image h-full w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  onError={(event) => {
                    if (event.currentTarget.dataset.fallback === "true") {
                      return;
                    }

                    event.currentTarget.dataset.fallback = "true";
                    event.currentTarget.src = FALLBACK_DOCTOR_IMAGE;
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#12232B]/40 via-transparent to-transparent" />
              </div>

              {/* AVAILABILITY + RATING BELOW IMAGE */}
              <div className="flex items-center justify-between border-b border-[rgba(18,35,43,0.08)] px-5 py-3">
                <div className="doctor-status flex items-center gap-2 rounded-full bg-[#E4EFEA] px-3 py-1.5 text-xs font-semibold text-[#1F6F63]">
                  <span className="h-2 w-2 rounded-full bg-[#1F6F63]" />
                  Available
                </div>

                <div className="flex items-center gap-1 rounded-full bg-[#F3EADA] px-3 py-1.5 text-xs font-semibold text-[#12232B]">
                  <FaStar
                    className="text-[#C1622E]"
                    size={11}
                  />
                  4.9
                </div>
              </div>

              {/* DOCTOR DETAILS */}
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-[#7A8987]">
                  Meridian Care Team
                </p>

                <h3 className="mt-1 font-['Newsreader'] text-2xl font-semibold text-[#12232B]">
                  {doctor.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-[#1F6F63]">
                  {doctor.specialty}
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-[#687876]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E4EFEA] text-[#1F6F63]">
                      <FaCalendarCheck size={13} />
                    </div>

                    <span>Appointments available</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-[#687876]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F3EADA] text-[#C1622E]">
                      <FaVideo size={13} />
                    </div>

                    <span>Video consultations available</span>
                  </div>
                </div>

                <Button
                  className="mt-6 w-full justify-center"
                  onClick={() => onBookAppointment?.(doctor)}
                >
                  Book appointment
                  <FaArrowRight size={12} />
                </Button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <Panel>
          <div className="px-6 py-14 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E4EFEA] text-[#1F6F63]">
              <FaSearch />
            </div>

            <h3 className="mt-4 font-['Newsreader'] text-2xl font-semibold text-[#12232B]">
              No doctors found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#687876]">
              Try another doctor name or choose a different specialty.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSpecialty("All specialties");
              }}
              className="mt-5 text-sm font-semibold text-[#1F6F63] hover:underline"
            >
              Clear filters
            </button>
          </div>
        </Panel>
      )}

      {/* BOTTOM CTA */}
      <div className="rounded-2xl bg-[#12232B] p-6 text-[#EDEFE9] sm:p-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#B7D8CE]">
              Connected healthcare
            </p>

            <h3 className="mt-1 font-['Newsreader'] text-2xl font-semibold">
              Care that fits around you.
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
              Book an appointment, speak with your care team and keep your
              health journey connected in one place.
            </p>
          </div>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#B7D8CE]">
            <FaCalendarCheck size={19} />
          </div>
        </div>
      </div>
    </div>
  );
}