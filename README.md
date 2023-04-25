# Easy Form Validation

Easy Form Validation is a JavaScript Library which makes form validation easy.

The library functions returns a boolean value after validation. The functions can also be customized using an object parameter.

## Use Case
You need to validate the inputs.

## Installation

You can install this library via NPM

```bash
npm install easy-form-validation
```
## Available Validation Methods
 
| Function | Optional Parameter |
| --- | --- | 
| `validateEmail` | N/A |
| `validatePassword` | Available |
| `validateNotEmpty` | N/A |
| `validateNumber` | Available |
| `validateText` | N/A |
| `validateURL` | N/A |

## Optional Parameter

The optional parameter is an object which is passed as the 2nd parameter which can be used to customize the validation methods.

 #### Available attributes 

`validatePassword`
```javascript
{
	minLength: value,
	maxLength: value,
	numbers: false || true, //default false
	characters: false || true, //default true
	specialCharacters: false || true, //default false
	uppercase: false || true, //default false
	lowercase: false || true //default false
}
```
<br>

`validateNumber`
```javascript
{
	min: value,
	max: value
}
```
## Importing
**ES5**
```javascript
const { validateEmail, validatePassword, validateNotEmpty, validateNumber, validateText, validateURL } = require('easy-form-validation')
```
<br>

**ES6**
```javascript
import { validateEmail, validatePassword, validateNotEmpty, validateNumber, validateText, validateURL } from 'easy-form-validation'
```

## Example Usage
 **ES5**
```javascript
const { validateEmail, validatePassword, validateNotEmpty, validateNumber, validateText, validateURL } = require('easy-form-validation')

console.log(validatePassword('@Abcd1234', {
	minLength:  8,
	numbers:  true,
	specialCharacters:  true,
	uppercase:  true,
	lowercase:  true
})) //returns true

console.log(validatePassword('AAbcd1234', {
	minLength:  8,
	numbers:  true,
	specialCharacters:  true,
	uppercase:  true,
	lowercase:  true
})) //returns false because special character is not presented
```
<br>

**ES6**
```javascript
import { validateEmail, validatePassword, validateNotEmpty, validateNumber, validateText, validateURL } from 'easy-form-validation'

console.log(validatePassword('@Abcd1234', {
	minLength:  8,
	numbers:  true,
	specialCharacters:  true,
	uppercase:  true,
	lowercase:  true
})) //returns true

console.log(validatePassword('AAbcd1234', {
	minLength:  8,
	numbers:  true,
	specialCharacters:  true,
	uppercase:  true,
	lowercase:  true
})) //returns false because special character is not presented
``` 