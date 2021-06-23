import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

const InformationScreen = (props) => {
	let info = props.route.params;
	return (
		<View style={styles.container}>
			{/* {info.key === 1 ? (
				<Image source={require("../../assets/icons/Onboarding1.png")} />
			) : info.key === 2 ? (
				<Image source={require("../../assets/icons/Onboarding2.png")} />
			) : (
				<Image source={require("../../assets/icons/Onboarding3.png")} />
			)} */}
			<Text>Hello there</Text>
			{/* <View>
				<Text>{info.heading}</Text>
				<Text>{info.content}</Text>
			</View> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default InformationScreen;
