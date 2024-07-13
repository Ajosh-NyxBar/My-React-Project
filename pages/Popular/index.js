import React from "react";
import Layout from "../../Components/Layout";
import MainContent from "../../Components/MainContent";
import styled from "styled-components";
import { useStatsContext } from "../../context/context";
import Game from "../../Components/Game";
import Button from "../../Components/Button";
import { down } from "../../utilts/icons";
import { useThemeContext } from "../../context/themeContext";

function popular() {
  const theme = useThemeContext();
  const {
    popular_games,
    fetchClickedGame,
    openModal,
    searching,
    games,
    loading,
    increasePageSize,
  } = useStatsContext();
  return (
    <Layout>
      <MainContent>
        <PopularStyles>
          <div className="items">
            {popular_games.map((game) => {
              return (
                <Game
                  key={game.id}
                  values={{ ...game }}
                  click={() => {
                    fetchClickedGame(game.id);
                    openModal(game.id);
                  }}
                />
              );
            })}
          </div>
          <div className="loadmore">
            <Button
              name={"Load More"}
              blob={"blob"}
              padding={".7rem 1.2rem"}
              borderRad={"10px"}
              fw={"bold"}
              fs={"1.2rem"}
              icon={down}
              background={theme.colorPrimary}
              click={increasePageSize}
            />
          </div>
        </PopularStyles>
      </MainContent>
    </Layout>
  );
}

const PopularStyles = styled.div`
  width: 100%;
  .items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
  }
  .loadmore {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
`;

export default popular;
