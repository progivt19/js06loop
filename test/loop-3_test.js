const f = require('../loop-03.js');

QUnit.test("ЗАДАЧА 03. gcd(m, n)", function(assert){
    assert.deepEqual(f(4, 8), 4, "Не выполнено f(4, 8) == 4")
    assert.deepEqual(f(24, 18), 6, "Не выполнено f(24, 18) == 6")
    assert.deepEqual(f(21, 49), 7, "Не выполнено f(21, 49) == 7")
});

