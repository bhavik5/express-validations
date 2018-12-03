function isValidFirstname (firstname) {
    let isValidFirstname = /^(?=.{1,30}$)[A-Za-z]+$/
    return isValidFirstname.test(firstname.toString().toLowerCase())
}

function isValidMiddlename (middlename) {
    let isValidMiddlename = /^(?=.{1,30}$)[A-Za-z]+$/
    return isValidMiddlename.test(middlename.toString().toLowerCase())
}

function isValidLastname (lastname) {
    let isValidLastname = /^(?=.{1,30}$)[A-Za-z]+$/
    return isValidLastname.test(lastname.toString().toLowerCase())
}

function isValidFullname (fullname) {
    let isValidFullname = /^([A-Za-z]+\s)*[A-Za-z]+$/
    return isValidFullname.test(fullname.toString().toLowerCase())
}

module.exports = { isValidFirstname, isValidMiddlename, isValidLastname, isValidFullname }
