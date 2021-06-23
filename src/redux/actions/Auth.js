export const login = () => {
	return {
		type: "LOG_IN",
	};
};

export const logout = () => {
	return {
		type: "LOG_OUT",
	};
};

export const onboardingGoogleInfo = (info) => {
	return {
		type: "GOOGLE_INFO",
		payload: info,
	};
};
