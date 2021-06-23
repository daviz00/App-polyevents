import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import * as Google from "expo-google-app-auth";
import { googleAuthConfig } from "../config/Config";

export default WelcomeScreen = () => {
	const [isLoading, setLoading] = useState(false);

	const handleLogin = async () => {
		setLoading(() => true);
		try {
			let message = await Google.logInAsync(googleAuthConfig);
			if (message.type === "success") {
				return console.log(
					message.user.name,
					message.user.email,
					message.user.id,
					message.user.photoUrl
				);
			}
			console.log("Signin Cancelled!");
		} catch (err) {
			console.log("error", err);
		} finally {
			setLoading(() => false);
		}
	};

	return (
		<View style={styles.container}>
			<Text>{isLoading ? "Loading" : null}</Text>
			<TouchableOpacity onPress={handleLogin}>
				<Text>Login</Text>
			</TouchableOpacity>
		</View>
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
