import { useRef, useState } from "react";
import { FaCalendarPlus, FaUserMd, FaShieldAlt } from "react-icons/fa";

import { FACILITY, HERO_IMAGE, HERO_FLOATING_IMAGE } from "../data/media";

const STATS = [
  { icon: FaShieldAlt, label: "24/7 emergency care" },
  { icon: FaUserMd, label: "60+ specialists on staff" },
  { icon: FaCalendarPlus, label: "Same-day video visits" },
];

export default function Hero({ onBookAppointment, onExploreCareTeam }) {
  const sceneRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const node = sceneRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const maxTilt = 6;
    setTilt({
      x: (px - 0.5) * maxTilt * 2,
      y: (0.5 - py) * maxTilt,
    });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <section
      ref={sceneRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative mb-5 overflow-hidden rounded-[22px]
        sm:mb-6 sm:rounded-[28px]
      "
      style={{ perspective: "1400px" }}
    >
      {/* Background image layer — tilts subtly with the cursor for a 3D feel */}
      <div
        className="absolute inset-0 h-full w-full transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `scale(1.12) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={HERO_IMAGE}
          alt={`${FACILITY.name} campus exterior`}
          className="h-full w-full object-cover"
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-[#0B1A20]/95 via-[#0B1A20]/55 to-[#0B1A20]/10
          "
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A20]/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div
        className="
          relative z-10 flex min-h-[380px] flex-col justify-end
          gap-5 px-5 py-7
          sm:min-h-[440px] sm:px-9 sm:py-9
          lg:min-h-[460px]
        "
      >
        <span
          className="
            w-fit rounded-full border border-white/25 bg-white/10
            px-3 py-1 text-[11.5px] font-semibold uppercase
            tracking-wide text-white/85 backdrop-blur-sm
            animate-rise
          "
        >
          {FACILITY.name} · Patient-first care since day one
        </span>

        <div className="max-w-[560px] animate-rise" style={{ animationDelay: "80ms" }}>
          <h1
            className="
              m-0 mb-2 font-['Newsreader'] text-[34px] font-semibold
              leading-[1.08] text-white
              sm:text-[46px] lg:text-[52px]
            "
          >
            {FACILITY.name}
          </h1>

          <p className="m-0 text-[14.5px] leading-relaxed text-white/80 sm:text-[16px]">
            {FACILITY.tagline} From same-day video visits to specialist
            follow-ups, your whole care team stays connected in one place.
          </p>
        </div>

        <div
          className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3 animate-rise"
          style={{ animationDelay: "160ms" }}
        >
          <button
            type="button"
            onClick={onBookAppointment}
            className="
              inline-flex items-center justify-center gap-2
              rounded-lg bg-white px-4 py-2.5
              text-sm font-semibold text-[#12232B]
              transition hover:bg-[#EDEFE9]
            "
          >
            <FaCalendarPlus size={14} />
            Book an appointment
          </button>

          <button
            type="button"
            onClick={onExploreCareTeam}
            className="
              inline-flex items-center justify-center gap-2
              rounded-lg border border-white/30 bg-white/5 px-4 py-2.5
              text-sm font-semibold text-white
              backdrop-blur-sm transition hover:border-white/55 hover:bg-white/10
            "
          >
            Meet our care team
          </button>
        </div>

        {/* Stat badges — float gently, hidden on the smallest screens to avoid clutter */}
        <div className="mt-1 hidden flex-wrap gap-2.5 sm:flex">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="
                  flex items-center gap-2 rounded-full
                  border border-white/20 bg-white/10 px-3 py-1.5
                  text-[12.5px] font-medium text-white/90
                  backdrop-blur-sm animate-float-slow
                "
                style={{ animationDelay: `${index * 350}ms` }}
              >
                <Icon size={12} />
                {stat.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating "care in action" photo card — desktop only, adds depth to the 3D scene */}
      <div
        className="
          absolute right-7 top-7 z-10 hidden w-[168px] overflow-hidden
          rounded-2xl border border-white/20 shadow-2xl
          animate-float
          lg:block
        "
        style={{ transform: `translateZ(40px)` }}
      >
        <img
          src={HERO_FLOATING_IMAGE}
          alt="A doctor consulting with a patient at Meridian Health"
          className="h-[200px] w-full object-cover"
        />
        <div className="bg-[#12232B] px-3 py-2">
          <p className="m-0 text-[11px] font-semibold text-white">
            Dr. Elena Marsh
          </p>
          <p className="m-0 text-[10.5px] text-white/60">Family Medicine</p>
        </div>
      </div>
    </section>
  );
}
