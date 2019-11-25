"use strict";

QUnit.test("ЗАДАЧА 3: функция gсd которая возвращает наибольший общий делитель", 
  function(assert){
    const fs = require('fs');
    const execSync = require('child_process').execSync;
    assert.ok(fs.existsSync('loop-03.js'), "Файл loop-03.js не существует");

    const gcd = require('../loop-03.js');
    assert.strictEqual(gcd(24,18), 6, "Неверно!")
    assert.strictEqual(gcd(48,24), 24, "Неверно!")
    assert.strictEqual(gcd(3,29), 1, "Неверно!")
    assert.strictEqual(gcd(29,3), 1, "Неверно!")
    assert.strictEqual(gcd(29,1), 1, "Неверно!")
    assert.strictEqual(gcd(1,29), 1, "Неверно!")
    assert.strictEqual(gcd(29,29), 29, "Неверно!")
}
)
