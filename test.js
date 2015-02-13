var test = require('tape');
var text = require('./');

test('json', function(t) {
  text.json('fixture.json', function(error, data) {
    t.ok(data);
    t.end();
  });
});
