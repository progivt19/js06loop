// напишите код нахождения наибольшего общего делителя
function gcd(m,n) {
	while (m !== 0) n = m % (m = n);
	return m;
}

module.exports = gcd;
