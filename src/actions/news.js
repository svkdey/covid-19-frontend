import axios from "axios";
//

export function fetchNews(key) {
  return async dispatch => {
    try {
      setNewsLoading();
      const res = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://gnews.io/api/v3/search?q=covid&country=in&token=04a3f353028b831c4748c976380459d5"
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
