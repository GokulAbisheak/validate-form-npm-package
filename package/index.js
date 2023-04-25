//validate email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

//validate password
function validatePassword(password, options = {}) {
    const minLength = options.minLength || 8;
    const maxLength = options.maxLength || 100;
    const hasNumbers = options.numbers || false;
    const hasCharacters = options.characters || true;
    const hasSpecialCharacters = options.specialCharacters || false;
    const hasUppercase = options.uppercase || false;
    const hasLowercase = options.lowercase || false;

    if (password.length < minLength || password.length > maxLength) {
        return false;
    }

    if (hasNumbers && !/\d/.test(password)) {
        return false;
    }

    if (hasCharacters && !/[a-zA-Z]/.test(password)) {
        return false;
    }

    if (hasSpecialCharacters && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return false;
    }

    if (hasUppercase && !/[A-Z]/.test(password)) {
        return false;
    }

    if (hasLowercase && !/[a-z]/.test(password)) {
        return false;
    }

    return true;
}

//validate not empty
function validateNotEmpty(text) {
    if (text.trim().length === 0) {
        return false;
    }
    return true;
}

//validate number
function validateNumber(number, options = {}) {
    const min = options.min || -Infinity;
    const max = options.max || Infinity;

    if (isNaN(number)) {
        return false;
    }

    if (number < min || number > max) {
        return false;
    }

    return true;
}

//validate text
function validateText(text) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(text);
}

//validate url
function validateURL(url) {
    const urlRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\- .\/?%&=]*)?$/;

    if (urlRegex.test(url)) {
        return true;
    } else {
        return false;
    }
}

//export
module.exports = {validateEmail, validatePassword, validateNotEmpty, validateNumber, validateText, validateURL}