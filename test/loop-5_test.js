const  checkCardNumber= require('../loop-05.js');

QUnit.test("checkCardNumber(m, n) return bool валидность карты", 
	function(assert){
		assert.deepEqual(checkCardNumber("4372282244310005"), true, "Не выполнено 4372282244310005");	
		assert.deepEqual(checkCardNumber("12030101010413123"), true, "Не выполнено 12030101010413123");
		assert.deepEqual(checkCardNumber("1133184056510016"), false, "Не выполнено 1133184056510016")
		assert.deepEqual(checkCardNumber("12030101000413124"), false, "Не выполнено 12030101000413124");
		
	}
);