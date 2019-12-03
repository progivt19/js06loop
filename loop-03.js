function gcd(m, n) {
	if (m==0 || n==0) {
		return 0;
	} else {
		m = Math.abs(m);
		n = Math.abs(n);
		if (m==0) return n;
			while (n!=0) {
				if (m>n) m=m-n;
				else n=n-m;
			}
		}
	return m;
}

module.exports = gcd;