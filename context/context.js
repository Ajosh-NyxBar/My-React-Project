import React, { useContext, useEffect, useReducer } from "react";
import { BEGIN_DATA_FETCH, COLLAPSE_MENU, DATA_FETCH_FAILURE, DATA_FETCH_SUCCESS, INCREASE_PAGE_SIZE } from "../utilts/action";
import reducer from "../reducers/statsReducer";
import { API_KEY } from "../config";
import axios from "axios";

const StatsContext = React.createContext();

const baseUrl = `https://api.rawg.io/api/games?key=${API_KEY}`;



export const ContextProvider = ({ children }) => {
  const initialState = {
    collapsed: false,
    page_size: 12,
    loading: false,
    homepage_games: [], // Pastikan ini adalah array
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchGames = async (url) => {
    dispatch({ type: BEGIN_DATA_FETCH });
    try {
      const res = await axios.get(url);
      dispatch({ type: DATA_FETCH_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: DATA_FETCH_FAILURE, payload: error });
    }
  };
  const collapseMenu = () => {
    dispatch({
      type: COLLAPSE_MENU,
    });
  };

  const increasePageSize = () => {
    dispatch({
      type: INCREASE_PAGE_SIZE,
      payload: state.page_size + 4
    });
  };
  console.log(state);

  useEffect(() => {
    fetchGames(`${baseUrl}&page_size=${state.page_size}`);
  }, [state.page_size]);
  return (
    <StatsContext.Provider value={{ ...state, collapseMenu, increasePageSize }}>
      {children}
    </StatsContext.Provider>
  );
};

export const useStatsContext = () => {
  return useContext(StatsContext);
};