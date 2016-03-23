import { interpolate } from 'dummy/helpers/interpolate';
import { module, test } from 'qunit';

module('Unit | Helper | interpolate');

test('it works', function(assert) {
  let result = interpolate(['${a}'], { a: 'dog' });
  assert.equal('dog', result);
});
