const loggedUserReducer = (state = null, action) => {
	switch (action.type) {
		case "SAVE_USER":
			return { ...state, ...action.payload };
		case "SAVE_REFERRAL_CODE":
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default loggedUserReducer;
