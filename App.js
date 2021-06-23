import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { Provider, useSelector } from "react-redux";
import store from "./src/redux/Store";
import WelcomeScreen from "./src/screens/WelcomeScreen";

const AppWrapper = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

const App = () => {
	let user = useSelector((state) => state.userReducer);

	useEffect(() => {
		const getData = async () => {
			try {
				const token = await AsyncStorage.getItem("token");
				if (token) {
				} else {
				}
			} catch (err) {
				console.log(err);
			}
		};
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar
				animated={true}
				backgroundColor="#61dafb"
				barStyle="default"
				showHideTransition={true}
				hidden={false}
			/>
			{user ? <Text>Hello there</Text> : <WelcomeScreen />}
		</SafeAreaView>
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
