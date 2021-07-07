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
import { useDispatch } from "react-redux";

import {
	onboardingUsername,
	onboardingReferralCode,
} from "../../redux/actions/UserInfo";
import { serverUrl } from "../../config/Config";
import checkUsername from "../../utils/UsernameRegexTester";
import ProfileImageContainer from "../../components/ProfileImageContainer";

const CollectUsernameScreen = (props) => {
	const dispatch = useDispatch();

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
				() => "Username can only contain small letters and numbers"
			);
			return;
		}

		let isUsernameValid = checkUsername(userName);
		if (!isUsernameValid) {
			setIsUsernameCorrect(() => false);
			setUsernameErrorMessage(
				() => "Username can only contain small letters and numbers"
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
							() => "Username can only contain small letters and numbers"
						);
						return;
					} else if (data.status === 409) {
						setIsUsernameCorrect(() => false);
						setUsernameErrorMessage(() => "Username already exists");
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
		dispatch(onboardingReferralCode(referral));
		dispatch(onboardingUsername(userName));

		props.navigation.navigate("InfoScreen5");
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
								<Text style={styles.introductionWish}>Welcome Abord!</Text>
								<Text style={styles.introductionName}>Aditya Gupta</Text>
							</View>
						</View>
					</View>
					<View style={styles.lowerContainer}>
						<View style={styles.textContainer}>
							<View style={{ ...styles.inputContainer, marginBottom: 20 }}>
								<Text
									style={
										userName
											? isUsernameCorrect
												? {
														...styles.textBoxLabel,
														...styles.textBoxLabelRight,
												  }
												: {
														...styles.textBoxLabel,
														...styles.textBoxLabelWrong,
												  }
											: styles.textBoxLabel
									}
								>
									Create your username
								</Text>
								<TextInput
									color={
										userName
											? isUsernameCorrect
												? "#32b57d"
												: "#f2296c"
											: "#1a1a1a"
									}
									enablesReturnKeyAutomatically={true}
									autoCapitalize={"none"}
									autoCorrect={false}
									spellCheck={false}
									style={
										userName
											? isUsernameCorrect
												? { ...styles.textInput, ...styles.textInputRight }
												: { ...styles.textInput, ...styles.textInputWrong }
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
								<Text
									style={
										referral
											? isReferralCorrect
												? {
														...styles.textBoxLabel,
														...styles.textBoxLabelRight,
												  }
												: {
														...styles.textBoxLabel,
														...styles.textBoxLabelWrong,
												  }
											: styles.textBoxLabel
									}
								>
									Do you have a referral code?
								</Text>
								<TextInput
									color={
										referral
											? isReferralCorrect
												? "#32b57d"
												: "#f2296c"
											: "#1a1a1a"
									}
									spellCheck={false}
									autoCapitalize={"none"}
									autoCorrect={false}
									style={
										referral
											? isReferralCorrect
												? { ...styles.textInput, ...styles.textInputRight }
												: { ...styles.textInput, ...styles.textInputWrong }
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
	textContainer: {
		display: "flex",
		width: "70%",
	},
	textInput: {
		borderColor: "#1a1a1a",
		borderWidth: 1,
		padding: 10,
		fontFamily: "Poppins_400Regular",
		marginTop: 3,
		borderRadius: 7,
	},
	textBoxLabel: {
		color: "#1a1a1a",
		fontFamily: "Poppins_400Regular",
		fontSize: 14,
	},

	textInputWrong: {
		borderColor: "#f2296c",
	},
	textInputRight: {
		borderColor: "#32b57d",
	},
	textBoxLabelWrong: {
		color: "#f2296c",
	},
	textBoxLabelRight: {
		color: "#32b57d",
	},
	wrongInputMessage: {
		marginTop: 3,
		color: "#f2296c",
		fontFamily: "Poppins_400Regular",
		fontSize: 10,
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
