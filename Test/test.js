QUnit.test('Testing the Calculating area function by giving multiple inputs ', function(assert){
    assert.equal(mySquare(5),25, 'if number is greater then zero');
    assert.equal(mySquare(12000),0,'if the number beyond the limit ');
    assert.equal(mySquare(0),0,'testing with zero');
    assert.equal(mySquare(-2),0,'testing with a negetive number');
    assert.equal(mySquare(),0,'passed with no value');

})