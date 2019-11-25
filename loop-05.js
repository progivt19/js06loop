function checkCardNumber(nstr) {
    // проверка номера кредитной карты
    nstr = nstr + '';
    var a = '';
    var b = '';
    var suma = 0;
    var sumb = 0;
    for (var i = 0; i < String(nstr).length; i=i+2) {
    	a = a + nstr[i]*2;
    }
    for (var i = 0; i < a.split('').length; i++) {
    	suma = + a[i] + suma;
    }
    for (var i = 1; i < String(nstr).length; i=i+2) {
    	b = b + nstr[i];
    }
    for (var i = 0; i < b.split('').length; i++){
    	sumb = + b[i] + sumb;
    }
    return (suma+sumb)%10===0 ? 'true' : 'false';
}

module.exports = checkCardNumber;
