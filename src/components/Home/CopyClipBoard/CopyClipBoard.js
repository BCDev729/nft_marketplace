/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Popover, Transition } from "@headlessui/react";
import clipCopy from "../../../assets/clip-copy.png";

export default function CopyClipBoard() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {}, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                 mx-auto hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <CopyToClipboard
                text="0x73f5a4808456f4927ee13cbe76b2b726136ce962"
                onCopy={() => {
                  setCopied(true);
                  const el = document.querySelector(".copy-text-asd");
                  const width = el.offsetWidth;
                  el.classList.add("copying");
                  el.style.width = width + "px";
                  el.textContent = "Copied!";

                  setTimeout(() => {
                    el.textContent =
                      "0x73f5a4808456f4927ee13cbe76b2b726136ce962";
                    el.classList.remove("copying");
                  }, 3000);
                }}
              >
                <div
                  type="button"
                  className="items-center mx-auto border border-white rounded-md p-1 hover:opacity-70 copy-button"
                >
                  <p className="text-white copy-text-asd">
                    <>0x73f5a4808456f4927ee13cbe76b2b726136ce962</>
                  </p>
                  <img className="w-6 copy-image" src={clipCopy} alt="" />
                </div>
              </CopyToClipboard>
            </Popover.Button>
          </>
        )}
      </Popover>
    </div>
  );
}
