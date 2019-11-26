function factorial(n) {
	if (n<=1) { return n }

	return n*factorial(n-1);
}

function expDiff(x) {
	let n = 1, int = 1;
	let t = x;

	while (Math.abs(t) >= 0.0001) {
		int += t;
		n += 1;
		t = x**n/factorial(n);
	}
	return Math.abs(Math.exp(x) - int);
}
}

module.exports = expDiff;
