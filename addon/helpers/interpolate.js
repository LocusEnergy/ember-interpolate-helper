import Ember from 'ember';

const matcher = /\$\{\s*(.*?)\s*\}/g;

export function interpolate([ str ], hash) {
  return str.replace(matcher,  (i, match) => Ember.get(hash, match));
}

export default Ember.Helper.helper(interpolate);
