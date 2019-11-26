function checkCardNumber(nstr) {
    var a = "";
    var b = 0;
    var c = 0;
    for(var i = 0; i < String(nstr).length; i++){
        if((i % 2 == 0) && String(nstr)[i] != " "){
            a += String(Number(String(nstr)[i]) * 2);
        }
    }
    for (var i = 0; i < String(a).length; i++){
        b += Number(String(a)[i]);
    }
    for (var i = 0; i < String(nstr).length; i++){
        if((i % 2 != 0) && String(nstr)[i] != " "){
            c += Number(String(nstr)[i])
        }
    }
    if((b + c) % 10 == 0){
        return true;
    }else{
        return false;
    }
}
module.exports = checkCardNumber;
