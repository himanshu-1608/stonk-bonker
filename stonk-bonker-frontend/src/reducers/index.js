import { combineReducers } from "redux";

import stonkReducer from "./stonk";
import chartReducer from "./chart";

const rootReducer = combineReducers({
	stonk: stonkReducer,
	chart: chartReducer,
});

export default rootReducer;
