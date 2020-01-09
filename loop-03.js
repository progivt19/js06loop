function gcd(m,n) {
	// напишите код нахождения наибольшего общего делителя
	while (n !== 0) n = m % (m = n);
	
	return m;
}

module.exports = gcd;
