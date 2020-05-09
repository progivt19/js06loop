function checkCardNumber(nstr) {
    // проверка номера кредитной карты
    var x = 0;
    var y = 0;
    nstr=nstr.split(' ');
    for(var i=0;i<4;i++){
        var q = nstr[i];
        var w=q[0]*2;
        var e=q[2]*2;
        if(w>9){
            w=String(w);
            w=Number(w[0])+Number(w[1]);
        }
        if(e>9){
            e=String(e);
            e=Number(e[0])+Number(e[1]);
        }
        x=x+Number(e)+Number(w);
        if(q[3]===undefined){
            y=y+Number(q[1]);
        } else{
        	y=y+Number(q[1])+Number(q[3]);
        }
    }
    if((x+y)%10===0){
    	return true;
    } else{
    	return false;
	}
}

module.exports = checkCardNumber;
