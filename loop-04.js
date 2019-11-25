function pyramid(n) {
	var res = "#";
	// напишите код, обратите внимание, что пробелы 
	// должны быть в начале строки, но не в конце
	
	if (n >= 1 && n <= 20){
		for (let i = 0; i < n; i++){
			for (let k = 0; k < n; k++){
				if(k < n -1 - i)
					res = " ";
				else res = "#";
			}
		}
	}
	return res;
}
module.exports = pyramid;
