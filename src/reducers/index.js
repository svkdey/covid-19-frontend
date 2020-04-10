import { combineReducers } from "redux";
import coronaData from "./corona_data_reducer";
import news from "./news";

const rootReducer = combineReducers({
  coronaData,
  news
});

export default rootReducer;
