function gcd(m,n) {
	 var res;
	if ((m===0)||(n===0)){
		return "error";
	}else{
		while(m != n){
			m=Math.abs(m)
		    n=Math.abs(n)
		    if (m > n) {
			    m = m - n;
		    }
		    else if (m < n){
				n = n - m;
			}
		}
	}
	res = m;
	return res;
}

module.exports = gcd;
