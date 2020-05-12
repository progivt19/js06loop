function checkCardNumber(nstr) {
    let sum = 0;
    for (let i = 0; i < nstr.length; i++) {
        let num = Number.parseInt(nstr[i]);
        if (i % 2 === 0) {
            num = num * 2;
            if (num > 9) {
               let first = num / 10;
               let second = num % 10;
               num = first + second;
            }
        }
        sum = sum + num;
    }
    return sum % 10 === 0;
}

module.exports = checkCardNumber;