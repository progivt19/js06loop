const f = require('../loop-05.js');

QUnit.test("������� 5", 
	function(assert){
		assert.deepEqual(f("4372282244310005"), true, "�� ���������");
		assert.deepEqual(f("1203010101010101"), false, "�� ���������");
		assert.deepEqual(f("12030101010413123"), true, "�� ���������");
		assert.deepEqual(f("4372282244310005"), true, "�� ���������");
	);
