function checkCardNumber(nstr) {
    // проверка номера кредитной карты

	let sum = 0; i;
	for (i = nstr.length-1; i >= 0; i-= 2) {
		k = parseInt(nstr[i]);
		sum += k;
	}

	for (i = nstr.length-2; i >=0; i -= 2)
		k = parseInt(nstr[i]);
		if (2*k>9) {
			sum += (1 + (2*k)%10)
		} else {
			sum += *k;
		}
		console.log(sum);
		return (sum % 10 === 0);
}

module.exports = checkCardNumber;
