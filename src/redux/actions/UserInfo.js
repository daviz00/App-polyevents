export const setUserProfileDetails = (userDetails) => {
	return {
		type: "SAVE_USER",
		payload: userDetails,
	};
};

export const setReferralCode = (referralCode) => {
	return {
		type: "SAVE_REFERRAL_CODE",
		payload: { referralCode },
	};
};

export const onboardingGoogleInfo = (info) => {
	return {
		type: "GOOGLE_INFO",
		payload: info,
	};
};

export const onboardingUsername = (info) => {
	return {
		type: "USERNAME",
		payload: { username: info },
	};
};

export const onboardingReferralCode = (info) => {
	return {
		type: "REFERRAL_CODE",
		payload: { referralCode: info },
	};
};

export const onboardingMarketsFollowed = (info) => {
	return {
		type: "MARKETS_FOLLOWED",
		payload: { marketsFollowed: info },
	};
};

export const updateMarketsFollowed = (info) => {
	return {
		type: "UPDATE_USER_MARKETS",
		payload: { marketsFollowed: info },
	};
};
