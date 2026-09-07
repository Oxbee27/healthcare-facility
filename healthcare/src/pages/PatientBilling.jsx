import { FaCreditCard } from "react-icons/fa";

import Button from "../components/Button";
import StatusPill from "../components/StatusPill";
import { Panel, PanelHeader } from "../components/Panel";
import { BILLING } from "../data/patientData";

function formatCurrency(amount) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export default function PatientBilling() {
  return (
    <main>
      <div className="mb-5 sm:mb-[26px]">
        <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
          Payments & statements
        </p>

        <h1 className="m-0 mb-1.5 font-['Newsreader'] text-[27px] font-semibold leading-tight sm:text-[30px] text-[#12232B]">
          Billing
        </h1>
      </div>

      {/* Balance card */}
      <section
        className="
          mb-5 flex flex-col items-stretch justify-between gap-5
          rounded-2xl bg-[#12232B] px-5 py-5 sm:mb-[22px] sm:flex-row sm:items-center sm:gap-6 sm:px-7 sm:py-[26px]
          text-[#EDEFE9] shadow-sm animate-rise
        "
      >
        <div>
          <div className="mb-1.5 text-[12.5px] font-semibold text-[#7C9A78]">
            Current balance
          </div>

          <h2 className="m-0 mb-1.5 font-['Newsreader'] text-[26px] font-semibold leading-snug sm:text-[30px]">
            {formatCurrency(BILLING.balance)}
          </h2>

          <p className="m-0 text-[13.5px] text-[rgba(237,239,233,0.65)]">
            {BILLING.paymentMethod.brand} ending in{" "}
            {BILLING.paymentMethod.last4} · Expires{" "}
            {BILLING.paymentMethod.expiry}
          </p>
        </div>

        <Button
          icon={<FaCreditCard size={14} />}
          onClick={() => alert("Redirecting to secure payment…")}
          className="w-full sm:w-auto"
        >
          Pay balance
        </Button>
      </section>

      <Panel className="animate-rise" style={{ animationDelay: "80ms" }}>
        <PanelHeader
          title="Billing history"
          hint={`${BILLING.invoices.length} statements`}
        />

        <div>
          {BILLING.invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="
                flex flex-col items-stretch gap-3
                border-b sm:flex-row sm:items-center sm:gap-4 border-[rgba(18,35,43,0.07)]
                px-4 py-4 sm:px-6
                last:border-b-0
              "
            >
              <div className="min-w-0 flex-1">
                <p className="m-0 mb-[3px] text-[14.5px] font-semibold text-[#12232B]">
                  {invoice.description}
                </p>
                <p className="m-0 text-[13px] text-[#4B5B5A]">
                  {invoice.date}
                </p>
              </div>

              <p className="m-0 text-[14.5px] font-semibold text-[#12232B]">
                {formatCurrency(invoice.amount)}
              </p>

              <StatusPill status={invoice.status} />

              {invoice.status === "Due" && (
                <Button
                  size="small"
                  onClick={() => alert(`Paying ${formatCurrency(invoice.amount)}…`)}
                >
                  Pay now
                </Button>
              )}
            </div>
          ))}
        </div>
      </Panel>
    </main>
  );
}
