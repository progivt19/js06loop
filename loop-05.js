function checkCardNumber(nstr) {
    // проверка номера кредитной карты
	var temp = nstr;
	var sum1 = 0, sum2 = 0;

    if (nstr.toString().length <= 16 && nstr.toString().length >= 13)
    {
    	for (var i = 0; i < nstr.toString().length; i++)
    	{
    		if (temp.toString().length % 2 === 0) {
    			sum2 += temp % 10;
    			temp /= 10;
    			temp = Math.floor(temp);
    		}
    		else
    		{
    			var a = (temp % 10) * 2;
    			for (var i = 0; a.toString().length; i++){
    				sum1 += a % 10;
    				a /= 10;
    				a = Math.floor(a);
    			}
    			temp /= 10;
    			temp = Math.floor(temp);
    		}
    	}

    	if (sum1 + sum2 % 10 === 0) {
    		return true;
    	}
    	else
    	{
    		return 0;
    	}
    }

    return false;
}

module.exports = checkCardNumber;
