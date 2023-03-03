import { useState, useEffect } from "react";

import {
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  backgroundColor?: string;
  logo?: string;
}

const logo1 = "/mte.png";
const logo2 = "/mte2.png";

export const Header = ({
  backgroundColor = "primary",
  logo = logo1,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition > scrollTop) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
      // setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    setTimeout(() => {
      window.addEventListener("scroll", onScroll);
    }, 1e3);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const iconSize = "h-6";

  return (
    <header>
      <div
        className={`bg-aqua-600 text-white fixed top-0 w-full z-20 transition-all delay-1000 ${
          isMenuOpen ? "border-b-[.005rem] border-aqua-100" : "border-0"
        }`}
      >
        <div className="px-5 lg:px-10">
          <div className="flex items-center justify-between h-14 lg:h-20">
            <div className="flex flex-1">
              <div className="lg:hidden">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Bars3Icon className={`${iconSize}`} />
                </button>
              </div>
              <div className="hidden lg:inline-block space-x-6 font-bold italic">
                <a>PRODUCTS</a>
                <a>COMPANY</a>
                <a>LEARN</a>
              </div>
            </div>
            <div
              className={`flex absolute top-1/2 left-1/2 transform -translate-x-1/2 transition ease-in delay-50 duration-150 ${
                scrolling
                  ? "-translate-y-[2.2rem] scale-75 lg:-translate-y-[2.8rem]"
                  : "-translate-y-1/4"
              } `}
            >
              <a href="#" className="p-1.5">
                <span className="sr-only">Your Company</span>

                <img
                  className={`${
                    isMenuOpen ? "h-0" : "h-20"
                  } lg:h-24 transition-all delay-150 duration-200 ease-in-out`}
                  src={logo}
                  alt=""
                />
              </a>
            </div>
            <div className="flex flex-1 justify-end space-x-5">
              <a>
                <MapPinIcon className={`${iconSize}`} />
              </a>
              {/* <a>
              <UserIcon className={`${iconSize}`} />
            </a> */}
              <a>
                <ShoppingCartIcon className={`${iconSize}`} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu
        iconSize={iconSize}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </header>
  );
};
