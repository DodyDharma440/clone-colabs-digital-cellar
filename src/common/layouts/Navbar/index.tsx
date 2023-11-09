import React from "react";
import DesktopNavbar from "./Desktop";
import MobileNavbar from "./Mobile";

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50">
      <DesktopNavbar />
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
