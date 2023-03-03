import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface MobileMenuProps {
  iconSize?: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (arg0: boolean) => void;
}

const plusStyles = "text-red";

export const MobileMenu = ({
  iconSize = "h-6",
  isMenuOpen,
  setIsMenuOpen,
}: MobileMenuProps) => {
  return (
    <div>
      <div
        className={`fixed left-0 bg-aqua-600 h-full w-full z-10 transition-all ease-in-out duration-500 text-white ${
          isMenuOpen ? "top-0 mt-14 lg:mt-20" : "-top-full"
        }`}
      >
        <button
          type="button"
          className="text-3xl mb-5 font-bold absolute p-10"
          onClick={() => setIsMenuOpen(false)}
        >
          X
        </button>
        <div className="p-10 relative top-20 w-full">
          <div className="flex flex-col space-y-10 text-[2.5rem] font-extrabold">
            <a
              className={`${
                isMenuOpen ? "opacity-100" : "opacity-0"
              } transition-all ease-in delay-200`}
            >
              Products <span>+</span>
            </a>
            <a
              className={`${
                isMenuOpen ? "opacity-100" : "opacity-0"
              } transition-all ease-in delay-[300ms]`}
            >
              Company <span>+</span>
            </a>
            <a
              className={`${
                isMenuOpen ? "opacity-100" : "opacity-0"
              } transition-all ease-in delay-[400ms]`}
            >
              Learn <span>+</span>
            </a>
            <a
              className={`${
                isMenuOpen ? "opacity-100" : "opacity-0"
              } transition-all ease-in delay-[500ms]`}
            >
              Community <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
