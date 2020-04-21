// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {};
    [...str].forEach(char => obj[char] = obj[char] + 1 || 1);
    const val = Math.max(...Object.values(obj));
    return Object.keys(obj).find(key => obj[key] === val);;
}

module.exports = maxChar;
