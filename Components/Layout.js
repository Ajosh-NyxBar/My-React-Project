import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      {children}
    </React.Fragment>
  );
}

export default Layout;
