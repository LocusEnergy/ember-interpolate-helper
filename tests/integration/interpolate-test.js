import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('interpolate', 'Integration | Component | interpolate helper', {
  integration: true
});

test('interpolates values from string', function(assert) {
  this.set('toBeInterpolated', '${b}');
  this.render(hbs`{{interpolate toBeInterpolated b='cat' d='fish'}}`);
  assert.equal(this.$().text().trim(), 'cat');

  this.set('toBeInterpolated', '${b}${d}');
  assert.equal(this.$().text().trim(), 'catfish');
});
