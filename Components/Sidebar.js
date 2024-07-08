import React from "react";
import { useThemeContext } from "../context/themeContext";
import styled from "styled-components";

function Sidebar() {
  const theme = useThemeContext();

  return <SidebarStyled theme={theme}>Sidebar</SidebarStyled>;
}

const SidebarStyled = styled.div`
  width: ${props => props.theme.sidebarWidth};
  height: calc(100vh - 8vh);
  background-color: ${props => props.theme.colorBg2};
  position: fixed;
`;

export default Sidebar;