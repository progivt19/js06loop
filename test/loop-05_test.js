const f = require('../loop-05.js');

QUnit.test("ЗАДАЧА 05. Правильность ввода номера кредитной карты", 
	function(assert){
        assert.deepEqual(f("4372282244310005"), true, "Ошибка в тесте f(4372282244310005), правильный ответ - true ");
        assert.deepEqual(f("1203010101010101"), false, "Ошибка в тесте f(1203010101010101), правильный ответ -false");
        assert.deepEqual(f("12030101010413123"), true, "Ошибка в тесте f(12030101010413123), правильный ответ - true");
        assert.deepEqual(f("4372282244310005"), true, "Ошибка в тесте f(4372282244310005), правильный ответ - false");
	);