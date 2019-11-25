function f(m,n) {
	var res;
	while (m != n){
		if (n > m) {
			n = n - m;
		} else {
			m = m - n;
		};
	};
	res = m;
	return res;
}

module.exports = f;
