const gcd = require('../loop-03.js');

QUnit.test("ЗАДАЧА 3. gcd(m, n)}", function(assert){
	assert.deepEqual(gcd( 2, 6), 2, "Не выполнено gcd( 2, 6) === 2");
	assert.deepEqual(gcd( 14, 28), 14, "Не выполнено gcd( 18, 96) === 14");
	assert.deepEqual(gcd(-32,-48), 16, "Не выполнено gcd(-32,-48) === 16");
	assert.deepEqual(gcd(-24, 18), 6, "Не выполнено gcd(-24, 18) === 6");
	assert.deepEqual(gcd( 18,-96), 6, "Не выполнено gcd( 18,-96) === 6");
	assert.deepEqual(gcd( 24, 160), 8, "Не выполнено gcd( 24, 160) === 8");
});
