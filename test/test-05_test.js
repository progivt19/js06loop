const f = require('../loop-05.js');

QUnit.test("ЗАДАЧА 05.Проверка карты", 
	function(assert){
		assert.deepEqual(f("4372282244310005"), true, "Не выполнено 4372282244310005");
		assert.deepEqual(f("2200550150171302"), true, "Не выполнено 2200550150171302");
		assert.deepEqual(f("1203010101010101"), false, "Не выполнено 1203010101010101");
		assert.deepEqual(f("2020202525222"), true, "Не выполнено 202020220200202");
		assert.deepEqual(f("2020202523222"), false, "Не выполнено 202020220200202");
	}
);