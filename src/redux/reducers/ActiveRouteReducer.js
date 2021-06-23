const activeRouteReducer = (state = "splash", action) => {
	switch (action.type) {
		case "ROUTE_TO_AUTH":
			return "auth";
		case "ROUTE_TO_ONBOARDING":
			return "onboarding";
		case "ROUTE_TO_MAIN":
			return "main";
		default:
			return "splash";
	}
};

export default activeRouteReducer;
