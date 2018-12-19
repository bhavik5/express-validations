function isAlpha (alpha) {
    let isAlpha = /^[A-Za-z]+$/
    if (alpha !== undefined) {
        return isAlpha.test(alpha.toString())
    } else {
        return false
    }
}

function isNumeric (numeric) {
    let isNumeric = /^[0-9]+$/
    if (numeric !== undefined) {
        return isNumeric.test(numeric.toString())
    } else {
        return false
    }
}

function isAlphaNumeric (alphaNumeric) {
    let isAlphaNumeric = /^[A-Za-z0-9]+$/
    if (alphaNumeric !== undefined) {
        return isAlphaNumeric.test(alphaNumeric.toString())
    } else {
        return false
    }
}

function containsNotNumber (notNumber) {
    let containsNotNumber = /^[^0-9]+$/
    if (notNumber !== undefined) {
        return containsNotNumber.test(notNumber.toString())
    } else {
        return false
    }
}

function containsNotAlphabets (notAlphabets) {
    let containsNotAlphabets = /^[^A-Za-z]+$/
    if (notAlphabets !== undefined) {
        return containsNotAlphabets.test(notAlphabets.toString())
    } else {
        return false
    }
}

module.exports = { isAlpha, isNumeric, isAlphaNumeric, containsNotNumber, containsNotAlphabets }
