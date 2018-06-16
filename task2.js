var s = process.argv[2];

var n = s.length;
var pi = [n];

pi[0] = 0
for (var i=1; i < n; ++i) {
	var j = pi[i - 1];
	while (j > 0 && s[i] != s[j])
	j = pi[j - 1];
	if (s[i] == s[j]) 
		++j;
	pi[i] = j;
}

var max = 0;
for (var i = 0; i < n; ++i) {
  if (pi[i] > max)
    max = pi[i];
}
console.log(s.substr(0, max));
