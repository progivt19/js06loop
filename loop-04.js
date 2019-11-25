function pyramid(n) {
    var res = "#";
    var res2 = "##";
    var p = " ";
    var s = '';
    for (var i = 1; i < n ; i++) {
        s = s + p;
    }
    s = s + res;
    for (var i = n; i > 0; i = i - 1) {
        console.log(s);
        res = res + res2;
        s = s.slice(0, i - 2) + res; 
    }
}

module.exports = pyramid;
