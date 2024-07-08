import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../context/themeContext";
import bars from "../utilts/icons"

export default function Header() {
    const theme = useThemeContext();

    return (
        <HeaderStyled theme={theme}>
          <div class="logo-con">
            <div class="h-menu">
                 <button type="button"> 
                 {bars}
                 </button>
            </div>
          </div>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    height: 8vh;
    width: 100%;
    background-color: ${props => props.theme.colorBg};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${props => props.theme.padLRSm};
    z-index: 3;
    position: fixed;
    top: 0;
`;