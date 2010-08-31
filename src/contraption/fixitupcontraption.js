/**
 * @provides FixItUpContraption
 * @requires Contraption
 * @requires Sneetch
 */

/**
 * Contraption for "fixing" the star belly state of a Sneetch
 * @constructor
 * @implements {Contraption}
 */
function FixItUpContraption() {}

/**
 * Processing a sneetch flips the star state of it's belly
 * @param {Sneetch} sneetch Sneetch for processing.
 */
FixItUpContraption.prototype.processSneetch = function(sneetch) {
  sneetch.setStarbelly(!sneetch.hasStarbelly);
};
