import isUserLoggedReducer from "./isUserLoggedReducer";
import { combineReducers } from "redux";
import activeRouteReducer from "./ActiveRouteReducer";

const rootReducer = combineReducers({
	isUserLoggedReducer: isUserLoggedReducer,
	activeRouteReducer: activeRouteReducer,
});

export default rootReducer;
