function pyramid(n) {
	var space = " ", reshetka = "#", line = "\n", symbol = "";
	if (n >= 1 && n <= 20) {
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n - i - 1; j++) { //цикл пробелов
				symbol += space;
			}
			for (let j = 0; j < 2 * i + 1; j++) { //цикл решёток
				symbol += reshetka;
			}
			if (i < n-1) symbol += line;
		}
	}
	return symbol;
}
module.exports = pyramid;
/*
var i = 0, j = 0;
var n = 5;
var space = "", reshotka = "";
	while (i < n) {
	    space = "";
	    reshotka = "";
	    for (j = 0; j < n - i; j++) space += " ";
	    for (j = 0; j < 2 * i + 1; j++) reshotka += "#";
	    console.log(space + reshotka);
	    i++;
	}
*/