import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import {
	useFonts,
	Poppins_400Regular,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const AllDoneScreen = (props) => {
	useEffect(() => {
		setTimeout(() => {
			// navigate to main screen
		}, 2000);
	}, []);

	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.container}>
				<Text style={styles.containerHeading}>
					Account Created Successfully!
				</Text>
				<View style={styles.checkContainer}>
					<Feather name="check" size={24} color="#066786" />
				</View>
			</View>
		);
	}
};

const styles = StyleSheet.create({});

export default AllDoneScreen;
