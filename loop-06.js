function expDiff(x){
    var n = 0;
    var item = 1;
    var exp = 0;
    while(item > 0.0001){
        if(n <= 0){
            item = 1;
        }else{
            item = (x ** n) / factorial(n);
        }
        exp += item;
        n++;
    }
    return Math.abs(Math.exp(x) - exp);
}
function factorial(a) {
    var int = 1;
    for(var i = 0; i < a; i++){
        int *= (i + 1);
    }
    return int;
}
module.exports = expDiff;