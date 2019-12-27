function factorial(n) {
	if (n === 0){
		return 1;
	}
	else{
		return n * factorial(n - 1)
	}
}
function expDiff(nstr) {
    // модуль разности между стандартной экспонентой и приближением в виде ряда
    var sum = 1;
    var i = 1;
    while(Math.pow(nstr, i)/factorial(i)>=0.0001){
    	sum = sum + Math.abs(Math.pow(nstr, i))/factorial(i)
    	i++;
    }
    return Math.abs(sum) - Math.exp(nstr)
}
module.exports = expDiff;