export const serverUrl = __DEV__ ? "http://localhost:8080" : "";

import { IOS_AUTH_CLIENT_ID, ANDROID_AUTH_CLIENT_ID } from "@env";
export const googleAuthConfig = {
	iosClientId: IOS_AUTH_CLIENT_ID,
	androidClientId: ANDROID_AUTH_CLIENT_ID,
};
