const gcd = require('../loop-03.js');

QUnit.test("gcd(m, n) найти наибольший общий делитель ", 
	function(assert){
		assert.deepEqual(gcd(46, 23), 23, "Не выполнено");
		assert.deepEqual(gcd(15, 15), 15, "Не выполнено");
		assert.deepEqual(gcd(0, 55), 0, "Не выполнено");
		assert.deepEqual(gcd(8, 3), 1, "Не выполнено");
		assert.deepEqual(gcd(-5, 3), 1, "Не выполнено");
		assert.deepEqual(gcd(-80, -16), 16, "Не выполнено");
		assert.deepEqual(gcd(36, -9), 9, "Не выполнено");
		assert.deepEqual(gcd(4, -4), 4, "Не выполнено");

	}
);