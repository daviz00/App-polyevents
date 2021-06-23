import { serverUrl } from "../config/config";
import { getToken } from "../utils/AsyncStorage";

export const getUser = async () => {
	try {
		let userPromise = await fetch(serverUrl + "/api/v1/user/", {
			method: "GET",
			headers: {
				"content-type": "application/json",
				authorization: (async function () {
					let token = await getToken();
					return token.message ? token.message : null;
				})(),
			},
		});

		let user = await userPromise.json();
		console.log(user);
	} catch (err) {}
};
