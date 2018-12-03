var { isValidEmail } = require('./lib/email')
var { isValidFirstname, isValidMiddlename, isValidLastname, isValidFullname } = require('./lib/name')
var { isStrongPassword } = require('./lib/password')
var { isValidDate } = require('./lib/date')

var validations = { isValidEmail, isValidFirstname, isValidMiddlename, isValidLastname, isValidFullname, isStrongPassword, isValidDate }

module.exports = { validations }
