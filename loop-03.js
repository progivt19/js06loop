function gcd(m,n) {
	let res		


	while (m!=0 && n!=0) {
		if (m>=n){
			m = m-n;
		} else {
			n = n-m;
		}
	}

	if (m===0) res = n; else res = m;

	return res;
}

module.exports = gcd