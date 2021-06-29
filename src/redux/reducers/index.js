import { combineReducers } from "redux";

import isUserLoggedReducer from "./IsUserLoggedReducer";
import activeRouteReducer from "./ActiveRouteReducer";
import onboardingUserReducer from "./OnboardingUserReducer";
import loggedUserReducer from "./LoggedUserReducer";
import allMarketsReducer from "./AllMarketsReducer";

const rootReducer = combineReducers({
	loggedUserReducer: loggedUserReducer,
	isUserLoggedReducer: isUserLoggedReducer,
	activeRouteReducer: activeRouteReducer,
	onboardingUserReducer: onboardingUserReducer,
	allMarketsReducer: allMarketsReducer,
});

export default rootReducer;
