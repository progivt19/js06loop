const f = require('../loop-03.js');

QUnit.test("Задание 3", 
	function(assert){
		assert.deepEqual(f(18, 6), 6, "Не выполнено");
		assert.deepEgual(f(56, 48), 8, "Не выполнено");
		assert.deepEgual(f(54, -27), 27, "Не выполнено");
		assert.deepEgual(f(45, 18), 9, "Не выполнено");
	}
);