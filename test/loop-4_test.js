const pyramid = require('../loop-04.js');

QUnit.test("Задание 4 - pyramid(n), пирамида", 
  function(assert){
  assert.deepEqual(pyramid(0), '', "pyramid(0) === ");
  assert.deepEqual(pyramid(1), '#', "pyramid(1) === #");
  assert.deepEqual(pyramid(2), ' #\n###', "pyramid(2) === #\n###");
  assert.deepEqual(pyramid(3), '  #\n ###\n#####', "pyramid(3) ===  #\n ###\n#####");
  }
);
