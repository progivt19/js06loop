function checkCardNumber(nstr) {
    // проверка номера кредитной карты 
let sum = 0;
      for (var i = nstr.length-1; i>=0; i -= 2) {
		sum += parseInt(nstr[i]);
	
	}
	for (i = nstr.length-2; i>=0; i -= 2){
		k = parseInt(nstr[i])*2;
		if (k>9) {
				sum += 1 + (k%10)
		}else{
			sum+=k}
		}
	return (sum % 10 != 0) ? false : true;
}
module.exports = checkCardNumber;


