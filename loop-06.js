function fac(num)
            {
                if (num === 0)
                    return 1;
                else
                    return num * fac(num - 1);
            }
var n=0;
var y=0;
function expDiff(nstr) {
    // модуль разности между стандартной экспонентой и приближением в виде ряда
    do{
        n=n+1;
        y=y+Math.pow(nstr,n)/fac(n);
    }
    while(Math.pow(nstr,n)/fac(n)>=0.0001);
    y=Math.abs(Math.exp(nstr)-y);
    return y;
}

module.exports = expDiff;
