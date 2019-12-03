var gcd = require('../loop-03.js');

QUnit.test("ЗАДАЧА 03, Напишите фунцию gcd(m,n), которая возвращает НОД чисел m и n", function(assert){
    assert.deepEqual(gcd( 24, 18), 6, "Не выполнено gcd( 24, 18) ===  6")
    assert.deepEqual(gcd(  0,  0), 0, "Не выполнено gcd(  0,  0) ===  0")
    assert.deepEqual(gcd(-24,-18), 6, "Не выполнено gcd(-24,-18) ===  6")
    assert.deepEqual(gcd( 18,-24), 6, "Не выполнено gcd( 18,-24) ===  6")
    assert.deepEqual(gcd( 14,  0), 0, "Не выполнено gcd( 14,  0) === 0")
    assert.deepEqual(gcd(  0,-13), 0, "Не выполнено gcd(  0,-13) === 0")
});