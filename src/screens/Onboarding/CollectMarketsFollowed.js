import React, { useState } from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	ToastAndroid,
	TouchableWithoutFeedback,
	Text,
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

const CollectMarketsFollowed = () => {
	return (
		<View>
			<Text>Hello World!</Text>
		</View>
	);
};

export default CollectMarketsFollowed;
