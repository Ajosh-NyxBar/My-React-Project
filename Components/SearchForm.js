import React, { useEffect, useState } from "react";
import { search } from "../utilts/icons";
import styled from "styled-components";
import { useThemeContext } from "../context/themeContext";
import { useStatsContext } from "../context/context";
import { API_KEY } from "../config";

function SearchForm() {
  const theme = useThemeContext();
  const {
    increasePageSize,
    searching,
    setSearching,
    searchGames,
    PopularGames,
    fetchGames,
    UpcomingGames,
    page_size,
  } = useStatsContext();

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      searchGames(searchValue);
      increasePageSize();
    }
  };

  useEffect(() => {
    if (searchValue === "") {
      setSearching(false);
      PopularGames(
        `https://api.rawg.io/api/games?key=${API_KEY}&dates=2022-09-01,2023-09-01`
      );
      fetchGames(
        `https://api.rawg.io/api/games?key=${API_KEY}&page_size=${page_size}`
      );
      UpcomingGames(
        `https://api.rawg.io/api/games?key=${API_KEY}&dates=2023-07-01,2026-07-01&ordering=-added&page_size=${page_size}`
      );
    }
  }, [searching]);

  return (
    <SearchFormStyle theme={theme}>
      <div className="input-control">
        <input
          type="text"
          placeholder="Search here ..."
          onChange={handleChange}
          value={searchValue}
        />
        <button
          type="submit"
          className="search"
          onClick={(e) => {
            e.preventDefault();
            if (searchValue) {
              searchGames(searchValue);
                increasePageSize();
            }
            console.log("increasePageSize called"); // Added log
          }}
        >
          {search}
        </button>
      </div>
    </SearchFormStyle>
  );
}

const SearchFormStyle = styled.div`
  .input-control {
    position: relative;
    input {
      background: ${(props) => props.theme.colorBg2};
      padding: 0.6rem 0.7rem;
      border-radius: ${(props) => props.theme.borderRadiusSm};
      font-family: inherit;
      width: 400px;
      transition: all 0.4s ease-in-out;
      color: ${(props) => props.theme.colorWhite};
      border: 1px solid ${(props) => props.theme.colorIcons3};
      &:active {
        width: 500px;
        border: 1px solid ${(props) => props.theme.colorIcons};
      }
      &:focus {
        width: 500px;
        border: 1px solid ${(props) => props.theme.colorIcons};
      }
      &::placeholder {
        font-weight: 500;
      }
    }

    .search {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export default SearchForm;