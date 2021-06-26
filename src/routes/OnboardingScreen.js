import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import InformationScreen from "../screens/Onboarding/InformationScreen";
import CollectUsernameScreen from "../screens/Onboarding/CollectUsernameScreen";

const Stack = createStackNavigator();

const OnboardingScreen = () => {
	return (
		<Stack.Navigator
			initialRouteName="InfoScreen1"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="InfoScreen1"
				component={InformationScreen}
				initialParams={{
					heading: "Kalshi For India",
					content: "Engage in life changing bets on real life events",
					key: 1,
				}}
			/>
			<Stack.Screen
				name="InfoScreen2"
				component={InformationScreen}
				initialParams={{
					heading: "Clone of Polymarket",
					content: " Invest your changes, become a billionaire",
					key: 2,
				}}
			/>
			<Stack.Screen
				name="InfoScreen3"
				component={InformationScreen}
				initialParams={{
					heading: "Competing with Probo",
					content: "Engage in life changing bets on real life events",
					key: 3,
				}}
			/>
			<Stack.Screen
				name="InfoScreen4"
				component={CollectUsernameScreen}
				initialParams={{
					key: 4,
				}}
			/>
		</Stack.Navigator>
	);
};

export default OnboardingScreen;
