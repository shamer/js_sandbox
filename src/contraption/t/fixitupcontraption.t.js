module("contraption");

test("FixItUpContraption flips belly state when processing sneetches", function() {
  var contraption = new FixItUpContraption();
  var sneetch = {'starbelly': true,
		'hasStarbelly': function() { return this.starbelly; },
		'setStarbelly': function(s) { this.starbelly = s; }};

  contraption.processSneetch(sneetch);
  ok(!sneetch.hasStarbelly(), "Belly flipped to false");
  contraption.processSneetch(sneetch);
  ok(sneetch.hasStarbelly(), "Belly flipped to true");
});
