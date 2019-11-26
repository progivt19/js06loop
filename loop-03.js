function gcd(m,n) {
	var res;
	// напишите код нахождения наибольшего общего делителя
	if (m===0 || n===0){
return 0; 
	}
while (m!=0 && n!=0)
	{ if (m>=n) m = m%n;
		else n = n % m;}
	if (m==0) return(Math.abs(n))
		else return (Math.abs(m));
}

module.exports = gcd;
