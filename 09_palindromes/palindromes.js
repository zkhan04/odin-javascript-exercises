const palindromes = function (str) {
    const processed = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = processed.split('').reverse().join('');
    return processed === reversed;
};

// Do not edit below this line
module.exports = palindromes;
