function pyramid(n) {
	var res = "";
	// напишите код, обратите внимание, что пробелы 
	// должны быть в начале строки, но не в конце
	var str = "#";
	var newstr = "";
	var pro = "";
	for (var i = 0; i < n; i++)
	{
		for (var j = 1; j < n - i; j++)
		{
			pro += " ";
		}
		newstr = pro + str;
		pro = "";
		if (i == 0)
			res += newstr;
		else
			res += "\n" + newstr;
		str += "##";
		newstr = "";
	}

	return res;
}

module.exports = pyramid;
