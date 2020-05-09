const pyramid = require('../loop-04.js');

QUnit.test("ЗАДАЧА 4. pyramid(n)}", function(assert){
	assert.deepEqual(pyramid(1), '#', "Не выполнено pyramid(1) === \n#");
	assert.deepEqual(pyramid(3), '  #\n ###\n#####', "Не выполнено pyramid(3) === \n     #\n   ###\n  #####\n #######\n#########");
	assert.deepEqual(pyramid(5), '    #\n   ###\n  #####\n #######\n#########', "Не выполнено pyramid(5) === \n    #\n   ###\n  #####\n #######\n#########");
	assert.deepEqual(pyramid(7), '      #\n     ###\n    #####\n   #######\n  #########\n ###########\n#############', "Не выполнено pyramid(7) === \n      #\n     ###\n    #####\n   #######\n  #########\n ###########\n#############")
});
