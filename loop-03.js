function gcd(m, n) {
    let a = m;
    let b = n;
    while (a !== 0 && b !== 0) {
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
    }
    return a + b;
}

module.exports = gcd;