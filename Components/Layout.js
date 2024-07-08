import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <SideBar />
      {children}
    </React.Fragment>
  );
}

export default Layout;
