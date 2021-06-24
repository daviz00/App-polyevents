import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AppLoading from "expo-app-loading";
import {
	useFonts,
	Poppins_400Regular,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { AntDesign } from "@expo/vector-icons";

import Onboarding1 from "../../assets/icons/Onboarding1.png";
import Onboarding2 from "../../assets/icons/Onboarding2.png";
import Onboarding3 from "../../assets/icons/Onboarding3.png";

const InformationScreen = (props) => {
	let info = props.route.params;

	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					{info.key === 1 ? (
						<Image style={styles.image} source={Onboarding1} />
					) : info.key === 2 ? (
						<Image style={styles.image} source={Onboarding2} />
					) : (
						<Image style={styles.image} source={Onboarding3} />
					)}
					{info.key === 1 ? null : (
						<TouchableOpacity
							style={styles.backArrow}
							onPress={() => props.navigation.goBack()}
						>
							<AntDesign name="arrowleft" size={32} color="black" />
						</TouchableOpacity>
					)}
				</View>
				<View style={styles.ovalContainer}>
					{[1, 2, 3].map((i, j) => {
						return (
							<View
								key={j}
								style={info.key === i ? styles.oval : styles.circle}
							></View>
						);
					})}
				</View>
				<View style={styles.bottomContainer}>
					<View style={styles.textContainer}>
						<Text style={styles.heading}>{info.heading}</Text>
						<Text style={styles.content}>{info.content}</Text>
					</View>
					<TouchableOpacity
						style={styles.button}
						onPress={() =>
							props.navigation.navigate("InfoScreen" + (info.key + 1))
						}
					>
						<Text style={styles.buttonText}>Next</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "white",
	},
	imageContainer: {
		flex: 1,
		width: "100%",
		height: "50%",
	},
	image: {
		alignSelf: "center",
		height: "100%",
		width: "100%",
	},
	backArrow: {
		position: "absolute",
		top: 50,
		left: 20,
	},
	ovalContainer: {
		marginTop: 20,
		display: "flex",
		flexDirection: "row",
	},
	oval: {
		width: 20,
		height: 10,
		backgroundColor: "#000000",
		borderRadius: 50,
		marginRight: 5,
	},
	circle: {
		width: 10,
		height: 10,
		backgroundColor: "#ececec",
		borderRadius: 50,
		marginRight: 5,
	},
	bottomContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-around",
	},
	heading: {
		textAlign: "center",
		fontFamily: "Poppins_700Bold",
		fontSize: 25,
	},
	content: {
		marginLeft: 40,
		marginRight: 40,
		textAlign: "center",
		fontFamily: "Poppins_400Regular",
		fontSize: 16,
	},

	button: {
		backgroundColor: "#066786",
		width: 100,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 4,
		paddingRight: 4,
		borderRadius: 10,
		elevation: 4,
		alignSelf: "flex-end",
		marginRight: 30,
	},
	buttonText: {
		// alignItems: "flex-end",
		// alignSelf: "flex-end",
		textAlign: "center",
		color: "#ffffff",
		fontFamily: "Poppins_400Regular",
		fontSize: 18,
	},
});

export default InformationScreen;
