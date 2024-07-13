import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../context/themeContext";
import noimage from "../assets/noimage.jpg";
import Image from "next/image"; // Added import for Image from next/image

function Game({ click, values }) {
  const theme = useThemeContext();

  const { name, background_image } = values;
  return (
    <GameStyled theme={theme} onClick={click}>
      <div className="image">
        <Image
          src={!background_image ? noimage : background_image}
          alt="Game Picture"
          layout={"fill"}
          objectFit={"cover"}
          priority
          style={{
            borderRadius: theme.borderRadiusSm,
          }}
        />
      </div>
      <div className="title">
        <h1>
            {name}
        </h1>
      </div>
    </GameStyled>
  );
}

const GameStyled = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colorBg2};
  border-radius: ${(props) => props.theme.borderRadiusSm};
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  img {
    transition: all 0.3s ease-in-out;
    border-radius: ${(props) => props.theme.borderRadiusSm};
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-5px);
    img {
      transform: scale(1.1);
    }
  }
  .image {
    position: relative;
    height: 500px;
  }

  .title{
    padding: 2rem;
  }
`;
export default Game;