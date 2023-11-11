import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { CornerShape, Container } from "@/common/components";
import { navMenus } from "@/common/constants/menu";
import { mergeCn } from "@/common/utils/classnames";
import LargeLogo from "../../LargeLogo";
import NavbarSearch from "../Search";

const DesktopNavbar = () => {
  const router = useRouter();

  return (
    <>
      <div className="h-[10px] bg-body w-full lg:block hidden" />
      <Container className="hidden lg:flex">
        <div className="pr-[30px] pb-[12px] pl-[15px] bg-body rounded-br-[30px] relative">
          <p className="text-xs mb-[6px] -translate-y-[1px]">Naarm/Melbourne</p>
          <LargeLogo className="h-[43px]" />
          <CornerShape placement="top" offsetIn="right" />
          <CornerShape placement="left" offsetIn="bottom" />
        </div>
        <div className="flex justify-between items-center p-3 w-full">
          <div className="bg-body bg-opacity-70 pb-[18px] pt-4 rounded-full pl-10 pr-7 backdrop-blur-md shadow-linear">
            <ul className="flex gap-[30px] items-center">
              {navMenus.map(({ label, path }, index) => {
                const isActive = router.pathname === path;

                return (
                  <li key={index}>
                    <Link
                      href={path}
                      className={mergeCn("hover:text-nav-hover font-light", {
                        ["font-normal"]: isActive,
                      })}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex gap-2 items-center">
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
              </li>
            </ul>
          </div>
          <NavbarSearch />
        </div>
      </Container>
    </>
  );
};

export default DesktopNavbar;
