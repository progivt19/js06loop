const checkCardNumber = require('../loop-05.js');

QUnit.test("ЗАДАЧА 03. checkCardNumber(nstr) проверяет правильность номера карты", function(assert){
	assert.deepEqual(checkCardNumber("2222222211111111"), true, "Не выполнено checkCardNumber(2222222211111111) == true")
	assert.deepEqual(checkCardNumber("2222444433331111"), false, "Не выполнено checkCardNumber(2222444433331111) == false")
	assert.deepEqual(checkCardNumber("1111222233334444"), true, "Не выполнено checkCardNumber(1111222233334444) == true")
	assert.deepEqual(checkCardNumber("5555666677778888"), false, "Не выполнено checkCardNumber(5555666677778888) == false")
	assert.deepEqual(checkCardNumber("9999888877776666"), true, "Не выполнено checkCardNumber (9999888877776666) == true");
	assert.deepEqual(checkCardNumber("6666777755556666"), true, "Не выполнено checkCardNumber (6666777755556666) == true");
	assert.deepEqual(checkCardNumber("6666444433332222"), true, "Не выполнено checkCardNumber (6666444433332222) == true");
	assert.deepEqual(checkCardNumber("1111222233334444"), false, "Не выполнено checkCardNumber (1111222233334444) == false");
	assert.deepEqual(checkCardNumber("1111222233339999"), false, "Не выполнено checkCardNumber (1111222233339999) == false");
	assert.deepEqual(checkCardNumber("0000777766665555"), false, "Не выполнено checkCardNumber (0000777766665555) == false");
}
);