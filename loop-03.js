function gcd(m,n) {
	var res;
	// напишите код нахождения наибольшего общего делителя

	var temp;

	if (m < n)
	{
		temp = m;
		m = n;
		n = temp;
	}

	while ((m != n) || (m % n != 0))
	{
		if (m < n)
		{
			temp = m;
			m = n;
			n = temp;
		}

		m = m - n;

		if (m < n)
		{
			temp = m;
			m = n;
			n = temp;
		}
	}

	res = n;

	return res;
}

module.exports = gcd;
