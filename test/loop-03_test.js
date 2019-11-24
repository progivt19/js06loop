const gcd = require('../loop-03.js');

QUnit.test("ЗАДАЧА 03. gcd(m, n)}", function(assert){
	assert.deepEqual(gcd( 24, 18), 6, "Не выполнено gcd( 24, 18) === 6")
	assert.deepEqual(gcd( 18, 96), 6, "Не выполнено gcd( 18, 96) === 6")
	assert.deepEqual(gcd(-24,-18), 6, "Не выполнено gcd(-24,-18) === 6")
	assert.deepEqual(gcd(-24, 18), 6, "Не выполнено gcd(-24, 18) === 6")
	assert.deepEqual(gcd( 18,-96), 6, "Не выполнено gcd( 18,-96) === 6")
	assert.deepEqual(gcd( 24, 128), 8, "Не выполнено gcd( 24, 128) === 8")
});
