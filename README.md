[![Build Status](https://travis-ci.org/LocusEnergy/ember-interpolate-helper.svg?branch=master)](https://travis-ci.org/LocusEnergy/ember-interpolate-helper)

# ember-interpolate-helper

A helper for string interpolations in your Glimmer templates akin to ES6 template literals.

To install,

`ember install ember-interpolate`

## Usage

### helper

```hbs
{{i '${someText} is good with bread' someText='butter'}}
```

### subexpression

```hbs
{{component (i 'my-${c}-widget' c=color)}}
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
