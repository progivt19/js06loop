const f = require('../loop-05.js');

QUnit.test("ЗАДАЧА 05. checkCardNumber(4372282244310005)", function(assert){
    assert.deepEqual(f(4372282244310005), true, "Не выполнено f(4372282244310005) == true")
});

