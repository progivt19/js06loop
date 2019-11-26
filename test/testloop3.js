  
const f = require('../loop-03.js');

QUnit.test("ЗАДАЧА 03. Написать f(m, n), которая возвращает наибольший общий делитель чисел m и n", function(assert){
	assert.deepEqual(f(24,18), 6, "Не выполнено f( 24, 18) ===  6")
	assert.deepEqual(f(2,6), 2, "Не выполнено f( 2, 6) ===  2")
	assert.deepEqual(f( 5,25), 5, "Не выполнено f(  5, 25) ===  5")
	assert.deepEqual(f( 12, 144), 12, "Не выполнено f(  12, 144) ===  12")
});