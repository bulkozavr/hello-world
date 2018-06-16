var s = process.argv[2];

var max = 0, start;
for(var k = 0; k < n; ++k){
	var tmpS = s.substring(k);
	if (tmpS.length <= max)
		break;
	m = tmpS.length;
	var pi = [m];
	pi[0] = 0
	for (var i = 1; i < m; ++i) {
		var j = pi[i - 1];
		while (j > 0 && tmpS[i] != tmpS[j])
			j = pi[j - 1];
		if (tmpS[i] == tmpS[j]) 
			++j;
		pi[i] = j;
	}
	for (var i = 0; i < m; ++i) {
	  if (pi[i] > max){
		max = pi[i];
		start = k;
	  }
	}
	pi = [];
}

console.log(s.substr(start, max));
