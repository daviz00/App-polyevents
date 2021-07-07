import React from "react";
import { Text, View } from "react-native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

import LogoComponent from "../components/LogoComponent";

const HeaderTitleComponent = () => {
	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<LogoComponent size={20} />
				<Text
					style={{
						fontFamily: "Poppins_400Regular",
						fontSize: 20,
						marginLeft: 15,
					}}
				>
					polyevents
				</Text>
			</View>
		);
	}
};

 export default HeaderTitleComponent;
