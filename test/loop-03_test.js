const f = require('../loop-03.js');

QUnit.test("������� 3", 
	function(assert){
		assert.deepEqual(f(18, 6), 6, "�� ���������");
		assert.deepEgual(f(56, 48), 8, "�� ���������");
		assert.deepEgual(f(54, -27), 27, "�� ���������");
		assert.deepEgual(f(45, 18), 9, "�� ���������");
	}
);