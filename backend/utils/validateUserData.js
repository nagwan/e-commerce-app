const isEmailValid = (val) => {
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return regex.test(val)
}

const isStringValid = (val, minChars, maxChars) => {
    let value = trimStartWhitespace(trimEndWhitespace(val))
    return value.length >= minChars && value.length <= maxChars
}

const trimStartWhitespace = (val) => {
    if (val.startsWith(" ")) {
        return val.trimStart();
    }
    return val;
}

const trimEndWhitespace = (val) => {
    if (val.endsWith(" ")) {
        return val.trimEnd();
    }
    return val;
}

export {
    isEmailValid,
    isStringValid
}