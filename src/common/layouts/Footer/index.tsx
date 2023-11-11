import React from "react";
import { Container } from "@/common/components";
import {
  footerAddresses,
  footerLinks,
  socialLinks,
} from "@/common/constants/menu";
import Link from "next/link";
import LargeLogo from "../LargeLogo";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="bg-footer p-5 md:px-[30px] md:py-10 rounded-primary text-body">
          <div className="grid grid-cols-2 md:gap-[5%]">
            <div className="md:col-span-1 col-span-2">
              <div className="md:mr-[20%] mb-[50px]">
                <h5 className="font-light">
                  Co-Labs Melbourne respectfully acknowledges the Traditional
                  Custodians of the land on which we operate our business – the
                  Boon Wurrung and Wurundjeri peoples of the Kulin Nation.
                </h5>
              </div>
            </div>
            <div className="md:col-span-1 col-span-2 font-light">
              <div className="max-w-[400px]">
                <div className="grid grid-cols-2 gap-5">
                  {footerAddresses.map(({ address, phone }, index) => {
                    return (
                      <div className="col-span-1 tracking-wide" key={index}>
                        <div>{address}</div>
                        <a className="hover:underline" href={`tel:${phone}`}>
                          {phone}
                        </a>
                      </div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-2 gap-6 mt-[40px]">
                  {Object.entries(footerLinks).map(([key, value]) => {
                    return (
                      <div
                        className="col-span-1 flex flex-col justify-between"
                        key={key}
                      >
                        <ul>
                          {value.map(({ label, path }, index) => {
                            return (
                              <li key={index}>
                                <Link
                                  className="hover:underline hover:text-body text-[#aaabab] transition-all duration-800 leading-normal"
                                  href={path}
                                >
                                  {label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                        {key === "right" ? (
                          <p className="text-[#aaabab]">&copy; 2023 CoLabs</p>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-[50px] md:mt-[100px] flex flex-col-reverse gap-6 md:gap-0 md:items-center md:flex-row justify-between">
                <LargeLogo className="text-body h-8 w-[160px] md:w-[200px] md:h-10" />
                <div className="flex items-center gap-[18px]">
                  {socialLinks.map(({ icon: Icon, href }, index) => {
                    return (
                      <a
                        key={index}
                        href={href}
                        className="hover:opacity-70 transition-opacity duration-500"
                      >
                        <Icon size={26} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
