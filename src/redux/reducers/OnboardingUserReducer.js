const onboardingUserReducer = (state = null, action) => {
	switch (action.type) {
		case "GOOGLE_INFO":
			return { ...state, ...action.payload };
		case "USERNAME":
			return { ...state, ...action.payload };
		case "REFERRAL_CODE":
			return { ...state, ...action.payload };
		case "MARKETS_FOLLOWED":
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default onboardingUserReducer;
