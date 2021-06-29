const allMarketsReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_MARKETS":
			return action.payload;
		default:
			return state;
	}
};

export default allMarketsReducer;
