function pyramid(n) {
	let res ="", i, j;
	let probel = n-1;
	let reshetka = 1;

	for (i=0; i<n; i++){

		if  (i>0) res += "\n";

		for (j=0; j<probel; j++){
			res = res+" ";
		}
		probel--;

		for (j=0; j<reshetka; j++){
			res += "#";
		}
		reshetka += 2;
	}
	return res;
}
module.exports = pyramid;