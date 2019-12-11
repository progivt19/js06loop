function checkCardNumber(nstr) {
	// проверка номера кредитной карты

	let checkSum = 0;
	let k = 0;

	for (let i = nstr.length-1; i >= 0; i--) {
		let x = parseInt(nstr[i]); // цифра под индексом i
		let y = x * 2;
		
		if ((k % 2) == 0) {
			checkSum += x;

		} else if (y > 9) {
			checkSum += 1 + y % 10;

		} else {
			checkSum += y;
		}

		k++;
	}

	if (checkSum % 10 == 0) return true;
	else return false;
}

module.exports = checkCardNumber;
