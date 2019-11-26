function pyramid(n) {
	var res = " ";
	// напишите код, обратите внимание, что пробелы 
	// должны быть в начале строки, но не в конце
	var a = "#";
	var b = "";
	var c = "";
	var i;
	var j;
	for (i = 0; i < n; i++)
	{	for (j = 1; j < n - i; j++)
		{c += " ";}
		b = c + a;
		c = " ";
		if (i == 0) res += b;
		else res += "\n" + b;
		a += "##";
		b = " ";
	}
	return res;
}
module.exports = pyramid;