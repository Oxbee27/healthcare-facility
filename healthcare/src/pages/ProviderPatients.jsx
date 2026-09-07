import { useState } from "react";
import { FaSearch, FaChevronRight } from "react-icons/fa";

import Avatar from "../components/Avatar";
import { Panel, PanelHeader } from "../components/Panel";
import { PROVIDER_PATIENTS } from "../data/providerData";

export default function ProviderPatients({ onSelectPatient, onNavigate }) {
  const [query, setQuery] = useState("");

  const filtered = PROVIDER_PATIENTS.filter((patient) =>
    patient.name.toLowerCase().includes(query.toLowerCase())
  );

  function openChart(patientId) {
    onSelectPatient?.(patientId);
    onNavigate("chart");
  }

  return (
    <main>
      <div className="mb-5 sm:mb-[26px]">
        <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
          Your panel
        </p>

        <h1 className="m-0 mb-1.5 font-['Newsreader'] text-[27px] font-semibold leading-tight sm:text-[30px] text-[#12232B]">
          Patients
        </h1>
      </div>

      <div
        className="
          mb-4 flex max-w-[360px] items-center gap-2 rounded-[9px]
          border border-[rgba(18,35,43,0.12)] bg-white
          px-3 py-2 text-[rgba(18,35,43,0.5)]
          sm:mb-5
        "
      >
        <FaSearch size={14} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search patients…"
          className="w-full min-w-0 border-0 bg-transparent text-sm text-[#12232B] outline-none placeholder:text-[rgba(18,35,43,0.5)]"
        />
      </div>

      <Panel className="animate-rise">
        <PanelHeader title="All patients" hint={`${filtered.length} shown`} />

        <div>
          {filtered.map((patient) => (
            <button
              key={patient.id}
              type="button"
              onClick={() => openChart(patient.id)}
              className="
                flex w-full flex-col items-stretch gap-3
                border-b sm:flex-row sm:items-center sm:gap-4 border-[rgba(18,35,43,0.07)]
                px-4 py-4 text-left sm:px-6
                last:border-b-0
                hover:bg-[#F3F5EF]
              "
            >
              <Avatar src={patient.photo} initials={patient.name[0]} size="normal" />

              <div className="min-w-0 flex-1">
                <p className="m-0 mb-[3px] text-[14.5px] font-semibold text-[#12232B]">
                  {patient.name}
                </p>
                <p className="m-0 truncate text-[13px] text-[#4B5B5A]">
                  {patient.age}{patient.sex} · {patient.conditions.join(", ")}
                </p>
              </div>

              <div className="hidden text-right text-[12.5px] text-[#4B5B5A] sm:block">
                Last visit
                <br />
                {patient.lastVisit}
              </div>

              <FaChevronRight size={13} className="hidden text-[#4B5B5A] sm:block" />
            </button>
          ))}

          {filtered.length === 0 && (
            <div className="px-6 py-10 text-center text-[13.5px] text-[#4B5B5A]">
              No patients match "{query}".
            </div>
          )}
        </div>
      </Panel>
    </main>
  );
}
