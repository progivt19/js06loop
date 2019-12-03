const gcd = require('../loop-03.js');

QUnit.test("ЗАДАЧА 03. gcd(m, n)= НОД чисел m и n", function(assert){
	assert.deepEqual(gcd(24, 18), 6, "Не выполнено gcd(24, 18) === 6")
	assert.deepEqual(gcd(1000, 500), 500, "Не выполнено gcd(1000, 500) === 500")
	assert.deepEqual(gcd(999, 666), 333, "Не выполнено gcd(999, 666) === 333")
	assert.deepEqual(gcd(256, 512), 256, "Не выполнено gcd(256, 512) === 256")

});

