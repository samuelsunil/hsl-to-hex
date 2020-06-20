var hsl = require('../');
var test = require('tap').test

test('initial hsl', function(assert) {
   
    const actual="#ffffff"
    const expected = hsl(0, 100, 100);
    const it = 'returns gray for'
    assert.is(actual, expected, it)
    assert.end()
});