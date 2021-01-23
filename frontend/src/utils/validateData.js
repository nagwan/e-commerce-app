export function isValidEmail(val) {
	const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	return regex.test(val)
}

export function isValidString(val, minChars, maxChars) {
	let value = trimStartWhitespace(trimEndWhitespace(val))
	return value.length >= minChars && value.length <= maxChars
}

export function trimStartWhitespace(val) {
	if (val.startsWith(" ")) {
		return val.trimStart();
	}
	return val;
}

export function trimEndWhitespace(val) {
	if (val.endsWith(" ")) {
		return val.trimEnd();
	}
	return val;
}

export function isRequiredFieldProvided(field) {
	return field ? true : false
}