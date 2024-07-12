import styled from "styled-components";
import Layout from "../Components/Layout";
import MainContent from "../Components/MainContent";
import { useThemeContext } from "../context/themeContext";
import Game from "../Components/Game";
import { useStatsContext } from "../context/context";
import Button from "../Components/Button";
import { down } from "../utilts/Icons";

export default function Home() {
  const theme = useThemeContext();
  const { homepage_games, increasePageSize, fetchClickedGame, openModal, closeModal } = useStatsContext();
  console.log(theme);
  return (
    <div>
      <Layout>
        <MainContent>
          <HomepageStyled>
            <div className="home-items">
              {homepage_games.map((game) => {
                return (
                  <Game
                    key={game.id}
                    values={{ ...game }}
                    className="home-item"
                    click={() => {
                      fetchClickedGame(game.id)
                      openModal(game.id)
                    }
                    }
                  />
                );
              })}
            </div>
            <div className="load-more">
              <Button
                name={'Load More'}
                blob={'blob'}
                padding={'.7rem 1.2rem'}
                borderRad={'10px'}
                fw={'bold'}
                fs={'1.2rem'}
                icon={down}
                background={theme.colorPrimary}
                click={increasePageSize}
              />
            </div>
          </HomepageStyled>
        </MainContent>
      </Layout>
    </div>
  );
}

const HomepageStyled = styled.div`
  width: 100%;
  .home-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 2rem;
  }
`;