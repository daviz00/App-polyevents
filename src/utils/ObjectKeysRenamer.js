// Used to rename object keys like created_at to createdAt

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

// @params: Takes an array of objects
function convertToCamelCase(key) {
	let partsOfkey = key.split("_");
	let newKey = partsOfkey.reduce((acc, string) => {
		if (acc === "") {
			return string;
		} else {
			return acc + capitalizeFirstLetter(string);
		}
	}, "");
	return newKey;
}

function renameObjectKeys(array) {
	let finalArray = array.map((i, j) => {
		let newObj = {};
		for (let key in i) {
			let newKey = convertToCamelCase(key);
			let keyValue = i[key];
			newObj[newKey] = keyValue;
		}
		return newObj;
	});

	return finalArray;
}

export default renameObjectKeys;
