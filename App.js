import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { Provider, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import store from "./src/redux/Store";
import SplashScreen from "./src/routes/SplashScreen";
import AuthScreen from "./src/routes/AuthScreen";
import OnboardingScreen from "./src/routes/OnboardingScreen";

const AppWrapper = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

const App = () => {
	let user = useSelector((state) => state.isUserLoggedReducer);
	let screenType = useSelector((state) => state.activeRouteReducer);

	return (
		<NavigationContainer>
			{console.log(screenType)}
			<SafeAreaView style={styles.container}>
				<StatusBar
					animated={true}
					backgroundColor="#066786"
					barStyle="default"
					showHideTransition={true}
					hidden={false}
				/>
				{screenType === "splash" ? (
					<SplashScreen />
				) : user ? (
					<Text>This is main screen</Text>
				) : screenType === "auth" ? (
					<AuthScreen />
				) : (
					<OnboardingScreen />
				)}
			</SafeAreaView>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default AppWrapper;
