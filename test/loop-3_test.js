const gcd = require('../loop-03.js');

QUnit.test("gcd(m, n) return наибольший общий делитель", 
	function(assert){
		assert.deepEqual(gcd(5, 0), 5, "Не выполнено");
		assert.deepEqual(gcd(-76, 12), 4, "Не выполнено");
		assert.deepEqual(gcd(7, 3), 1, "Не выполнено");
		assert.deepEqual(f(-7, 3), 1, "Не выполнено");
		assert.deepEqual(gcd(7, 3), 1, "Не выполнено");
	}
);