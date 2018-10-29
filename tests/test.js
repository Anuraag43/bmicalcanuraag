QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});


QUnit.test('Testing BMI function with negitive number sets of inputs', function (assert) {

    assert.equal(bmiTest(-3,-2),0,'Tested with small -ve number -3');
    
});

QUnit.test('Testing BMI function with negitive number sets of inputs', function (assert) {

    assert.equal(bmiTest(-0.5,76),0,'Tested with small -ve number -0.5');
    
});

QUnit.test('Testing BMI function with negitive number sets of inputs', function (assert) {

    assert.equal(bmiTest(-500,65),0,'Tested with small -ve number -500');
    
});



QUnit.test('Testing BMI function with negitive number sets of inputs', function (assert) {

    assert.equal(bmiTest(500,-650),0,'Tested with small -ve number -500');
    
});


QUnit.test('Testing BMI function with String', function (assert) {

    assert.throws(function () { bmiTest('a','b'); }, /The given argument is not a number/, 'Passing in a string correctly raises an Error');
});

QUnit.test('Testing BMI function with No Arguments', function (assert) {

    assert.throws(function () { bmiTest(); }, /The given argument is not a number/, 'no Argument method check');
});

