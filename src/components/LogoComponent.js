import React from "react";
import { View, StyleSheet } from "react-native";

import Logo from "../assets/icons/Logo.svg";

const LogoComponent = ({ size }) => {
	return (
		<View style={styles(size).logoContainer}>
			<Logo width={size} height={size} />
		</View>
	);
};

const styles = (size) =>
	StyleSheet.create({
		logoContainer: {
			backgroundColor: "white",
			display: "flex",
			justifyContent: "center",
			flexDirection: "column",
			alignItems: "center",
			width: size * 2,
			height: size * 2,
			borderRadius: size,
			elevation: 7,
		},
	});

export default LogoComponent;
