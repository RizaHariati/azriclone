import { useSession } from "next-auth/react";
import React from "react";
import LogoSearch from "./LogoSearch";
import NavLinks from "./NavLinks";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <LogoSearch />
        <NavLinks />
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
