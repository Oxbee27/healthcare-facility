import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Panel, PanelHeader } from "./Panel";
import { CARE_IN_ACTION } from "../data/media";

const SLIDE_DURATION = 5000;

export default function CareGallery() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = CARE_IN_ACTION.length;

  useEffect(() => {
    if (paused) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return undefined;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [paused, total]);

  function goTo(nextIndex) {
    setIndex(((nextIndex % total) + total) % total);
  }

  return (
    <Panel id="care-team-gallery" className="animate-rise">
      <PanelHeader
        title="Care, in good hands"
        hint={`${index + 1} / ${total}`}
      />

      <div
        className="
          relative aspect-[16/11] w-full overflow-hidden
          sm:aspect-[21/9]
        "
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {CARE_IN_ACTION.map((slide, slideIndex) => (
          <div
            key={slide.id}
            className={`
              absolute inset-0 transition-opacity duration-700 ease-in-out
              ${slideIndex === index ? "opacity-100" : "opacity-0"}
            `}
            aria-hidden={slideIndex !== index}
          >
            <img
              src={slide.src}
              alt={slide.title}
              className="h-full w-full object-cover"
              style={
                slideIndex === index
                  ? { animation: "kenBurns 6s ease-out both" }
                  : undefined
              }
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-6">
              <p className="m-0 mb-1 text-[11px] font-semibold uppercase tracking-wide text-white/70">
                {slide.eyebrow}
              </p>
              <h3 className="m-0 mb-1 font-['Newsreader'] text-[18px] font-semibold leading-snug sm:text-[21px]">
                {slide.title}
              </h3>
              <p className="m-0 max-w-md text-[12.5px] leading-relaxed text-white/80 sm:text-[13.5px]">
                {slide.description}
              </p>
            </div>
          </div>
        ))}

        {/* Prev / next controls */}
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous slide"
          className="
            absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2
            items-center justify-center rounded-full
            bg-black/30 text-white backdrop-blur-sm
            transition hover:bg-black/50
            sm:left-3
          "
        >
          <FaChevronLeft size={12} />
        </button>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next slide"
          className="
            absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2
            items-center justify-center rounded-full
            bg-black/30 text-white backdrop-blur-sm
            transition hover:bg-black/50
            sm:right-3
          "
        >
          <FaChevronRight size={12} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 right-4 z-10 flex gap-1.5 sm:bottom-4 sm:right-6">
          {CARE_IN_ACTION.map((slide, dotIndex) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(dotIndex)}
              aria-label={`Show slide ${dotIndex + 1}: ${slide.title}`}
              className={`
                h-1.5 rounded-full transition-all
                ${dotIndex === index ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"}
              `}
            />
          ))}
        </div>
      </div>
    </Panel>
  );
}
