const pyramid = require('../loop-04.js');

QUnit.test("pyramid(m, n) return pyramid test", 
	function(assert){
		assert.deepEqual(pyramid(1), "#", "Не выполнено")
		assert.deepEqual(pyramid(2), "  #\n ###\n#####", "Не выполнено");
		assert.deepEqual(pyramid(3), "    #\n   ###\n  #####\n #######\n#########", "Не выполнено");
	}
);