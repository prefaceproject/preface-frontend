import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

const Layout = ({ children, navbar = true, footer = true, white = true }) => {
  return (
    <div className="Layout">
      {navbar ? <Header className="Navbar"></Header> : null}
      <main className={`Main ${white ? "white" : ""}`}>{children}</main>
      {footer ? <Footer className="Footer"></Footer> : null}
    </div>
  );
};

export default Layout;
