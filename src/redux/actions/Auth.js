export const login = (user) => {
	return {
		type: "LOG_IN",
		payload: user,
	};
};

export const logout = () => {
	return {
		type: "LOG_OUT",
	};
};
