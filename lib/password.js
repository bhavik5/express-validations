function isStrongPassword (password) {
    let isStrongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[~`!@#$%^&*()+_=\\|[\]{}:;"'?/,.<>-])(?=.*[A-Z]).{8,32}$/
    return isStrongPassword.test(password.toString())
}

module.exports = { isStrongPassword }
