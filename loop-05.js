function checkCardNumber(nstr) {
    // проверка номера кредитной карты
    var length = 0;
    var nstr1 = nstr;
    var Sum = 0;
    while (nstr1 > 0) {
    	nstr1 = (nstr1 - nstr1 % 10) / 10;
    	length += 1;
    }
    if ((length >= 13) && (length <= 16)) {
	    for(var i = 0; i < length; i++) {
	    	var x = nstr % 10; // цифра под индексом i
            var y = x * 2;
	     	if ((i + 1) % 2 === 1) // 
	    		Sum += x;
	    	else
	    		if (y > 9) 
	    			Sum += y % 10 + (y - y % 10) / 10;
	    		else
	    			Sum += y;
	    	nstr = (nstr - x) / 10;
	    }
	}
	else
		return false;
	if (Sum % 10 === 0)
    	return true;
    else
    	return false;
}

module.exports = checkCardNumber;
