import { combineReducers } from "redux";

import isUserLoggedReducer from "./isUserLoggedReducer";
import activeRouteReducer from "./ActiveRouteReducer";
import onboardingUserReducer from "./OnboardingUserReducer";

const rootReducer = combineReducers({
	isUserLoggedReducer: isUserLoggedReducer,
	activeRouteReducer: activeRouteReducer,
	onboardingUserReducer: onboardingUserReducer,
});

export default rootReducer;
