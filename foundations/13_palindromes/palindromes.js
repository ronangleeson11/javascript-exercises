const palindromes = function (str) {
    let s = str.replace(/[^a-zA-Z0-9\s]/g, "").replaceAll(" ", "").toLowerCase();
    console.log(s);
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s.charAt(i) != s.charAt(s.length - i - 1)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
