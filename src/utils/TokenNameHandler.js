function handleTokenName(tokenConstant) {
	switch (tokenConstant) {
		case "AUTH":
			return "@auth_token";
	}
}

export default handleTokenName;
