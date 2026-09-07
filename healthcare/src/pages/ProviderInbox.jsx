import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

import Avatar from "../components/Avatar";
import { Panel, PanelHeader } from "../components/Panel";
import { PROVIDER_INBOX } from "../data/providerData";

export default function ProviderInbox() {
  const [activeId, setActiveId] = useState(PROVIDER_INBOX[0].id);
  const [draft, setDraft] = useState("");
  const active = PROVIDER_INBOX.find((m) => m.id === activeId);

  function handleSend() {
    if (!draft.trim()) return;
    alert(`Reply sent to ${active.name}: "${draft.trim()}"`);
    setDraft("");
  }

  return (
    <main>
      <div className="mb-5 sm:mb-[26px]">
        <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
          Patient messages
        </p>

        <h1 className="m-0 mb-1.5 font-['Newsreader'] text-[27px] font-semibold leading-tight sm:text-[30px] text-[#12232B]">
          Inbox
        </h1>
      </div>

      <div className="grid min-w-0 gap-4 sm:gap-5 lg:grid-cols-[320px_1fr]">
        <Panel className="animate-rise lg:h-fit">
          <PanelHeader title="Conversations" />

          <div>
            {PROVIDER_INBOX.map((message) => {
              const isActive = message.id === activeId;

              return (
                <button
                  key={message.id}
                  type="button"
                  onClick={() => setActiveId(message.id)}
                  className={`
                    flex w-full items-center gap-3
                    border-b border-[rgba(18,35,43,0.07)]
                    px-4 py-3.5 text-left sm:px-6
                    last:border-b-0
                    ${isActive ? "bg-[#F3F5EF]" : "hover:bg-[#F3F5EF]"}
                  `}
                >
                  <Avatar src={message.photo} initials={message.name[0]} size="normal" />

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="m-0 truncate text-[14px] font-semibold text-[#12232B]">
                        {message.name}
                      </p>
                      <span className="shrink-0 text-[11px] text-[#4B5B5A]">
                        {message.time}
                      </span>
                    </div>
                    <p className="m-0 truncate text-[12.5px] text-[#4B5B5A]">
                      {message.preview}
                    </p>
                  </div>

                  {message.unread && (
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#1F6F63]" />
                  )}
                </button>
              );
            })}
          </div>
        </Panel>

        <Panel className="flex animate-rise flex-col" style={{ animationDelay: "80ms" }}>
          <PanelHeader title={active.name} hint="Patient" />

          <div className="flex min-h-[320px] flex-1 flex-col gap-3 px-4 py-5 sm:px-6">
            <div className="max-w-[80%] rounded-2xl bg-[#F3F5EF] px-4 py-2.5 text-[13.5px] leading-relaxed text-[#12232B]">
              <p className="m-0">{active.message}</p>
              <p className="m-0 mt-1 text-[11px] text-[#4B5B5A]">
                {active.time}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 border-t border-[rgba(18,35,43,0.12)] px-4 py-3 sm:px-6">
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={`Reply to ${active.name.split(" ")[0]}…`}
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
              aria-label="Send reply"
            >
              <FaPaperPlane size={13} />
            </button>
          </div>
        </Panel>
      </div>
    </main>
  );
}
