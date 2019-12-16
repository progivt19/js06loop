function pyramid(n) {
	let res ="", i, j;
	let prbl = n-1;
	let rsht = 1;

	for (i=0; i<n; i++){

		if  (i>0) res += "\n";

		for (j=0; j<prbl; j++){
			res = res+" ";
		}
		prbl--;

		for (j=0; j<rsht; j++){
			res += "#";
		}
		rsht += 2;
	}
	return res;
}
module.exports = pyramid;
