import { combineReducers } from "redux";
import PopMovies from "./reducers/PopMovies";

const rootReducer = combineReducers({
  PopMovies,
});

export default rootReducer;
