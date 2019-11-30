function expDiff(x) {
	// модуль разности между стандартной экспонентой и приближением в виде ряда
    var x2 = x, W = 2, term = 0;
    var control = true;
	var factorial = 1, sum = 1 + x;
    while (control === true) {
		for(var i = 2; i <= W; i++) {
			x2 *= x;
            factorial *= i;
        }
        
		term = x2 / factorial;
        sum += term;
        if (term < 0)
			term *= -1;
		if (term < 0.0001)
			control = false;
        W++;
		x2 = x;
        factorial = 1;
    }
	return Math.abs (Math.exp(x) - sum)
}
module.exports = expDiff;
