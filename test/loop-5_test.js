const checkCardNumber = require('../loop-05.js');

QUnit.test("ЗАДАЧА 5. проверка номера кредитной карты}", function(assert){
	assert.deepEqual(checkCardNumber('4042 6690 6347 9236'), true, "Не выполнено checkCardNumber(4042 6690 6347 9236) === true")
	assert.deepEqual(checkCardNumber('1111 2822 4431 0005'), false, "Не выполнено checkCardNumber(1111 2822 4431 0005) === false")
	assert.deepEqual(checkCardNumber('1111 111 111 111'), false, "Не выполнено checkCardNumber(1111 111 111 111) === false")
	assert.deepEqual(checkCardNumber('1110 1110 111 1110'), true, "Не выполнено checkCardNumber(1110 1110 111 1110) === true")
	assert.deepEqual(checkCardNumber('4276 7611 2855 6772'), true, "Не выполнено checkCardNumber(4276 7611 2855 6772) === true")
});