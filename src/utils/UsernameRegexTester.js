function checkUsername(username) {
	let regex = /^(?=.{5,14}$)[a-zA-Z0-9]*$/;
	let isUsernameValid = regex.test(username);
	let flag = true;
	if (!isUsernameValid) flag = false;

	return flag;
}

export default checkUsername;
