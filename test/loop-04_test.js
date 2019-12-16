const f = require('../loop-04.js');

QUnit.test("ЗАДАЧА 04. Написать f(n), которая возвращает текстовую пирамиду из решеток и пробелов высоты n (1 <= n <= 20)", 
	function(assert){
        assert.deepEqual(f(3), "  #\n ###\n #####", "Ошибка в тесте f(3), правильный ответ - #\n ###\n #####");
        assert.deepEqual(f(4), "  #\n ###\n #####\n #######", "Ошибка в тесте f(4), правильный ответ - #\n ###\n #####\n #######");
        assert.deepEqual(f(5), "  #\n ###\n #####\n #######\n #########", "Ошибка в тесте f(5), правильный ответ - #\n ###\n #####\n #######\n #########");
        assert.deepEqual(f(6), "  #\n ###\n #####\n #######\n #########\n ###########", "Ошибка в тесте f63), правильный ответ -   #\n ###\n #####\n #######\n #########\n ###########");
	}
);
