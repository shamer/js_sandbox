/**
 * OO model from Dr. Suess's "The Sneetches"
 * @requires Sneetch
 * @requires FixItUpContraption
 * @requires Operator
 */

/** @type {Array.<Sneetch>} All of the sneetches on the beach */
var sneetches = [];

// Populate the beach with 100 Sneetches, half star'd, half unstar'd
for (var i = 0; i < 100; i++) {
  var sneetch = new Sneetch();

  // Remove the star from even numbered sneetches
  if ((i % 2) == 0) {
    sneetch.setStarbelly(false);
  }
  sneetches.push(sneetch);
}

var sylvesterMcMonkeyMcBean = new Operator('Sylvester McMonkey McBean');
sylvesterMcMonkeyMcBean.setContraption(new FixItUpContraption());

// Star and de-star the sneetches on the beatch until they're all out of money
sylvesterMcMonkeyMcBean.processBeach(sneetches);
sylvesterMcMonkeyMcBean.countLoot();

