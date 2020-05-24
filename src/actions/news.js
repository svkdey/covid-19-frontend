import axios from "axios";
//

export function fetchNews(key) {
  return async dispatch => {
    try {
      setNewsLoading();
      const res = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?q=covid&country=in&apiKey=" +
          key
      );
      dispatch({
        type: "NEWS",
        payload: res.data.articles
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export const setNewsLoading = () => {
  return {
    type: "SET_NEWS_LOADING"
  };
};
