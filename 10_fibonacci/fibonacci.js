const fibonacci = function(num) {
    if (typeof num === String) {
        num = parseInt(num);
    }
    if (num < 0) {
        return 'OOPS';
    }
    if (num == 0) {
        return 0;
    }
    if (num === 1 | num === 2){ 
        return 1;
    } else {
        fibonacci_array = [1, 1]
        for (i = 2; i < num + 1; i++) {
            fibonacci_array.push(fibonacci_array[i - 2] + fibonacci_array[i - 1]);
        }
        return fibonacci_array[num - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
