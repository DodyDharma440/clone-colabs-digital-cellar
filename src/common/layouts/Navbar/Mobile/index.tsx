import React, { useRef, useState } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { mergeCn } from "@/common/utils/classnames";
import { Container, CornerShape } from "@/common/components";
import LargeLogo from "../../LargeLogo";
import { navMenus } from "@/common/constants/menu";
import Link from "next/link";
import NavbarSearch from "../Search";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: Record<TransitionStatus, React.CSSProperties> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const headMenuRef = useRef<HTMLDivElement>(null);

  return (
    <div className="lg:hidden bg-body">
      <Container className="flex justify-between items-center h-[60px] relative">
        <LargeLogo className="h-[30px]" />
        <div className="flex gap-3 items-center">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={mergeCn(
              "border-[2px] border-solid  font-bold px-[10px] py-[4px] rounded-full text-[18px] transition-all duration-300",
              {
                ["bg-green-yellow border-green-yellow"]: !isOpen,
                ["bg-transparent border-black"]: isOpen,
              }
            )}
          >
            {isOpen ? "Close" : "Menu"}
          </button>

          <Transition nodeRef={headMenuRef} in={isOpen} timeout={duration}>
            {(state) => {
              return (
                <div
                  ref={headMenuRef}
                  className={mergeCn(
                    "px-2 h-[55px] mt-[5px] rounded-t-primary relative bg-transparent transition-colors duration-300",
                    {
                      ["bg-green-yellow"]: isOpen,
                    }
                  )}
                >
                  <CornerShape
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state],
                    }}
                    className={mergeCn(
                      "text-green-yellow transform rotate-180 transition-all !w-[20px] !-left-[20px]",
                      { ["opacity-0"]: !isOpen }
                    )}
                    offsetIn="left"
                    placement="bottom"
                  />

                  <div
                    className={mergeCn(
                      "flex gap-2 mt-[6px] transition-all duration-300 items-center rounded-full px-[12px] py-[5px] border-2 border-solid bg-transparent",
                      {
                        ["border-black"]: !isOpen,
                        ["border-transparent"]: isOpen,
                      }
                    )}
                  >
                    <a
                      href="https://instagram.com/colabs.aus"
                      className="hover:opacity-80"
                    >
                      <FaInstagram size={25} />
                    </a>
                    <a
                      href="https://facebook.com/colabs.aus"
                      className="hover:opacity-80"
                    >
                      <FaFacebook size={23} />
                    </a>
                  </div>
                </div>
              );
            }}
          </Transition>
        </div>
        <CornerShape className="left-[10px] sm:left-5 lg:left-[40px] -bottom-[20px] z-20" />

        <Transition nodeRef={menuRef} in={isOpen} timeout={duration}>
          {(state) => (
            <div
              ref={menuRef}
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
              className="rounded-tl-primary rounded-b-primary bg-green-yellow py-8 px-5 absolute top-full inset-x-[10px] sm:inset-x-5 lg:inset-x-[40px]"
            >
              <p className="text-center font-bold">Welcome to Colabs</p>
              <div className="mt-8">
                <NavbarSearch fixedOpen />
              </div>
              <div className="py-8">
                {[{ label: "Home", path: "/" }, ...navMenus].map(
                  ({ label, path }, index) => {
                    return (
                      <Link href={path} key={index}>
                        <div className="py-3">
                          <span className="text-[32px] font-semibold">
                            {label}
                          </span>
                        </div>
                        <hr className="border-t-zinc-600" />
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
          )}
        </Transition>
      </Container>
    </div>
  );
};

export default MobileNavbar;
