import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/Profile/ProfileScreenRouter";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import AppLoading from "expo-app-loading";
import {
	useFonts,
	Poppins_400Regular,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { serverUrl } from "../config/Config";
import { getToken, removeToken } from "../utils/AsyncStorage";
import handleTokenName from "../utils/TokenNameHandler";
import { setUserProfileDetails } from "../redux/actions/UserInfo";
import { logout } from "../redux/actions/Auth";

const Tab = createBottomTabNavigator();

const Home = () => {
	return <></>;
};

const Portfolio = () => {
	return <></>;
};

const MainAppScreen = () => {
	let dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			fetch(serverUrl + "/api/v1/user/", {
				method: "get",
				headers: {
					"content-type": "application/json",
					authorization:
						"Bearer " +
						(await (async () => {
							let token = await getToken(handleTokenName("AUTH"));
							if (token.error) {
								return null;
							} else {
								return token.message;
							}
						})()),
				},
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.status === 200) {
						let email = data.payload.email;
						let roleId = data.payload.id;
						let userName = data.payload.username;
						let fullName = data.payload.full_name;
						let googleUid = data.payload.google_uid;
						let marketsFollowed = data.payload.markets_followed;
						let profileImage = data.payload.profile_image;
						let roleType = data.payload.role_type;
						let userId = data.payload.user_id;

						return dispatch(
							setUserProfileDetails({
								email,
								roleId,
								userId,
								userName,
								fullName,
								googleUid,
								marketsFollowed,
								profileImage,
								roleType,
							})
						);
					} else {
						(async () => {
							await removeToken(handleTokenName("AUTH"));
						})();
						return dispatch(logout());
					}
				})
				.catch((err) => {
					(async () => {
						await removeToken(handleTokenName("AUTH"));
					})();
					return dispatch(logout());
				});
		})();
	}, []);

	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_700Bold,
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<Tab.Navigator
				initialRouteName="Home"
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
												? {
														color: "#066786",
														fontSize: 12,
														fontFamily: "Poppins_400Regular",
												  }
												: {
														color: "#afafaf",
														fontSize: 12,
														fontFamily: "Poppins_400Regular",
												  }
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
												? {
														color: "#066786",
														fontSize: 12,
														fontFamily: "Poppins_400Regular",
												  }
												: {
														color: "#afafaf",
														fontSize: 12,
														fontFamily: "Poppins_400Regular",
												  }
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
												? {
														color: "#066786",
														fontSize: 12,
														fontFamily: "Poppins_400Regular",
												  }
												: {
														color: "#afafaf",
														fontSize: 12,
														fontFamily: "Poppins_400Regular",
												  }
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
	}
};

export default MainAppScreen;
