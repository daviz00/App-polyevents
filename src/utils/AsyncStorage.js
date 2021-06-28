import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async (tokenType) => {
	try {
		let token = await AsyncStorage.getItem(tokenType);
		if (token !== null) return { message: token };
		else return { error: "No Token Found!" };
	} catch (err) {
		return { error: "Error getting token" };
	}
};

export const setToken = async (tokenType, value) => {
	try {
		await AsyncStorage.setItem(tokenType, value);
		return { message: "Token Set!" };
	} catch (err) {
		return { error: "Token not set!" };
	}
};

export const removeToken = async (tokenType) => {
	try {
		await AsyncStorage.removeItem(tokenType);
		return { message: "Token removed!" };
	} catch (err) {
		console.log(err);
		return { error: "Token not removed!" };
	}
};
