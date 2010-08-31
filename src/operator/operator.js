/**
 * @provides Operator
 * @requires Contraption
 * @requires Sneetch
 */

/**
 * The operator of a contraption. Very good at processing beaches of
 * Sneetches. (for a fee)
 * @param {string} name Operator's name.
 * @constructor
 */
function Operator(name) {
  /**
   * The operator's name
   * @type {string}
   */
  this.name = name;

  /**
   * Amount of money the operator has
   * @type {number}
   */
  this.money = 0;

  /**
   * Contraption processing fee
   * @const
   * @type {number}
   */
  this.FEE = 10.0;

  /**
   * Contraption for doing things with
   * @type {?Contraption}
   * @private
   */
  this.contraption_ = null;

  /**
   * Setter for the contraption
   * @this {Operator}
   * @param {Contraption} contraption Setter for the operator's contraption.
   */
  this.setContraption = function(contraption) {
    if (contraption === null) {
      throw (
          {'name': 'NullArgument', 'message': 'cannot set a null contraption'}
      );
    }
    this.contraption_ = contraption;
  };

  /**
   * Process a beach of Sneetches until they are all out of money
   * @this {Operator}
   * @param {Array.<Sneetch>} sneetches A beach full of sneetches.
   */
  this.processBeach = function(sneetches) {
    var sneetchesWithMoney = true;
    while (sneetchesWithMoney) {
      var gotPaid = false;
      for (var i = 0; i < sneetches.length; i++) {
        var sneetch = sneetches[i];

        // Only process Sneetches with enough money
        if (sneetch.money >= this.FEE) {
          gotPaid = true;
          sneetch.money -= this.FEE;
          this.money += this.FEE;
          this.contraption_.processSneetch(sneetch);
        }
      }

      if (gotPaid == false) {
        sneetchesWithMoney = false;
      }
    }
  };

  /**
   * Counts up the operator's loot and anounces how much money they have
   * @this {Operator}
   * @return {string} String describing how welthy they are.
   */
  this.countLoot = function() {
    return 'I\'ve cleaned out a lot of Sneetches, I\'ve got $' +
        this.money.toFixed(2) + ' from Sneetch processing fees';
  };
}

