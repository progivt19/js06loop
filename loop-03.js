function gcd(m,n) {
	var res;
	var s;
	// напишите код нахождения наибольшего общего делителя
	if (m == n){
		res = m;
		return res;
	}
	while (m != n) {
		s = m;
		m = n;
		if (s > n) {
			n = s - n;
		}
		else {
			n = n - s;
		}
	}
	res = m;
	return res;
}

module.exports = gcd;
