import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const MainAppScreen = () => {
	function Profile() {
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text style={{ color: "black" }}>This is Profile</Text>
			</View>
		);
	}

	return (
		<Tab.Navigator initialRouteName="Profile">
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	);
};

export default MainAppScreen;
