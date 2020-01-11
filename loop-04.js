function pyramid(n) {
	var res = "#";
	var y= "#";
	// напишите код, обратите внимание, что пробелы 
	// должны быть в начале строки, но не в конце
	for(let x=0;x<(n-1);x++){
	res=' '+res;
	}
	for(x=1;x<n;x++){
	res=res+'\n';
	for(let g=0;g<(n-x-1);g++){
	res=res+' ';
	}
	for(let i=0;i<x;i++){
	res=res+'##'
	}
	res=res+'#';
	}
	return res;
}

module.exports = pyramid;
