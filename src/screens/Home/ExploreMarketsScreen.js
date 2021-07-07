import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ToastAndroid } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { serverUrl } from "../../config/Config";
import { addMarkets } from "../../redux/actions/Markets";

const ExploreMarketsScreen = () => {
	let markets = useSelector((state) => state.allMarketsReducer);
	let user = useSelector((state) => state.loggedUserReducer);

	let dispatch = useDispatch();

	useEffect(() => {
		fetch(serverUrl + "/api/v1/market/all")
			.then((res) => res.json())
			.then((data) => {
				if (data.status === 200) {
					setMarketsFollowed(() => [...user.marketsFollowed]);
					dispatch(addMarkets(data.payload));
				} else {
					return ToastAndroid.show(
						"Error fetching markets!",
						ToastAndroid.SHORT
					);
				}
			});
	}, []);

	const followMarket = (marketId) => {
		//update in db
		//update user reducer
	};

	const unfollowMarket = (marketId) => {};

	return (
		<View>
			<Text>Markets Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ExploreMarketsScreen;
