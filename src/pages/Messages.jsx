import { useMemo, useState } from "react";
import {
  FaPaperclip,
  FaPaperPlane,
  FaSearch,
  FaPhone,
  FaVideo,
  FaEllipsisV,
  FaCheck,
} from "react-icons/fa";

const INITIAL_CONVERSATIONS = [
  {
    id: 1,
    name: "Dr. Chinedu Okafor",
    specialty: "Cardiologist",
    avatar:
      "https://cardinalcarehospital.com/wp-content/uploads/2025/08/Doc-Monday.jpg",
    unread: 2,
    online: true,
    messages: [
      {
        id: 1,
        sender: "doctor",
        text: "Good afternoon. How have you been feeling since your last visit?",
        time: "10:24 AM",
      },
      {
        id: 2,
        sender: "patient",
        text: "Good afternoon doctor. I have been feeling much better.",
        time: "10:28 AM",
      },
      {
        id: 3,
        sender: "doctor",
        text: "That's good to hear. Please continue taking your medication as prescribed.",
        time: "10:31 AM",
      },
      {
        id: 4,
        sender: "doctor",
        text: "Also, remember your follow-up appointment on September 9.",
        time: "10:32 AM",
      },
    ],
  },
  {
    id: 2,
    name: "Dr. Amina Yusuf",
    specialty: "General Physician",
    avatar:
      "https://borromeohospital.com/wp-content/uploads/2022/09/DSC9484-Edit-scaled.jpg",
    unread: 0,
    online: true,
    messages: [
      {
        id: 1,
        sender: "doctor",
        text: "Your recent test results are available for review.",
        time: "Yesterday",
      },
      {
        id: 2,
        sender: "patient",
        text: "Thank you doctor. I will review them.",
        time: "Yesterday",
      },
    ],
  },
  {
    id: 3,
    name: "Dr. Adaeze Nwosu",
    specialty: "Dermatologist",
    avatar:
      "https://clinikehr.com/testimonials/dr-jethro-magaji.jpg",
    unread: 0,
    online: false,
    messages: [
      {
        id: 1,
        sender: "doctor",
        text: "Please let me know if your symptoms change.",
        time: "Sep 3",
      },
    ],
  },
];

export default function Messages() {
  const [conversations, setConversations] = useState(
    INITIAL_CONVERSATIONS
  );

  const [selectedId, setSelectedId] = useState(1);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const selectedConversation = conversations.find(
    (conversation) => conversation.id === selectedId
  );

  const filteredConversations = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return conversations;
    }

    return conversations.filter(
      (conversation) =>
        conversation.name.toLowerCase().includes(value) ||
        conversation.specialty.toLowerCase().includes(value)
    );
  }, [conversations, search]);

  const selectConversation = (id) => {
    setSelectedId(id);

    setConversations((current) =>
      current.map((conversation) =>
        conversation.id === id
          ? {
              ...conversation,
              unread: 0,
            }
          : conversation
      )
    );
  };

  const sendMessage = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || !selectedConversation) {
      return;
    }

    const newMessage = {
      id: Date.now(),
      sender: "patient",
      text: trimmedMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      }),
    };

    setConversations((current) =>
      current.map((conversation) =>
        conversation.id === selectedId
          ? {
              ...conversation,
              messages: [
                ...conversation.messages,
                newMessage,
              ],
            }
          : conversation
      )
    );

    setMessage("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <main className="w-full">
      {/* PAGE HEADER */}
      <div className="mb-6">
        <p className="mb-1 text-[13px] font-medium text-[#4B5B5A]">
          Care team communication
        </p>

        <h1 className="m-0 font-['Newsreader'] text-[32px] font-semibold leading-tight text-[#12232B]">
          Messages
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#4B5B5A]">
          Communicate directly with your doctors and care team
          about your healthcare.
        </p>
      </div>

      {/* MESSAGES */}
      <section className="grid min-h-[650px] overflow-hidden rounded-2xl border border-[rgba(18,35,43,0.08)] bg-white shadow-sm lg:grid-cols-[320px_1fr]">
        {/* CONVERSATIONS */}
        <aside className="border-b border-[rgba(18,35,43,0.08)] lg:border-b-0 lg:border-r">
          <div className="border-b border-[rgba(18,35,43,0.08)] p-4 sm:p-5">
            <div className="relative">
              <FaSearch
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71807D]"
              />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search conversations"
                className="w-full rounded-xl border border-[rgba(18,35,43,0.1)] bg-[#F7F8F5] py-2.5 pl-10 pr-3 text-sm text-[#12232B] outline-none transition focus:border-[#1F6F63] focus:bg-white"
              />
            </div>
          </div>

          <div className="max-h-[540px] overflow-y-auto">
            {filteredConversations.length === 0 ? (
              <div className="px-5 py-10 text-center">
                <p className="text-sm font-medium text-[#12232B]">
                  No conversations found
                </p>

                <p className="mt-1 text-xs text-[#71807D]">
                  Try another search.
                </p>
              </div>
            ) : (
              filteredConversations.map((conversation) => {
                const lastMessage =
                  conversation.messages[
                    conversation.messages.length - 1
                  ];

                const active =
                  conversation.id === selectedId;

                return (
                  <button
                    key={conversation.id}
                    type="button"
                    onClick={() =>
                      selectConversation(conversation.id)
                    }
                    className={`flex w-full items-start gap-3 border-b border-[rgba(18,35,43,0.06)] px-4 py-4 text-left transition sm:px-5 ${
                      active
                        ? "bg-[#E4EFEA]"
                        : "hover:bg-[#F7F8F5]"
                    }`}
                  >
                    <div className="relative shrink-0">
                      <img
                        src={conversation.avatar}
                        alt={conversation.name}
                        className="h-11 w-11 rounded-full object-cover"
                      />

                      {conversation.online && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#4F8B62]" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="truncate text-sm font-semibold text-[#12232B]">
                          {conversation.name}
                        </p>

                        <span className="shrink-0 text-[10px] text-[#71807D]">
                          {lastMessage?.time}
                        </span>
                      </div>

                      <p className="mt-0.5 text-[12px] text-[#71807D]">
                        {conversation.specialty}
                      </p>

                      <div className="mt-1 flex items-center gap-2">
                        <p className="truncate text-[12px] text-[#4B5B5A]">
                          {lastMessage?.text}
                        </p>

                        {conversation.unread > 0 && (
                          <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-[#1F6F63] px-1.5 text-[10px] font-bold text-white">
                            {conversation.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </aside>

        {/* CHAT */}
        {selectedConversation ? (
          <div className="flex min-h-[650px] min-w-0 flex-col">
            {/* CHAT HEADER */}
            <header className="flex items-center justify-between gap-3 border-b border-[rgba(18,35,43,0.08)] px-4 py-4 sm:px-6">
              <div className="flex min-w-0 items-center gap-3">
                <div className="relative shrink-0">
                  <img
                    src={selectedConversation.avatar}
                    alt={selectedConversation.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />

                  {selectedConversation.online && (
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#4F8B62]" />
                  )}
                </div>

                <div className="min-w-0">
                  <h2 className="truncate text-[15px] font-semibold text-[#12232B]">
                    {selectedConversation.name}
                  </h2>

                  <p className="text-xs text-[#71807D]">
                    {selectedConversation.online
                      ? "Online now"
                      : selectedConversation.specialty}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  onClick={() =>
                    alert("Voice call feature coming soon")
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-[#4B5B5A] transition hover:bg-[#F3F5EF] hover:text-[#1F6F63]"
                >
                  <FaPhone size={14} />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    alert("Video visit feature coming soon")
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-[#4B5B5A] transition hover:bg-[#F3F5EF] hover:text-[#1F6F63]"
                >
                  <FaVideo size={15} />
                </button>

                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-[#4B5B5A] transition hover:bg-[#F3F5EF] hover:text-[#1F6F63]"
                >
                  <FaEllipsisV size={14} />
                </button>
              </div>
            </header>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto bg-[#F7F8F5] px-4 py-5 sm:px-7">
              <div className="mx-auto max-w-3xl">
                <div className="mb-6 flex justify-center">
                  <span className="rounded-full bg-white px-3 py-1 text-[10px] font-medium text-[#71807D] shadow-sm">
                    Today
                  </span>
                </div>

                <div className="space-y-4">
                  {selectedConversation.messages.map(
                    (item) => {
                      const isPatient =
                        item.sender === "patient";

                      return (
                        <div
                          key={item.id}
                          className={`flex ${
                            isPatient
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[82%] rounded-2xl px-4 py-3 shadow-sm sm:max-w-[70%] ${
                              isPatient
                                ? "rounded-br-md bg-[#1F6F63] text-white"
                                : "rounded-bl-md bg-white text-[#12232B]"
                            }`}
                          >
                            <p className="m-0 text-[13.5px] leading-6">
                              {item.text}
                            </p>

                            <div
                              className={`mt-1.5 flex items-center justify-end gap-1 text-[10px] ${
                                isPatient
                                  ? "text-white/65"
                                  : "text-[#8A9693]"
                              }`}
                            >
                              <span>{item.time}</span>

                              {isPatient && (
                                <FaCheck size={8} />
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>

            {/* COMPOSER */}
            <div className="border-t border-[rgba(18,35,43,0.08)] bg-white p-4 sm:p-5">
              <div className="mx-auto flex max-w-3xl items-end gap-2">
                <button
                  type="button"
                  onClick={() =>
                    alert("Attachment feature coming soon")
                  }
                  className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#71807D] transition hover:bg-[#F3F5EF] hover:text-[#1F6F63]"
                >
                  <FaPaperclip size={16} />
                </button>

                <div className="flex min-w-0 flex-1 items-end rounded-xl border border-[rgba(18,35,43,0.12)] bg-[#F7F8F5] transition focus-within:border-[#1F6F63] focus-within:bg-white">
                  <textarea
                    value={message}
                    onChange={(event) =>
                      setMessage(event.target.value)
                    }
                    onKeyDown={handleKeyDown}
                    rows={1}
                    placeholder="Write a message..."
                    className="max-h-32 min-h-[42px] flex-1 resize-none bg-transparent px-3.5 py-3 text-sm text-[#12232B] outline-none placeholder:text-[#8A9693]"
                  />

                  <button
                    type="button"
                    onClick={sendMessage}
                    disabled={!message.trim()}
                    className="mb-1.5 mr-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1F6F63] text-white transition hover:bg-[#154F46] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <FaPaperPlane size={12} />
                  </button>
                </div>
              </div>

              <p className="mx-auto mt-2 max-w-3xl text-[10px] text-[#8A9693]">
                Press Enter to send. Use Shift + Enter for a new line.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex min-h-[650px] items-center justify-center">
            <div className="text-center">
              <h2 className="font-['Newsreader'] text-2xl font-semibold text-[#12232B]">
                Select a conversation
              </h2>

              <p className="mt-2 text-sm text-[#71807D]">
                Choose a member of your care team to start
                messaging.
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}