const gcd = require('../loop-03.js');

QUnit.test("ЗАДАЧА 03. Написать gcd(m, n), которая возвращает наибольший общий делитель чисел m и n", function(assert){
	assert.deepEqual(gcd( 24, 18),  6, "Не выполнено gcd( 24, 18) ===  6")
	assert.deepEqual(gcd( 15, 20),  5, "Не выполнено gcd( 15, 20) ===  5")
	assert.deepEqual(gcd(  4, -2),  2, "Не выполнено gcd(  4, -2) ===  2")
	assert.deepEqual(gcd(  1,  0),  0, "Не выполнено gcd(  1,  0) ===  0")
});
