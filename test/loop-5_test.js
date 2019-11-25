const checkCardNumber = require('../loop-05.js');

QUnit.test("Задание 5 - checkCardNumber(nstr), проверка номера карт", 
  function(assert){
  assert.deepEqual(checkCardNumber(4372282244310005), 'true', "checkCardNumber(4372282244310005) === true");
  assert.deepEqual(checkCardNumber(0000000000000000), 'true', "checkCardNumber(0000000000000000) === true");
  assert.deepEqual(checkCardNumber(4372282244310004), 'false', "checkCardNumber(4372282244310004) === false");
  assert.deepEqual(checkCardNumber(43722822443105), 'true', "checkCardNumber(43722822443105) === true");
  assert.deepEqual(checkCardNumber(43722822443104), 'false', "checkCardNumber(43722822443104) === false");
  }
);
