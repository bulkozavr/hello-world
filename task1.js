var num = process.argv[2];
var baseFrom = process.argv[3];
var baseTo = process.argv[4];

console.log(parseInt(num, baseFrom).toString(baseTo));
