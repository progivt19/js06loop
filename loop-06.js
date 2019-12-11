function expDiff(x) {
	
	let n = 1;
	let digit = 1;
	let term = x;

	while (Math.abs(term) >= 0.0001) {
		digit += term;
		n += 1;	
		term = Math.pow(x, n)/factorial(n);
	}

	return Math.abs(Math.exp(x) - digit)
}

function factiorial(n) {
	if (n <= 1) {
		return n;
	}
	
	return n*factorial(n-1);
}
module.exports = expDiff;
