//Напишите функцию gcd(m, n), которая возвращает наибольший
//быть равно 6 
function gcd(m,n){
	if(n > 0){
		let k = m%n;
		return gcd(n,k);
	}else{
		return Math.abs(m);
	}
}	
module.exports = gcd;