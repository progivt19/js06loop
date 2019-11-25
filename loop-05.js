function checkCardNumber(nstr){
    
    var summa = 0;

    // проверка номера кредитной карты
    
    // алгоритм Х. П. Луна

    if (nstr.length > 16 || nstr.length < 13){

        return('Дипазон длины от 13 до 16')

    }

for (var t = nstr.length - 1; t >= 0; t -= 2){

    summa += parseInt(nstr[t])

}

    for (var t = nstr.length - 2; t >= 0; t -= 2){

        x = parseInt(nstr[t]) * 2;

        if (x > 9){

            summa += 1 + (x % 10)

        }

        else{

            summa += x

        }

    }

    if (summa % 10 != 0){

        return false;

    }

    else{

        return true;

    }

}

module.exports = checkCardNumber;