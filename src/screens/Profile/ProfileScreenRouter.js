import React from "react";
import {
	Text,
	View,
	StyleSheet,
	ToastAndroid,
	TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { useDispatch } from "react-redux";

import LogoComponent from "../../components/LogoComponent";
import ProfileScreen from "./ProfileScreen";
import { removeToken } from "../../utils/AsyncStorage";
import handleTokenName from "../../utils/TokenNameHandler";
import { logout } from "../../redux/actions/Auth";

const Stack = createStackNavigator();

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

const ProfileScreenRouter = () => {
	const dispatch = useDispatch();

	const handleLogout = async () => {
		let removedToken = await removeToken(handleTokenName("AUTH"));
		if (removedToken.message) {
			dispatch(logout());
		} else {
			return ToastAndroid.show("Unable to logout!", ToastAndroid.SHORT);
		}
	};
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{
					headerTitle: <HeaderTitle />,
					headerRight: () => (
						<TouchableOpacity onPress={handleLogout}>
							<MaterialIcons
								name="logout"
								size={24}
								color="black"
								style={styles.logoutButton}
							/>
						</TouchableOpacity>
					),
				}}
			/>
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	logoutButton: {
		marginRight: 20,
	},
});

export default ProfileScreenRouter;
