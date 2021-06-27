import React from "react";
import { StyleSheet, Image, View } from "react-native";

const ProfileImageContainer = ({ url, size }) => {
	return (
		<View
			style={{
				borderColor: "#e7e7e8",
				borderWidth: 3,
				padding: 3,
				borderRadius: size / 2 + 6,
			}}
		>
			<View style={styles(size).imageContainer}>
				<Image
					source={{
						uri: url,
					}}
					style={styles(size).image}
				/>
			</View>
		</View>
	);
};

const styles = (size) =>
	StyleSheet.create({
		imageContainer: {
			elevation: 10,
			borderRadius: size / 2,
		},
		image: {
			width: size,
			height: size,
			borderRadius: size / 2,
		},
	});

export default ProfileImageContainer;
