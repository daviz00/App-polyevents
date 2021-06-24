import React, { useState } from "react";
import {
	TextInput,
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	Image,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
	useFonts,
	Poppins_400Regular,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { AntDesign } from "@expo/vector-icons";

const CollectUsernameScreen = (props) => {
	const [userName, setUsernmae] = useState(null);
	const [referral, setReferral] = useState(null);
	const [isUsernameCorrect, setIsUsernameCorrect] = useState(false);
	const [isReferralCorrect, setIsReferralCorrect] = useState(false);

	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.container}>
				<View style={styles.upperContainer}>
					<View style={styles.backArrow}>
						<TouchableOpacity onPress={() => props.navigation.goBack()}>
							<AntDesign name="arrowleft" size={32} color="black" />
						</TouchableOpacity>
					</View>
					<View style={styles.introduction}>
						<View
							style={{
								borderColor: "#e7e7e8",
								borderWidth: 4,
								padding: 4,
								borderRadius: 64,
							}}
						>
							<View style={styles.imageContainer}>
								<Image
									source={{
										uri: "https://avatars.githubusercontent.com/u/51760795?v=4",
									}}
									style={styles.image}
								/>
							</View>
						</View>
						<View style={styles.textIntroduction}>
							<Text style={styles.introductionWish}>Good Evening!</Text>
							<Text style={styles.introductionName}>Aditya Gupta</Text>
						</View>
					</View>
				</View>
				<View style={styles.lowerContainer}>
					<View style={styles.textContainer}>
						<View style={{ ...styles.inputContainer, marginBottom: 20 }}>
							<Text>Create your username</Text>
							<TextInput
								style={styles.textInput}
								placeholder="Ex: aditya_krishna"
							/>
						</View>
						<View style={styles.inputContainer}>
							<Text>Do you have a referral code?</Text>
							<TextInput style={styles.textInput} placeholder="Ex: Poly_XOXO" />
						</View>
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
		backgroundColor: "#fff",
		flex: 1,
		flexDirection: "column",
	},
	upperContainer: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	backArrow: {
		alignSelf: "flex-start",
		marginLeft: 20,
	},
	introduction: {
		display: "flex",
		alignItems: "center",
	},
	imageContainer: {
		elevation: 10,
		borderRadius: 60,
	},
	image: {
		width: 120,
		height: 120,
		borderRadius: 60,
	},
	textIntroduction: {
		marginTop: 20,
	},
	introductionWish: {
		textAlign: "center",
		fontFamily: "Poppins_400Regular",
		fontSize: 16,
	},
	introductionName: {
		textAlign: "center",
		fontFamily: "Poppins_700Bold",
		fontSize: 25,
	},
	lowerContainer: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "space-between",
	},
	textContainer: {},
	textInput: {
		borderColor: "black",
		borderWidth: 3,
		width: 220,
		padding: 10,
		margin: 10,
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
		marginBottom: 50,
	},
	buttonText: {
		textAlign: "center",
		color: "#ffffff",
		fontFamily: "Poppins_400Regular",
		fontSize: 18,
	},
});

export default CollectUsernameScreen;
