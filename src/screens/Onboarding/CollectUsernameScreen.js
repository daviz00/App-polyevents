import React, { useState } from "react";
import {
	TextInput,
	StyleSheet,
	View,
	TouchableOpacity,
	ToastAndroid,
	TouchableWithoutFeedback,
	Text,
	Keyboard,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
	useFonts,
	Poppins_400Regular,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { AntDesign } from "@expo/vector-icons";

import { serverUrl } from "../../config/Config";
import checkUsername from "../../utils/UsernameRegexTester";
import ProfileImageContainer from "../../components/ProfileImageContainer";

const CollectUsernameScreen = (props) => {
	const [userName, setUsername] = useState("");
	const [referral, setReferral] = useState("");
	const [isUsernameCorrect, setIsUsernameCorrect] = useState(false);
	const [isReferralCorrect, setIsReferralCorrect] = useState(false);
	const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
	const [referralErrorMessage, setReferralErrorMessage] = useState("");

	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_700Bold,
	});

	const handleNext = () => {
		if (!userName) {
			return ToastAndroid.show(
				"Please enter valid username!",
				ToastAndroid.SHORT
			);
		}

		if (userName.length < 6 || userName.length > 15) {
			setIsUsernameCorrect(() => false);
			setUsernameErrorMessage(
				() => "username can only contain small letters and numbers"
			);
			return;
		}

		let isUsernameValid = checkUsername(userName);
		if (!isUsernameValid) {
			setIsUsernameCorrect(() => false);
			setUsernameErrorMessage(
				() => "username can only contain small letters and numbers"
			);
			return;
		}

		fetch(serverUrl + "/check/username/" + userName)
			.then((res) => res.json())
			.then((data) => {
				if (data.error) {
					if (data.status === 400) {
						setIsUsernameCorrect(() => false);
						setUsernameErrorMessage(
							() => "username can only contain small letters and numbers"
						);
						return;
					} else if (data.status === 409) {
						setIsUsernameCorrect(() => false);
						setUsernameErrorMessage(() => "username already exists");
						return;
					} else {
						return ToastAndroid.show("Error 1", ToastAndroid.SHORT);
					}
				} else {
					setIsUsernameCorrect(() => true);
				}
			})
			.catch((err) => {
				return ToastAndroid.show("Error 2", ToastAndroid.SHORT);
			});

		if (referral) {
			fetch(serverUrl + "/check/referral/" + referral)
				.then((res) => res.json())
				.then((data) => {
					if (data.error) {
						setIsReferralCorrect(() => false);
						setReferralErrorMessage(() => "wrong referral code");
						return;
					} else {
						setIsReferralCorrect(() => true);
					}
				})
				.catch((err) => {
					return ToastAndroid.show("Error 3", ToastAndroid.SHORT);
				});
		}
		//dispatch to reducer

		props.navigation.navigate("InfoScreen3");
	};

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<View style={styles.upperContainer}>
						<View style={styles.backArrow}>
							<TouchableOpacity onPress={() => props.navigation.goBack()}>
								<AntDesign name="arrowleft" size={32} color="black" />
							</TouchableOpacity>
						</View>
						<View style={styles.introduction}>
							<ProfileImageContainer
								url={"https://avatars.githubusercontent.com/u/51760795?v=4"}
								size={120}
							/>
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
									enablesReturnKeyAutomatically={true}
									autoCapitalize={"none"}
									autoCorrect={false}
									spellCheck={false}
									style={
										userName
											? isUsernameCorrect
												? { ...styles.textInput, ...styles.correctTextInput }
												: { ...styles.textInput, ...styles.wrongTextInput }
											: styles.textInput
									}
									placeholder="Ex: aditya_krishna"
									value={userName}
									onChangeText={(value) => setUsername(value)}
								/>
								{userName ? (
									isUsernameCorrect ? null : (
										<Text style={styles.wrongInputMessage}>
											{usernameErrorMessage}
										</Text>
									)
								) : null}
							</View>
							<View style={styles.inputContainer}>
								<Text>Do you have a referral code?</Text>
								<TextInput
									spellCheck={false}
									autoCapitalize={"none"}
									autoCorrect={false}
									style={
										referral
											? isReferralCorrect
												? { ...styles.textInput, ...styles.correctTextInput }
												: { ...styles.textInput, ...styles.wrongTextInput }
											: styles.textInput
									}
									placeholder="Ex: Poly_XOXO"
									value={referral}
									onChangeText={(value) => setReferral(value)}
								/>
								{referral ? (
									isReferralCorrect ? null : (
										<Text style={styles.wrongInputMessage}>
											{referralErrorMessage}
										</Text>
									)
								) : null}
							</View>
						</View>

						<TouchableOpacity style={styles.button} onPress={handleNext}>
							<Text style={styles.buttonText}>Next</Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableWithoutFeedback>
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
		fontFamily: "Poppins_400Regular",
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
