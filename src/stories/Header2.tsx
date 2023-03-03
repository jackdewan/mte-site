import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const Header2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="h-14 bg-primary px-4 lg:px-10 flex items-center fixed top-0 w-full text-white justify-between">
      <div>
        <div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden"
          >
            <Bars3Icon className="h-10" />
          </button>

          <div
            className={`${
              open ? "top-0" : "-top-full"
            } h-full w-full fixed z-10  left-0 bg-bubble-gum overflow-x-hidden transition-all duration-500 ease-in-out`}
            // style={{ transition: "0.5s" }}
          >
            <div className="relative top-1/4 w-full px-5 text-white flex flex-col space-y-8 text-3xl font-extrabold">
              <a>PRODUCTS</a>
              <a>COMPANY</a>
              <a>LEARN</a>
              <button type="button" onClick={() => setOpen(false)}>
                X
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:space-x-5">
          <a>PRODUCTS</a>
          <a>COMPANY</a>
          <a>LEARN</a>
        </div>
      </div>
      <div className="hidden lg:flex lg:space-x-5">
        <a>PRODUCTS</a>
        <a>COMPANY</a>
        <a>LEARN</a>
      </div>
    </header>
  );
};
