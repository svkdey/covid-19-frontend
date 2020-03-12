import { combineReducers } from "redux";
import coronaData from "./corona_data_reducer";
import tweets from "./tweet_reducer";

const rootReducer = combineReducers({
  coronaData,
  tweets
});

export default rootReducer;
