import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async () => {
	try {
		let token = await AsyncStorage.getItem("token");
		if (token) return { message: token };
		else return { error: "No Token Found!" };
	} catch (err) {
		return { error: "No Token Found!" };
	}
};

export const setToken = async (token) => {
	try {
		await AsyncStorage.setItem("token", token);
		return { message: "Token Set!" };
	} catch (err) {
		return { error: "Token not set!" };
	}
};
