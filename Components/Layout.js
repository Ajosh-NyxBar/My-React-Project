import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useStatsContext } from "../context/context";
import GameModal from "./GameModal";

function Layout({ children }) {
  const { modal_open } = useStatsContext();
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      {
        modal_open && <GameModal />
      }
      {children}
    </React.Fragment>
  );
}

export default Layout;
