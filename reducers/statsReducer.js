import {
  BEGIN_DATA_FETCH,
  CLOSE_MODAL,
  COLLAPSE_MENU,
  DATA_FETCH_FAILURE,
  DATA_FETCH_SUCCESS,
  FETCH_GAME_FAILURE,
  FETCH_GAME_SUCCESS,
  INCREASE_PAGE_SIZE,
  OPEN_MODAL,
  POPULAR_GAMES,
  UPCOMING_GAMES,
} from "../utilts/action";

const statsReducer = (state, action) => {
  if (action.type === COLLAPSE_MENU) {
    return { ...state, collapsed: !state.collapsed };
  }

  if (action.type === BEGIN_DATA_FETCH) {
    return { ...state, loading: true };
  }
  if (action.type === DATA_FETCH_SUCCESS) {
    return { ...state, loading: false, homepage_games: action.payload.results }; // Pastikan payload adalah array
  }
  if (action.type === DATA_FETCH_FAILURE) {
    return { ...state, loading: false, error: action.payload };
  }
  if (action.type === INCREASE_PAGE_SIZE) {
    return { ...state, page_size: action.payload };
  }

  if (action.type === OPEN_MODAL) {
    return { ...state, modal_open: true, modal_id: action.payload };
  }
  if (action.type === CLOSE_MODAL) {
    return { ...state, modal_open: false, modal_id: null };
  }

  if (action.type === BEGIN_DATA_FETCH) {
    return { ...state, loading: true };
  }
  if (action.type === FETCH_GAME_SUCCESS) {
    return { ...state, loading: false, game_data: action.payload };
  }
  if (action.type === POPULAR_GAMES) {
    return { ...state, loading: false, popular_games: action.payload.results }; // Pastikan payload adalah array
  }
  if (action.type === FETCH_GAME_FAILURE) {
    return { ...state, loading: false, error: action.payload };
  }
  if (action.type === UPCOMING_GAMES) {
    return { ...state, loading: false, upcoming_games: action.payload.results }; // Pastikan payload adalah array
  }
  return { ...state };
};

export default statsReducer;