const repeatString = function(string, num) {
    finalString = "";
    if (num < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < num; i++) {
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
