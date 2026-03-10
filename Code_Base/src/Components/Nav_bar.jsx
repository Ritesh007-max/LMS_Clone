import React from "react";
import { FiChevronDown, FiSettings } from "react-icons/fi";

function Nav_bar() {
  return (
    <>
      <div className="w-full border border-neutral-800 bg-[#0b0c10] text-white">
        <div className="flex h-14 items-center justify-between px-3 sm:px-4">
          <div className="flex min-w-0 items-center gap-3 overflow-x-auto">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-semibold">
              GR
            </div>
            <span className="shrink-0 text-base font-semibold text-white">Student</span>

            <nav className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                className="rounded-md bg-neutral-800 px-3 py-2 text-sm font-semibold text-white"
              >
                Dashboard
              </button>
              <button
                type="button"
                className="rounded-md px-3 py-2 text-sm font-semibold text-neutral-300 hover:text-white"
              >
                Attendance
              </button>
              <button
                type="button"
                className="rounded-md px-3 py-2 text-sm font-semibold text-neutral-300 hover:text-white"
              >
                Calendar
              </button>
              <button
                type="button"
                className="rounded-md px-3 py-2 text-sm font-semibold text-neutral-300 hover:text-white"
              >
                Chat
              </button>
              <button
                type="button"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-neutral-300 hover:text-white"
              >
                More <FiChevronDown className="text-xs" />
              </button>
            </nav>
          </div>

          <button
            type="button"
            className="ml-3 rounded-md p-2 text-neutral-300 hover:bg-neutral-800 hover:text-white"
            aria-label="Settings"
          >
            <FiSettings className="text-lg" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav_bar;
