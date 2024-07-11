import { BEGIN_DATA_FETCH, COLLAPSE_MENU, DATA_FETCH_FAILURE, DATA_FETCH_SUCCESS, INCREASE_PAGE_SIZE } from "../utilts/action";

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
  return { ...state };
};

export default statsReducer;