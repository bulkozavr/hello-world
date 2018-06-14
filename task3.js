var a = process.argv[2];
var b = process.argv[3];

var gcd, k = 1
while (true){
	if (a % b === 0 || b % a === 0){
		gcd = Math.min(a, b);
		break;
	}
  if (a === 0){
    gcd = b;
    break;
  }
  if (b === 0 || a == b){
    gcd = a;
    break;
  }
  if (a == 1 || b == 1){
    gcd = 1;
    break;
  }
  if (a % 2 === 0 && b % 2 === 0){
    a /= 2;
    b /= 2;
    k++;
    continue;
  }
  if (a % 2 === 0){
    a /= 2;
    continue;
  }
  if (b % 2 === 0){
    b /= 2;
    continue;
  }
  tmp = Math.min(a, b)
  a = Math.abs(a - b) / 2;
  b = tmp;
}
console.log(gcd*k);
