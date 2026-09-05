import {
  FaCapsules,
  FaDownload,
  FaPlus,
} from "react-icons/fa";

import Button from "../components/Button";
import { PRESCRIPTIONS } from "../data/healthData";

export default function Prescriptions() {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

        <div>

          <p className="text-sm font-semibold text-brand-600">
            Medication
          </p>

          <h1 className="mt-1 text-2xl font-extrabold">
            Prescriptions
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Keep track of your current medications.
          </p>

        </div>

        <Button>
          <FaPlus />
          Request refill
        </Button>

      </div>


      {/* PRESCRIPTION CARDS */}
      <div className="grid gap-4 lg:grid-cols-2">

        {PRESCRIPTIONS.map((prescription) => (
          <div
            className="card p-5 transition hover:shadow-md"
            key={prescription.name}
          >

            <div className="flex items-start justify-between gap-4">

              <div className="flex items-center gap-3">

                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <FaCapsules />
                </div>

                <div>

                  <h3 className="font-bold">
                    {prescription.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {prescription.dose}
                  </p>

                </div>

              </div>


              <button
                type="button"
                aria-label={`Download ${prescription.name} prescription`}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <FaDownload />
              </button>

            </div>


            <p className="mt-5 text-sm text-slate-600">
              {prescription.instruction}
            </p>


            {/* REMAINING */}
            <div className="mt-5">

              <div className="mb-2 flex justify-between text-xs">

                <span className="text-slate-500">
                  Remaining
                </span>

                <b>
                  {prescription.remaining} tablets
                </b>

              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">

                <div
                  className="h-full rounded-full bg-brand-500"
                  style={{
                    width: `${Math.min(
                      prescription.remaining * 3,
                      100
                    )}%`,
                  }}
                />

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}