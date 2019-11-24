const checkCardNumber = require('../loop-05.js');

QUnit.test("ЗАДАЧА 04. pyramid(n)}", function(assert){
	assert.deepEqual(checkCardNumber('4372 2822 4431 0005'), true, "Не выполнено checkCardNumber(4372 2822 4431 0005) === true")
	assert.deepEqual(checkCardNumber('111 1110 1110 1110'), true, "Не выполнено checkCardNumber(111 1110 1110 1110) === true")
	assert.deepEqual(checkCardNumber('1110 1110 111 1110'), true, "Не выполнено checkCardNumber(1110 1110 111 1110) === true")
	assert.deepEqual(checkCardNumber('111 111 111 111'), true, "Не выполнено checkCardNumber(111 111 111 111) === true")
	assert.deepEqual(checkCardNumber('1111 111 111 111'), false, "Не выполнено checkCardNumber(1111 111 111 111) === false")
});
