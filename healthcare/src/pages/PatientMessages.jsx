import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

import Avatar from "../components/Avatar";
import { Panel, PanelHeader } from "../components/Panel";
import { MESSAGE_THREADS } from "../data/patientData";

export default function PatientMessages() {
  const [activeId, setActiveId] = useState(MESSAGE_THREADS[0].id);
  const [draft, setDraft] = useState("");
  const active = MESSAGE_THREADS.find((t) => t.id === activeId);

  function handleSend() {
    if (!draft.trim()) return;
    alert(`Message sent to ${active.name}: "${draft.trim()}"`);
    setDraft("");
  }

  return (
    <main>
      <div className="mb-5 sm:mb-[26px]">
        <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
          Talk to your care team
        </p>

        <h1 className="m-0 mb-1.5 font-['Newsreader'] text-[27px] font-semibold leading-tight sm:text-[30px] text-[#12232B]">
          Messages
        </h1>
      </div>

      <div className="grid min-w-0 gap-4 sm:gap-5 lg:grid-cols-[320px_1fr]">
        {/* Thread list */}
        <Panel className="animate-rise lg:h-fit">
          <PanelHeader title="Conversations" />

          <div>
            {MESSAGE_THREADS.map((thread) => {
              const isActive = thread.id === activeId;

              return (
                <button
                  key={thread.id}
                  type="button"
                  onClick={() => setActiveId(thread.id)}
                  className={`
                    flex w-full items-center gap-3
                    border-b border-[rgba(18,35,43,0.07)]
                    px-4 py-3.5 text-left sm:px-6
                    last:border-b-0
                    ${isActive ? "bg-[#F3F5EF]" : "hover:bg-[#F3F5EF]"}
                  `}
                >
                  <Avatar
                    src={thread.photo}
                    initials={thread.name
                      .replace("Dr. ", "")
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                    size="normal"
                  />

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="m-0 truncate text-[14px] font-semibold text-[#12232B]">
                        {thread.name}
                      </p>
                      <span className="shrink-0 text-[11px] text-[#4B5B5A]">
                        {thread.time}
                      </span>
                    </div>
                    <p className="m-0 truncate text-[12.5px] text-[#4B5B5A]">
                      {thread.preview}
                    </p>
                  </div>

                  {thread.unread && (
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#1F6F63]" />
                  )}
                </button>
              );
            })}
          </div>
        </Panel>

        {/* Conversation */}
        <Panel className="flex animate-rise flex-col" style={{ animationDelay: "80ms" }}>
          <PanelHeader
            title={active.name}
            hint={active.name === "Meridian Pharmacy" ? undefined : "Care team"}
          />

          <div className="flex min-h-[320px] flex-1 flex-col gap-3 overflow-y-auto px-4 py-5 sm:px-6">
            {active.messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.from === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`
                    max-w-[80%] rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed
                    ${
                      msg.from === "me"
                        ? "bg-[#1F6F63] text-white"
                        : "bg-[#F3F5EF] text-[#12232B]"
                    }
                  `}
                >
                  <p className="m-0">{msg.text}</p>
                  <p
                    className={`m-0 mt-1 text-[11px] ${
                      msg.from === "me" ? "text-white/70" : "text-[#4B5B5A]"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t border-[rgba(18,35,43,0.12)] px-4 py-3 sm:px-6">
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Write a message…"
              className="
                min-w-0 flex-1 rounded-lg border border-[rgba(18,35,43,0.12)]
                bg-white px-3 py-2 text-sm text-[#12232B]
                outline-none placeholder:text-[rgba(18,35,43,0.4)]
                focus:border-[#1F6F63]
              "
            />

            <button
              type="button"
              onClick={handleSend}
              className="
                flex h-9 w-9 shrink-0 items-center justify-center
                rounded-lg bg-[#1F6F63] text-white
                transition hover:bg-[#154F46]
              "
              aria-label="Send message"
            >
              <FaPaperPlane size={13} />
            </button>
          </div>
        </Panel>
      </div>
    </main>
  );
}
