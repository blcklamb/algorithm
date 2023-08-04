const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

String.prototype.format = function () {
    return [...arguments].reduce((pattern, value) => pattern.replace(/%s/, value), this)
}

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log('%s + %s = %s'.format(input[0], input[1], Number(input[0]) + Number(input[1])));
});