function isValidEmail (email) {
    let isValidEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    return isValidEmail.test(email.toString().toLowerCase())
}

module.exports = { isValidEmail }
