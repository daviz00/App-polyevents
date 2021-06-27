import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/Profile/ProfileScreenRouter";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Home = () => {
	return <></>;
};

const Portfolio = () => {
	return <></>;
};

const MainAppScreen = () => {
	return (
		<Tab.Navigator
			initialRouteName="Profile"
			tabBarOptions={{
				showLabel: false,
				style: {
					position: "absolute",
					elevation: 20,
					backgroundColor: "#fff",
					borderTopRightRadius: 30,
					borderTopLeftRadius: 30,
					height: 70,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View
								style={{
									alignItems: "center",
									justifyContent: "center",
									top: 2,
								}}
							>
								<AntDesign
									name="home"
									size={24}
									color={focused ? "#066786" : "#afafaf"}
								/>
								<Text
									style={
										focused
											? { color: "#066786", fontSize: 12 }
											: { color: "#afafaf", fontSize: 12 }
									}
								>
									Home
								</Text>
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name="Portfolio"
				component={Portfolio}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View
								style={{
									alignItems: "center",
									justifyContent: "center",
									top: 2,
								}}
							>
								<MaterialIcons
									name="wallet-travel"
									size={24}
									color={focused ? "#066786" : "#afafaf"}
								/>
								<Text
									style={
										focused
											? { color: "#066786", fontSize: 12 }
											: { color: "#afafaf", fontSize: 12 }
									}
								>
									Portfolio
								</Text>
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View
								style={{
									alignItems: "center",
									justifyContent: "center",
									top: 2,
								}}
							>
								<Ionicons
									name="person-outline"
									size={24}
									color={focused ? "#066786" : "#afafaf"}
								/>
								<Text
									style={
										focused
											? { color: "#066786", fontSize: 12 }
											: { color: "#afafaf", fontSize: 12 }
									}
								>
									Profile
								</Text>
							</View>
						);
					},
				}}
			/>
		</Tab.Navigator>
	);
};

export default MainAppScreen;
