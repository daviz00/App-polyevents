import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch } from "react-redux";

import InformationScreen from "../screens/Onboarding/InformationScreen";
import CollectUsernameScreen from "../screens/Onboarding/CollectUsernameScreen";
import CollectMarketsFollowed from "../screens/Onboarding/CollectMarketsFollowed";
import { serverUrl } from "../config/Config";
import { addMarkets } from "../redux/actions/Markets";
import AllDoneScreen from "../screens/Onboarding/AllDoneScreen";

const Stack = createStackNavigator();

const OnboardingScreen = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		fetch(serverUrl + "/api/v1/market/all")
			.then((res) => res.json())
			.then((data) => {
				if (data.status === 200) {
					dispatch(addMarkets(data.payload));
				}
			})
			.catch((err) => {
				return;
			});
	}, []);

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
			<Stack.Screen
				name="InfoScreen5"
				component={CollectMarketsFollowed}
				initialParams={{
					key: 5,
				}}
			/>
			<Stack.Screen
				name="InfoScreen6"
				component={AllDoneScreen}
				initialParams={{
					key: 6,
				}}
			/>
		</Stack.Navigator>
	);
};

export default OnboardingScreen;
