function pyramid(n) {
    let s = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n + i; j++) {
            if (j < n - 1 - i) {
                s = s + ' ';
            } else {
                s = s + '#';
            }
            if (j === n - 1 - i) {
                s = s + '\n';
            }
        }
    }
    return s;
}

module.exports = pyramid;