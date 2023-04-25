const {validateEmail, validatePassword, validateNotEmpty, validateNumber, validateText, validateURL} = require('validate-form')

//test email
console.log(validateEmail('example@email.com')) //expected true
console.log(validateEmail('exampleemail.com')) //expected false

//test password
console.log(validatePassword('dvsdvesvdev')) //expected true
console.log(validatePassword('ddvd')) //expected false
console.log(validatePassword('ddvd', {minLength: 3})) //expected true
console.log(validatePassword('ddvd', {minLength: 3, numbers: true})) //expected false
console.log(validatePassword('ddv3', {minLength: 3, numbers: true})) //expected true
console.log(validatePassword('ddv3', {minLength: 3, numbers: true, specialCharacters: true})) //expected false
console.log(validatePassword('ddv3@', {minLength: 3, numbers: true, specialCharacters: true})) //expected true
console.log(validatePassword('ddv3', {numbers: true, characters: false})) //expected false

//validate not empty
console.log(validateNotEmpty('123')) //expected true
console.log(validateNotEmpty('')) //expected false

//validate number
console.log(validateNumber('123')) //expected true
console.log(validateNumber('dvdsv')) //expected false
console.log(validateNumber('1', {min: 0, max: 10})) //expected true
console.log(validateNumber('11', {min: 0, max: 10})) //expected false

//validate text
console.log(validateText('Hey')) //expected true
console.log(validateText('123')) //expected false

//validate url
console.log(validateURL('http://www.google.com')) //expected true
console.log(validateURL('123')) //expected false
console.log(validateURL('google.com')) //expected true