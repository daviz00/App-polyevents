import React, { useEffect } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { useDispatch } from "react-redux";

import { getToken } from "../utils/AsyncStorage";
import LogoComponent from "../components/Logo";
import { routeToAuth, routeToMain } from "../redux/actions/Routing";

const SplashScreen = ({ setSplash }) => {
	let dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			let token = await getToken();
			if (token.error) {
				return dispatch(routeToAuth());
			} else {
				return dispatch(routeToMain());
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
		flexDirection: "column",
		justifyContent: "center",
	},
});

export default SplashScreen;
