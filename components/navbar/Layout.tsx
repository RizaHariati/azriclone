import React from "react";
import Navbar from "./Navbar";

interface Props {
  children?: JSX.Element | JSX.Element[];
}
const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
