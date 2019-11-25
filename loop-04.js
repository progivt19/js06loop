function pyramid(n) {
	var res = "#";
	var asd = ''
	var k=1
	// напишите код, обратите внимание, что пробелы 
	// должны быть в начале строки, но не в конце
	if (n===0){
		res = ''
	}
	for (var i = n; i>1; i--){
		if (i===n){
			while(k<i){
				res=" "+res;
				k++;
			}
			asd=res
		}
		res=res + '\n'
		asd=asd.slice(1)
		asd=asd+'##'
		res=res+asd
	}
	return res
}
module.exports = pyramid;
