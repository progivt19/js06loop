function gcd(m,n) {
	let res;
	// напишите код нахождения наибольшего общего делителя
	
	//gcd(24, 16) = gcd(8, 16) = gcd(8, 8) = gcd(0, 8) = 8

	while (m != 0 && n != 0){
		if (m>=n){
			m = m -n;
		} else {
			n = n-m;
		}

	}	

	if (m===0) res = n; else res = m;
	return res;
}
module.exports = gcd;
