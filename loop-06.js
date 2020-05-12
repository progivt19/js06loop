function expDiff(x) {
    let sum = 1.0;
    let val = x;
    let pow = x;
    let fac = 1;
    let n = 1;
    while (Math.abs(val) > 0.0001) {
        n = n + 1;
        pow = pow * x;
        fac = fac * n;
        val = pow / fac;
        sum = sum + val;
    }
    return Math.abs(Math.exp(x) - sum);
}

module.exports = expDiff;