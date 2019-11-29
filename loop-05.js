function checkCardNumber(nstr) {
    // проверка номера кредитной карты
    var nstr2 = nstr;
	var lenghtNstr = 0;
    var Sum = 0;
    while (nstr2 > 0) {
    	nstr2 = (nstr2 - nstr2 % 10) / 10;
    	lenghtNstr += 1;
    }
    if ((lenghtNstr >= 13) && (lenghtNstr <= 16)) {
	    for(var W = 0; W < lenghtNstr; W++) {
	    	var x = nstr % 10;
            var y = x * 2;
	     	if ((W + 1) % 2 === 1) {
	    		Sum += x;
	    	}
			else {
	    		if (y > 9) 
	    			Sum += y % 10 + (y - y % 10) / 10;
	    		else
	    			Sum += y;
			}
	    	nstr = (nstr - x) / 10;
	    }
	}
	else {
		return false;
	}
	return (Sum % 10 === 0)
}

module.exports = checkCardNumber;