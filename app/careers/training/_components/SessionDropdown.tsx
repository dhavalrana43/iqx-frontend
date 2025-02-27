// app/careers/training/_components/SessionDropdown.tsx
import React, { useState } from "react";

import { arloEventType } from "@/_types/events";

const SessionDropdown = ({
  sessions,
}: {
  sessions: arloEventType["Sessions"];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!sessions?.length) return null;

  const formatDateTime = (dateStr: string) => {
    const date = new Date(dateStr);

    return date.toLocaleDateString("en-ZA", {
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <div className="relative">
      <button
        className="px-4 py-2 bg-gray-800 text-white rounded flex items-center gap-2"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Sessions
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 9l-7 7-7-7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-96 bg-gray-800 text-white rounded-md shadow-lg right-0">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="p-4 border-b border-gray-700 last:border-0"
            >
              <div className="font-medium mb-1">Session {index + 1}</div>
              <div className="text-sm text-gray-300">
                {formatDateTime(session.StartDateTime)} -{" "}
                {formatDateTime(session.EndDateTime)}
              </div>
              <div className="text-sm text-gray-300 mt-1">
                {session.Location?.Name || "Online"}
                {session.Location?.VenueName &&
                  ` - ${session.Location.VenueName}`}
                {session.Location?.City && `, ${session.Location.City}`}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SessionDropdown;
