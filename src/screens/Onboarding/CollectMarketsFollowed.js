import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	ToastAndroid,
	Text,
	ActivityIndicator,
	ScrollView,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
	useFonts,
	Poppins_400Regular,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useSelector, useDispatch } from "react-redux";
import { AntDesign, Feather } from "@expo/vector-icons";

import { addMarkets } from "../../redux/actions/Markets";
import { onboardingMarketsFollowed } from "../../redux/actions/UserInfo";
import { serverUrl } from "../../config/Config";

const CollectMarketsFollowed = (props) => {
	const dispatch = useDispatch();
	const markets = useSelector((state) => state.allMarketsReducer);
	const userInfo = useSelector((state) => state.onboardingUserReducer);

	const [marketsSelected, setMarketsSelected] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		if (markets.length > 0) return;
		fetch(serverUrl + "/api/v1/market/all")
			.then((res) => res.json())
			.then((data) => {
				if (data.status === 200) {
					dispatch(addMarkets(data.payload));
				}
			})
			.catch((err) => {
				return ToastAndroid.show(
					"Error loading markets! Restart the App!",
					ToastAndroid.SHORT
				);
			})
			.finally(() => setLoading(false));
	}, []);

	const handleNext = () => {
		if (marketsSelected.length === 0) {
			return ToastAndroid.show("Select atleast 1 market", ToastAndroid.LONG);
		}
		dispatch(onboardingMarketsFollowed(marketsSelected));
		console.log(userInfo);
	};

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
					<View style={styles.upperContainer}>
						<Text style={styles.containerHeading}>
							{"Find markets\nyou'd like to follow"}
						</Text>
					</View>
					<View style={styles.marketsContainer}>
						{markets.length > 0 ? (
							markets.map((i, j) => {
								return (
									<TouchableOpacity
										key={j}
										onPress={() => {
											let markets = marketsSelected;
											if (markets.includes(i.id)) {
												const index = markets.indexOf(i.id);
												if (index > -1) {
													markets.splice(index, 1);
												}
											} else {
												markets.push(i.id);
											}
											setMarketsSelected([...markets]);
										}}
									>
										{marketsSelected.includes(i.id) ? (
											<View style={styles.marketContainerSelected}>
												<Text style={styles.marketTextSelected}>{i.name}</Text>
												<Feather name="check" size={24} color="white" />
											</View>
										) : (
											<View style={styles.marketContainer}>
												<Text style={styles.marketText}>{i.name}</Text>
												<AntDesign name="plus" size={24} color="black" />
											</View>
										)}
									</TouchableOpacity>
								);
							})
						) : (
							<ActivityIndicator size={"large"} color={"#066786"} />
						)}
					</View>
					<TouchableOpacity style={styles.button} onPress={handleNext}>
						<Text style={styles.buttonText}>Finish</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
	},
	upperContainer: {
		marginTop: 40,
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
	},

	containerHeading: {
		fontSize: 30,
		fontFamily: "Poppins_400Regular",
		textAlign: "center",
		marginRight: 20,
		marginLeft: 20,
		marginTop: 80,
	},
	marketsContainer: {
		marginTop: 40,
		minHeight: 300,
	},
	marketContainer: {
		display: "flex",
		flexDirection: "row",
		borderColor: "#1a1a1a",
		borderWidth: 1,
		alignItems: "center",
		borderRadius: 7,
		justifyContent: "space-between",
		paddingTop: 12,
		paddingBottom: 12,
		paddingRight: 10,
		paddingLeft: 10,
		marginBottom: 20,
	},
	marketText: {
		fontSize: 18,
		fontFamily: "Poppins_400Regular",
		textTransform: "capitalize",
		color: "#1a1a1a",
		width: "70%",
	},
	marketContainerSelected: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		borderColor: "#066786",
		borderWidth: 1,
		borderRadius: 7,
		justifyContent: "space-between",
		paddingTop: 12,
		paddingBottom: 12,
		paddingRight: 10,
		paddingLeft: 10,
		marginBottom: 20,
		backgroundColor: "#066786",
	},
	marketTextSelected: {
		fontSize: 18,
		fontFamily: "Poppins_400Regular",
		textTransform: "capitalize",
		color: "#ffffff",
		width: "70%",
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

export default CollectMarketsFollowed;
