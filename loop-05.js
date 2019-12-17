function checkCardNumber(nstr) {
	// проверка номера кредитной карт

	let sum = 0;
	let k = 0;

	for (let i = nstr.length-1; i >= 0; i--) {
		let x = parseInt(nstr[i]); 
		let y = x * 2;
		
		if ((k % 2) == 0) {
			sum += x;

		} else if (y > 9) {
			sum += 1 + y % 10;

		} else {
			sum += y;
		}

		k++;
	}

	if (sum % 10 == 0) return true;
	else return false;
}
module.exports = checkCardNumber;