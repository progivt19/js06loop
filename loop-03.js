// напишите код нахождения наибольшего общего делителя
function gcd(m,n) {
	m = Math.abs(m);
	n = Math.abs(n);
	if(m == n){
		return m;
	}
	while(m!=n){
		a = m;
		m = n;
	}
		if(a > n){
		n = a - n;
		}else{
		n = n - a;
	}
	return m;
}

module.exports = gcd;
