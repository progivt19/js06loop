const f = require('../loop-04.js');

QUnit.test("������� 4", 
	function(assert){
		assert.deepEqual(f(3), "  #\n ###\n #####", "�� ���������");
		assert.deepEqual(f(4), "  #\n ###\n #####\n #######", "�� ���������");
		assert.deepEqual(f(5), "  #\n ###\n #####\n #######\n #########", "�� ���������");
		assert.deepEqual(f(6), "  #\n ###\n #####\n #######\n #########\n ###########", "�� ���������");
	}
);