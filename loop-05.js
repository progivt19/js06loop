// проверка номера кредитной карты
function checkCardNumber(nstr) {
	let sum = 0;
	nstr[i] = nstr[i]*2;
	sum = sum+nstr[i];
	nstr[i] = nstr[i+2];
	if (sum % 10 != 0){
		return null;
	}
	return sum;

}

module.exports = checkCardNumber;
