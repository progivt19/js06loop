function pyramid(n) {
	let res = "", i, j;
	let probelov = n-1;
	let reshetok =1;
	for (i=0; i<n; i++){
		if (i>0) res = res+"\n"
		
		for (j=0; j<probelov; j++){
			res += " ";
		}
		probelov--;
		for (j=0; j<reshetok; j++){
			res += "#";
		}
		reshetok += 2;
	
	}
	return res;
}

module.exports = pyramid;
