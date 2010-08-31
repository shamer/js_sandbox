/**
 * @provides Sneetch
 */

/**
 * A sneetch from Dr. Suess's "The Sheetches". Default sneetches have star
 * bellies.
 * @constructor
 */
function Sneetch() {
  /**
   * State of the Sneetch's belly
   * @type {boolean}
   * @private
   */
  this.starbelly_ = true;

  /**
   * Amount of money the sneetch has
   * @type {number}
   */
  this.money = 50.0;

  /**
   * @return {boolean} if the Sneetch has a star on it's belly.
   * @this{Sneetch}
   */
  this.hasStarbelly = function() {
    return this.starbelly_;
  };

  /**
   * Sets wethere the sneetch has a star on it's belly
   * @this{Sneetch}
   * @param {boolean} hasStar If the sneetch has a star.
   */
  this.setStarbelly = function(hasStar) {
    this.starbelly_ = hasStar;
  };

  /**
   * @param {Sneetch} fellow Fellow sneetch.
   * @this {Sneetch}
   * @return {boolean} If this Sneetch likes a fellow Sneetch.
   */
  this.likesFellowSneetch = function(fellow) {
    return this.starbelly_ == fellow.hasStarbelly();
  };
}
