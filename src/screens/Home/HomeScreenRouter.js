import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

import HeaderTitleComponent from "../../components/HeaderTitleComponent";
import HomeScreen from "./HomeScreen";
import ExploreMarketsScreen from "./ExploreMarketsScreen";

const Stack = createStackNavigator();

const HomeScreenRouter = () => {
	const navigation = useNavigation();

	const navigateToExplore = () => navigation.navigate("ExploreMarketsScreen");

	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="HomeScreen"
					component={HomeScreen}
					options={{
						headerTitle: <HeaderTitleComponent />,
						headerRight: () => (
							<TouchableOpacity onPress={navigateToExplore}>
								<AntDesign
									name="search1"
									size={24}
									color="black"
									style={styles.searchButton}
								/>
							</TouchableOpacity>
						),
					}}
				/>
				<Stack.Screen
					name="ExploreMarketsScreen"
					component={ExploreMarketsScreen}
					options={{
						headerTitle: "Explore",
						headerTitleStyle: {
							fontFamily: "Poppins_400Regular",
							fontSize: 20,
						},
					}}
				/>
			</Stack.Navigator>
		);
	}
};

const styles = StyleSheet.create({
	searchButton: {
		marginRight: 20,
	},
});

export default HomeScreenRouter;
