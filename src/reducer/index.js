import { combineReducers } from "redux";

import HomeReducer from "HomeScreen/HomeReducer";

export const appReducer = combineReducers({
  homered: HomeReducer,
});
