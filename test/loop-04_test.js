const pyramid = require('../loop-04.js');

QUnit.test("ЗАДАЧА 04. pyramid(n)}", function(assert){
	assert.deepEqual(pyramid(3), '  #\n ###\n#####', "Не выполнено pyrami(3) ===      #\n   ###\n  #####\n #######\n#########")
	assert.deepEqual(pyramid(5), '    #\n   ###\n  #####\n #######\n#########', "Не выполнено pyrami(5) ===     #\n   ###\n  #####\n #######\n#########")
	assert.deepEqual(pyramid(1), '#', "Не выполнено pyrami(1) === #")
});
