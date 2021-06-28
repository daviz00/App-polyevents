import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import LogoComponent from "../components/LogoComponent";
import { routeToAuth, routeToMain } from "../redux/actions/Routing";
import { login } from "../redux/actions/Auth";
import { getToken } from "../utils/AsyncStorage";
import handleTokenName from "../utils/TokenNameHandler";

const SplashScreen = () => {
	let dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			let token = await getToken(handleTokenName("AUTH"));
			if (token.error) {
				return dispatch(routeToAuth());
			} else {
				dispatch(login());
				return dispatch(routeToMain());
			}
		})();
	}, []);

	return (
		<View style={styles.container}>
			<LogoComponent size={70} />
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
