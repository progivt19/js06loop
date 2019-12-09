function gcd(m,n) {
	var res;
	// напишите код нахождения наибольшего общего делителя
<<<<<<< HEAD
	if ((m===0)||(n===0)){
		return "ААААААА! Обнаружен НОООЛЬ!";
	}
	else {
		while(m!=n){
		m=Math.abs(m)
		n=Math.abs(n)
		if (m>n) {
			m=m-n
		}
		else if (m<n){
			n=n-m}
		}
	res=m
=======

>>>>>>> 076f343e1c8759b6b73c3ce819d0808efedd197b
	return res;
}

module.exports = gcd;
