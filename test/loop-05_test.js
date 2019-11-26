const f = require('../loop-05.js');

QUnit.test("Задание 5", 
	function(assert){
		assert.deepEqual(f("4372282244310005"), true, "Не выполнено");
		assert.deepEqual(f("1203010101010101"), false, "Не выполнено");
		assert.deepEqual(f("12030101010413123"), true, "Не выполнено");
		assert.deepEqual(f("4372282244310005"), true, "Не выполнено");
	);
