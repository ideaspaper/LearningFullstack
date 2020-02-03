// Require the built in 'assertion' library
var assert = require('assert');
// Create a test suite (group) called Math

function returnString(inString) {
  return inString;
}

function concatString(inString1, inString2) {
  return inString1 + inString2;
}


describe('Math', function () {
  let inString1 = 'Hello World';
  let inString2 = 'This is mocha!'
  // Test One: A string explanation of what we're testing
  it('should test if string in equal string out', function () {
    // Our actual test: 3*3 SHOULD EQUAL 9
    assert.equal(inString1, returnString(inString1, inString2));
  });
  // Test Two: A string explanation of what we're testing
  it('should test if able to concatenate string', function () {
    // Our actual test: (3-4)*8 SHOULD EQUAL -8
    assert.equal(inString1 + inString2, concatString(inString1, inString2));
  });
});