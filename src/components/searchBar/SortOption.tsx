"use client";

import React from "react";

export default function SortOption() {
  const [isOption, setIsOption] = React.useState<number>(0);

  return (
    <div className="w-60 flex flex-col justify-start items-start">
      <label
        id="listbox-label"
        className="block text-sm/6 font-medium text-gray-900"
      >
        Sort
      </label>
      <div className="relative mt-2">
        <button
          type="button"
          className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
        >
          <span className="flex items-center">
            <span className="ml-3 block truncate">조회 순</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fill-rule="evenodd"
                d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
        <ul
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          tabIndex={-1}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          <li
            className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
            id="listbox-option-0"
            role="option"
          >
            <div className="flex items-center">
              <span className="ml-3 block truncate font-normal">좋아요 순</span>
            </div>

            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
