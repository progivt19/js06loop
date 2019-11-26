const f = require('../loop-04.js');

QUnit.test("Задание 4", 
	function(assert){
		assert.deepEqual(f(3), "  #\n ###\n #####", "Не выполнено");
		assert.deepEqual(f(4), "  #\n ###\n #####\n #######", "Не выполнено");
		assert.deepEqual(f(5), "  #\n ###\n #####\n #######\n #########", "Не выполнено");
		assert.deepEqual(f(6), "  #\n ###\n #####\n #######\n #########\n ###########", "Не выполнено");
	}
);