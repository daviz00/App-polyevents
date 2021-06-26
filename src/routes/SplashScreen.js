import React, { useEffect } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { useDispatch } from "react-redux";

import { getToken } from "../utils/AsyncStorage";
import LogoComponent from "../components/LogoComponent";
import { routeToAuth, routeToMain } from "../redux/actions/Routing";
import { login } from "../redux/actions/Auth";

const SplashScreen = ({ setSplash }) => {
	let dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			let token = await getToken();
			if (token.error) {
				return dispatch(routeToAuth());
			} else {
				dispatch(login());
				dispatch(routeToMain());
			}
		})();
	}, []);

	return (
		<View style={styles.container}>
			{Platform.OS === "web" ? null : <LogoComponent size={70} />}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default SplashScreen;
