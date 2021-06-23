const onboardingUserReducer = (state = null, action) => {
	switch (action.type) {
		case "GOOGLE_INFO":
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default onboardingUserReducer;
