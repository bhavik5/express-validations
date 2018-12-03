var assert = require('assert')

var { validations } = require('../validations')

var testSampleEmail = [
  { input: 'abc', expectedResult: false, description: '"abc" is not valid email' },
  { input: 'abc#xyz.com', expectedResult: false, description: '"abc#xyz.com" is not valid email' },
  { input: 'abc@123.com.', expectedResult: false, description: '"abc@123.com." is not valid email' },
  { input: 'abc@xyz.c', expectedResult: false, description: '"abc@xyz.c" is not valid email' },
  { input: 'abc@xyz.com', expectedResult: true, description: '"abc@xyz.com" is valid email' },
  { input: 'abc@pqr.xyz.com', expectedResult: true, description: '"abc@pqr.xyz.com" is valid email' }
]

var testSampleFirstname = [
  { input: 'John123', expectedResult: false, description: '"John123" is not valid firstname' },
  { input: 'John%Williams', expectedResult: false, description: '"John%Williams" is not valid firstname' },
  { input: 'John@123', expectedResult: false, description: '"John@123" is not valid firstname' },
  { input: '123456', expectedResult: false, description: '"123456" is not valid firstname' },
  { input: 'John', expectedResult: true, description: '"John" is valid firstname' }
]

var testSampleMiddlename = [
  { input: 'David123', expectedResult: false, description: '"David123" is not valid middlename' },
  { input: 'David@123', expectedResult: false, description: '"David@123" is not valid middlename' },
  { input: 'David', expectedResult: true, description: '"David" is valid middlename' }
]

var testSampleLastname = [
  { input: 'Williams123', expectedResult: false, description: '"Williams123" is not valid lastname' },
  { input: 'Williams@123', expectedResult: false, description: '"Williams@123" is not valid lastname' },
  { input: 'Williams', expectedResult: true, description: '"Williams" is valid lastname' }
]

var testSampleFullname = [
  { input: 'John1 David2 Williams', expectedResult: false, description: '"John1 David2 Williams" is not valid fullname' },
  { input: 'John David@Williams', expectedResult: false, description: '"John David@Williams" is not valid fullname' },
  { input: 'John David Williams', expectedResult: true, description: '"John David Williams" is valid fullname' }
]

var testSampleDate = [
  { input: '32/01/2018', expectedResult: false, description: '"32/01/2018" is not valid date' },
  { input: '31-13-2018', expectedResult: false, description: '"31-13-2018" is not valid date' },
  { input: '29|02|2018', expectedResult: false, description: '"29|02|2018" is not valid date' },
  { input: '29.2018', expectedResult: false, description: '"29.2018" is not valid date' },
  { input: '31/01/20018', expectedResult: false, description: '"31/01/20018" is valid date' },
  { input: '31/01/2018', expectedResult: true, description: '"31/01/2018" is valid date' },
  { input: '31.01.2018', expectedResult: true, description: '"31.01.2018" is valid date' },
  { input: '31|01|2018', expectedResult: true, description: '"31|01|2018" is valid date' },
  { input: '1-1-2018', expectedResult: true, description: '"1-1-2018" is valid date' },
  { input: '1-1-18', expectedResult: true, description: '"1-1-18" is valid date' },
  { input: '1-1-90', expectedResult: true, description: '"1-1-90" is valid date' },
  { input: '31-12-2017', expectedResult: true, description: '"31-12-2017" is valid date' },
  { input: '29-02-2016', expectedResult: true, description: '"29-02-2016" is valid date' }
]

var testSamplePassword = [
  { input: 'rqpyyani', expectedResult: false, description: '"rqpyyani" is not strong password' },
  { input: 'XXYfZK', expectedResult: false, description: '"XXYfZK" is not strong password' },
  { input: 'kctjhXcGZ', expectedResult: false, description: '"kctjhXcGZ" is not strong password' },
  { input: '92M3M', expectedResult: false, description: '"92M3M" is not strong password' },
  { input: 'OQ{OK015.T', expectedResult: false, description: '"OQ{OK015.T" is not strong password' },
  { input: '`~#por@k', expectedResult: false, description: '"`~#por@k" is not strong password' },
  { input: '^^*2/,)<|*"$', expectedResult: false, description: '"^^*2/,)<|*"$" is not strong password' },
  { input: '~B_][22', expectedResult: false, description: '"~B_][22" is not strong password' },
  { input: 'W,54/)*UA(|n', expectedResult: true, description: '"W,54/)*UA(|n" is strong password' },
  { input: '3n@u=T$k\'', expectedResult: true, description: '"3n@u=T$k\'" is strong password' }
]

describe('Array', () => {
  testSampleEmail.forEach((email) => {
    it(email.description, () => {
      assert.equal(validations.isValidEmail(email.input), email.expectedResult)
    })
  })
})

describe('Array', () => {
  testSampleFirstname.forEach((firstname) => {
    it(firstname.description, () => {
      assert.equal(validations.isValidFirstname(firstname.input), firstname.expectedResult)
    })
  })
})

describe('Array', () => {
  testSampleMiddlename.forEach((middlename) => {
    it(middlename.description, () => {
      assert.equal(validations.isValidMiddlename(middlename.input), middlename.expectedResult)
    })
  })
})

describe('Array', () => {
  testSampleLastname.forEach((lastname) => {
    it(lastname.description, () => {
      assert.equal(validations.isValidLastname(lastname.input), lastname.expectedResult)
    })
  })
})

describe('Array', () => {
  testSampleFullname.forEach((fullname) => {
    it(fullname.description, () => {
      assert.equal(validations.isValidFullname(fullname.input), fullname.expectedResult)
    })
  })
})

describe('Array', () => {
  testSampleDate.forEach((date) => {
    it(date.description, () => {
      assert.equal(validations.isValidDate(date.input), date.expectedResult)
    })
  })
})

describe('Array', () => {
  testSamplePassword.forEach((password) => {
    it(password.description, () => {
      assert.equal(validations.isStrongPassword(password.input), password.expectedResult)
    })
  })
})