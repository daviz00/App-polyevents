import React from "react";
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Clipboard,
	ToastAndroid,
	Button,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
	useFonts,
	Poppins_400Regular,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Video, AVPlaybackStatus } from "expo-av";

import ProfileImageContainer from "../../components/ProfileImageContainer";

const ProfileScreen = () => {
	const video = React.useRef(null);

	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<ScrollView>
				<View style={styles.container}>
					<View style={styles.infoContainer}>
						<ProfileImageContainer
							url={"https://avatars.githubusercontent.com/u/51760795?v=4"}
							size={80}
						/>
						<Text style={styles.email}>adityakrishnaoff@gmail.com</Text>
						<Text style={styles.fullName}>Aditya Krishna Gupta</Text>
						<View style={styles.usernameContainer}>
							<Text style={styles.username}>@shimy</Text>
							<TouchableOpacity>
								<MaterialCommunityIcons
									name="pencil-circle-outline"
									size={24}
									color="black"
								/>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.referralContainer}>
						<Text style={styles.referralHeading}>Refer your friends</Text>
						<Text style={styles.referralSubHeading}>
							Earn 50 coins on each successful referral
						</Text>
						<View style={styles.referralCodeContainer}>
							<Text style={styles.referralCode}>POLY_XOXO</Text>
							<TouchableOpacity
								onPress={() => {
									Clipboard.setString("POLY_XOXO");
									return ToastAndroid.show(
										"Referral Code Copied!",
										ToastAndroid.SHORT
									);
								}}
							>
								<MaterialIcons
									style={styles.copyIcon}
									name="content-copy"
									size={24}
									color="#066786"
								/>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.videoContainer}>
						<Text style={styles.videoContainerText}>How it Works?</Text>

						<Video
							ref={video}
							style={styles.video}
							source={{
								uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
							}}
							useNativeControls
							resizeMode="stretch"
						/>
					</View>
					<View style={styles.problemContainer}>
						<Text style={styles.problemHeading}>Report a Problem</Text>
						<Text style={styles.problemSubHeading}>
							We would love to hear about all the issues you are facing in our
							app
						</Text>
						<TouchableOpacity
							style={styles.button}
							onPress={() =>
								props.navigation.navigate("InfoScreen" + (info.key + 1))
							}
						>
							<Text style={styles.buttonText}>Report</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flex: 1,
		alignItems: "center",
		marginBottom: 50,
	},
	infoContainer: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: 30,
	},
	email: {
		marginTop: 20,
		fontSize: 12,
		color: "#1a1a1a",
		fontFamily: "Poppins_400Regular",
	},
	fullName: {
		fontSize: 22,
		color: "#1a1a1a",
		fontFamily: "Poppins_700Bold",
	},
	usernameContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	username: {
		marginRight: 5,
	},

	referralContainer: {
		marginTop: 40,
		marginLeft: 30,
		alignSelf: "flex-start",
		display: "flex",
		flexDirection: "column",
	},
	referralHeading: {
		fontSize: 22,
		color: "#1a1a1a",
		fontFamily: "Poppins_700Bold",
	},
	referralSubHeading: {
		fontSize: 14,
		marginTop: 10,
		color: "#1a1a1a",
		fontFamily: "Poppins_400Regular",
	},
	referralCodeContainer: {
		marginTop: 5,
		display: "flex",
		flexDirection: "row",
		width: 250,
		justifyContent: "space-between",
		backgroundColor: "#f6fdff",
		elevation: 7,
		padding: 10,
		borderRadius: 10,
		alignItems: "center",
	},
	referralCode: {
		color: "#066786",
		fontSize: 18,
		fontFamily: "Poppins_400Regular",
		paddingLeft: 10,
	},
	copyIcon: {
		paddingRight: 10,
	},
	videoContainer: {
		marginTop: 40,
		marginLeft: 30,
		alignSelf: "flex-start",
		display: "flex",
		flexDirection: "column",
	},
	videoContainerText: {
		fontSize: 22,
		color: "#1a1a1a",
		fontFamily: "Poppins_700Bold",
	},
	video: {
		width: 300,
		height: 200,
	},
	problemContainer: {
		marginTop: 40,
		marginLeft: 30,
		alignSelf: "flex-start",
		display: "flex",
		flexDirection: "column",
		marginBottom: 50,
	},
	problemHeading: {
		fontSize: 22,
		color: "#1a1a1a",
		fontFamily: "Poppins_700Bold",
		marginBottom: 0,
		paddingBottom: 0,
	},
	problemSubHeading: {
		fontSize: 14,
		marginTop: 10,
		color: "#1a1a1a",
		fontFamily: "Poppins_400Regular",
		marginRight: 15,
	},
	button: {
		marginTop: 10,
		backgroundColor: "#066786",
		width: 100,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 4,
		paddingRight: 4,
		borderRadius: 10,
		elevation: 4,
	},
	buttonText: {
		textAlign: "center",
		color: "#ffffff",
		fontFamily: "Poppins_400Regular",
		fontSize: 16,
	},
});

export default ProfileScreen;
