function checkCardNumber(nstr) {
    var k = 0;
    var l = 0;
    for (var i = 0;i < nstr.length ;i = i + 2) {
        if (nstr[i] > 5) {
            var s = nstr[i] * 2;
            var p = '';
            s = p + s;
            s = s[1] * 1 + s[0] * 1;
            k = k + s;
           
        } else {
            k = k + nstr[i] * 2;
        }   
    }
    for (var i = 1; i < nstr.length; i = i + 2) {
        l = l + nstr[i] * 1;
    }
    k = k + l;
    k = k + p;
    return (k[1] == '0') ? "TRUE" : "FALSE";
}

module.exports = checkCardNumber;
