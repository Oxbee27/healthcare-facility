import { useState } from "react";
import {
  FaCreditCard,
  FaCheckCircle,
  FaFileInvoiceDollar,
  FaArrowLeft,
  FaLock,
} from "react-icons/fa";

import Button from "../components/Button";
import { Panel, PanelHeader } from "../components/Panel";

const INITIAL_INVOICES = [
  {
    id: "INV-2026-091",
    description: "Cardiology consultation",
    date: "September 5, 2026",
    amount: 25000,
    status: "Pending",
  },
  {
    id: "INV-2026-084",
    description: "Laboratory tests",
    date: "August 28, 2026",
    amount: 18500,
    status: "Paid",
  },
  {
    id: "INV-2026-071",
    description: "General consultation",
    date: "August 12, 2026",
    amount: 15000,
    status: "Paid",
  },
];

const formatAmount = (amount) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);

export default function Billing({ onNavigate }) {
  const [invoices, setInvoices] = useState(INITIAL_INVOICES);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const outstandingBalance = invoices
    .filter((invoice) => invoice.status === "Pending")
    .reduce((total, invoice) => total + invoice.amount, 0);

  const handlePayment = () => {
    setProcessing(true);

    setTimeout(() => {
      setInvoices((currentInvoices) =>
        currentInvoices.map((invoice) =>
          invoice.status === "Pending"
            ? { ...invoice, status: "Paid" }
            : invoice
        )
      );

      setProcessing(false);
      setPaymentSuccess(true);
    }, 1200);
  };

  const closePayment = () => {
    setShowPayment(false);
    setPaymentSuccess(false);
    setProcessing(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <button
            type="button"
            onClick={() => onNavigate?.("dashboard")}
            className="mb-3 flex items-center gap-2 text-sm font-medium text-[#1F6F63] hover:underline"
          >
            <FaArrowLeft size={12} />
            Back to dashboard
          </button>

          <p className="text-sm font-semibold text-[#1F6F63]">
            Payments
          </p>

          <h1 className="mt-1 font-['Newsreader'] text-3xl font-semibold text-[#12232B]">
            Billing & payments
          </h1>

          <p className="mt-1 text-sm text-[#4B5B5A]">
            Manage your healthcare bills and payment history.
          </p>
        </div>
      </div>

      {/* Balance */}
      <section className="grid gap-5 md:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl bg-[#12232B] p-6 text-[#EDEFE9] shadow-sm sm:p-7">
          <div className="mb-5 flex items-start justify-between">
            <div>
              <p className="text-sm text-[rgba(237,239,233,0.65)]">
                Outstanding balance
              </p>

              <h2 className="mt-2 font-['Newsreader'] text-4xl font-semibold">
                {formatAmount(outstandingBalance)}
              </h2>
            </div>

            <div className="rounded-xl bg-[rgba(237,239,233,0.1)] p-3">
              <FaCreditCard size={20} />
            </div>
          </div>

          <p className="mb-5 text-sm text-[rgba(237,239,233,0.65)]">
            You can securely pay your outstanding healthcare bills online.
          </p>

          <Button
            onClick={() => setShowPayment(true)}
            disabled={outstandingBalance === 0}
          >
            {outstandingBalance === 0 ? "Balance paid" : "Pay outstanding balance"}
          </Button>
        </div>

        <Panel>
          <PanelHeader title="Payment summary" />

          <div className="space-y-4 px-5 py-5 sm:px-6">
            <div className="flex justify-between gap-4 text-sm">
              <span className="text-[#4B5B5A]">Pending bills</span>
              <span className="font-semibold">
                {invoices.filter((item) => item.status === "Pending").length}
              </span>
            </div>

            <div className="flex justify-between gap-4 text-sm">
              <span className="text-[#4B5B5A]">Paid bills</span>
              <span className="font-semibold">
                {invoices.filter((item) => item.status === "Paid").length}
              </span>
            </div>

            <div className="border-t border-[rgba(18,35,43,0.08)] pt-4">
              <div className="flex justify-between gap-4">
                <span className="text-sm text-[#4B5B5A]">
                  Total outstanding
                </span>

                <span className="font-semibold text-[#1F6F63]">
                  {formatAmount(outstandingBalance)}
                </span>
              </div>
            </div>
          </div>
        </Panel>
      </section>

      {/* Invoices */}
      <Panel>
        <PanelHeader
          title="Invoices"
          hint={`${invoices.length} invoices`}
        />

        <div>
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex flex-col gap-4 border-b border-[rgba(18,35,43,0.07)] px-5 py-5 last:border-b-0 sm:flex-row sm:items-center sm:px-6"
            >
              <div className="flex min-w-0 flex-1 items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E4EFEA] text-[#1F6F63]">
                  <FaFileInvoiceDollar />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[#12232B]">
                    {invoice.description}
                  </p>

                  <p className="mt-1 text-xs text-[#4B5B5A]">
                    {invoice.id} · {invoice.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-5 sm:justify-end">
                <div className="text-right">
                  <p className="text-sm font-semibold">
                    {formatAmount(invoice.amount)}
                  </p>

                  <span
                    className={`text-xs font-semibold ${
                      invoice.status === "Paid"
                        ? "text-[#1F6F63]"
                        : "text-[#C1622E]"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </div>

                <button
                  type="button"
                  className="text-sm font-semibold text-[#1F6F63] hover:underline"
                  onClick={() =>
                    alert(`Invoice ${invoice.id} selected`)
                  }
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      {/* Payment modal */}
      {showPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#12232B]/60 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-7">
            {paymentSuccess ? (
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E4EFEA] text-[#1F6F63]">
                  <FaCheckCircle size={30} />
                </div>

                <h2 className="mt-5 font-['Newsreader'] text-2xl font-semibold text-[#12232B]">
                  Payment successful
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#4B5B5A]">
                  Your outstanding balance of{" "}
                  <strong>{formatAmount(outstandingBalance)}</strong>{" "}
                  has been paid successfully.
                </p>

                <Button
                  className="mt-6 w-full justify-center"
                  onClick={closePayment}
                >
                  Done
                </Button>
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-['Newsreader'] text-2xl font-semibold text-[#12232B]">
                      Pay your balance
                    </h2>

                    <p className="mt-1 text-sm text-[#4B5B5A]">
                      Amount due:{" "}
                      <strong>{formatAmount(outstandingBalance)}</strong>
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closePayment}
                    className="text-2xl leading-none text-[#4B5B5A]"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold text-[#12232B]">
                    Payment method
                  </p>

                  <div className="space-y-3">
                    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-[rgba(18,35,43,0.12)] p-4">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />

                      <FaCreditCard className="text-[#1F6F63]" />

                      <span className="text-sm font-medium">
                        Debit / Credit Card
                      </span>
                    </label>

                    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-[rgba(18,35,43,0.12)] p-4">
                      <input
                        type="radio"
                        name="payment"
                        value="transfer"
                        checked={paymentMethod === "transfer"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />

                      <FaCreditCard className="text-[#1F6F63]" />

                      <span className="text-sm font-medium">
                        Bank Transfer
                      </span>
                    </label>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 rounded-lg bg-[#F3F5EF] p-3 text-xs text-[#4B5B5A]">
                  <FaLock className="shrink-0 text-[#1F6F63]" />
                  Your payment information is securely processed.
                </div>

                <Button
                  className="mt-6 w-full justify-center"
                  onClick={handlePayment}
                  disabled={processing}
                >
                  {processing
                    ? "Processing payment..."
                    : `Pay ${formatAmount(outstandingBalance)}`}
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}