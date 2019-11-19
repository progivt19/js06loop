function gcd(m,n) {
	var res;
	// напишите код нахождения наибольшего общего делителя
	m=Math.abs(m);
	n=Math.abs(n);
	do{
		if (m>n){
			m=m-n;
      res=m;
		} else {
		  n=n-m;
      res=n;
		}
	}while (m != n);
	return res;
}

module.exports = gcd;
