import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { Provider, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "./src/routes/SplashScreen";
import AuthScreen from "./src/routes/AuthScreen";
import OnboardingScreen from "./src/routes/OnboardingScreen";
import MainAppScreen from "./src/routes/MainAppScreen";
import store from "./src/redux/Store";

const AppWrapper = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

const App = () => {
	/*
		isUserThere: true/false
		screenType: auth/onboarding/main/splash && default value = splash
	*/

	let isUserThere = useSelector((state) => state.isUserLoggedReducer);
	let screenType = useSelector((state) => state.activeRouteReducer);

	return (
		<NavigationContainer>
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar
					animated={true}
					barStyle="dark-content"
					backgroundColor="white"
					showHideTransition={true}
					hidden={false}
				/>
				<OnboardingScreen />
				{/* {screenType === "splash" ? (
					<SplashScreen />
				) : isUserThere ? (
					<MainAppScreen />
				) : screenType === "onboarding" ? (
					<OnboardingScreen />
				) : (
					<AuthScreen />
				)} */}
			</SafeAreaView>
		</NavigationContainer>
	);
};

export default AppWrapper;
