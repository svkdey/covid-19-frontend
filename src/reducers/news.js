// import { CONFIRMED_CASE } from "../actions/types.js";
const initialNews = {
  newsLoading: true
};
export default function(state = initialNews, action) {
  switch (action.type) {
    case "NEWS":
      return { ...state, news: action.payload, newsLoading: false };
    case "SET_NEWS_LOADING":
      return {
        ...state,
        newsLoading: true
      };
    default:
      return state;
  }
}
