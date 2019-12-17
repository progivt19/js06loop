function checkCardNumber(nstr) {
	var sum = 0;
	for (var i = nstr.length - 2; i >= 0; i-=2){
		sum += nstr[i]*2;
	}

	var a = 0;
	for (var i = nstr.length - 1; i >= 0; i-=2){
		a += nstr[i];
	}

	if (sum+a%10 != 0){
		return false;
	}else{
		return true;
	}
}
module.exports = checkCardNumber;
