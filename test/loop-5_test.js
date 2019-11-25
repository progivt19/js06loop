const checkCardNumber = require('../loop-05.js');

QUnit.test("ЗАДАЧА 03. checkCardNumber(nstr) проверяет правильность номера карты", function(assert){
	assert.deepEqual(checkCardNumber("4372282244310005"), true, "Не выполнено checkCardNumber(4372282244310005) == true")
	assert.deepEqual(checkCardNumber("2321343412323411"), false, "Не выполнено checkCardNumber(2321343412323411) == false")
	assert.deepEqual(checkCardNumber("2200550150187373"), true, "Не выполнено checkCardNumber(2200550150187373) == true")
	assert.deepEqual(checkCardNumber("2324454223440002"), false, "Не выполнено checkCardNumber(2324454223440002) == false")
	assert.deepEqual(checkCardNumber("4372282244310005"), true, "Не выполнено checkCardNumber (4372282244310005) == true");
	assert.deepEqual(checkCardNumber("2200550150171302"), true, "Не выполнено checkCardNumber (2200550150171302) == true");
	assert.deepEqual(checkCardNumber("12030101010413123"), true, "Не выполнено checkCardNumber (12030101010413123) == true");
	assert.deepEqual(checkCardNumber("1203010101010101"), false, "Не выполнено checkCardNumber (1203010101010101) == false");
	assert.deepEqual(checkCardNumber("12030101000413124"), false, "Не выполнено checkCardNumber (12030101000413124) == false");
	assert.deepEqual(checkCardNumber("22030101010413123"), false, "Не выполнено checkCardNumber (12030101010413123) == false");
});