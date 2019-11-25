function checkCardNumber(nstr) {
    // проверка номера кредитной карты
    var sum = 0;
    var a = 0;
    len = nstr.length;
    for (var i = 1; i < len; i =  i + 2) {
    	sum = sum + parseInt(nstr[i]);
    }
    for (var i = 0; i < len; i =  i + 2) {
    	a = parseInt(nstr[i]) * 2;
    	if(a > 9){
    		sum = sum + 1 + (a%10);
    	}else{
    		sum = sum + a;
    	}
    }
    if(sum%10 == 0){
    	return true;
    }else{
    	return false;
    }
}

module.exports = checkCardNumber;