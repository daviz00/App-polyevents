import { combineReducers } from "redux";

import isUserLoggedReducer from "./isUserLoggedReducer";
import activeRouteReducer from "./ActiveRouteReducer";
import onboardingUserReducer from "./OnboardingUserReducer";
import loggedUserReducer from "./LoggedUserReducer";

const rootReducer = combineReducers({
	loggedUserReducer: loggedUserReducer,
	isUserLoggedReducer: isUserLoggedReducer,
	activeRouteReducer: activeRouteReducer,
	onboardingUserReducer: onboardingUserReducer,
});

export default rootReducer;
