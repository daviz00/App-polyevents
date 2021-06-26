import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

import LogoComponent from "../../components/LogoComponent";

const Stack = createStackNavigator();

const Profile = () => {
	return <FlatList style={styles.container}></FlatList>;
};

const HeaderTitle = () => {
	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<LogoComponent size={20} />
				<Text
					style={{
						fontFamily: "Poppins_400Regular",
						fontSize: 20,
						marginLeft: 15,
					}}
				>
					polyevents
				</Text>
			</View>
		);
	}
};

const ProfileScreen = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="ProfileScreen"
				component={Profile}
				options={{
					headerTitle: <HeaderTitle />,
					headerRight: () => (
						<MaterialIcons
							name="logout"
							size={24}
							color="black"
							style={styles.backButton}
						/>
					),
				}}
			/>
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	backButton: {
		marginRight: 20,
	},
	container: {
		backgroundColor: "#fff",
		flex: 1,
	},
});

export default ProfileScreen;
