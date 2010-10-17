module("sneetch");

test("setStarbelly affects belly state", function() {
  var sneetch = new Sneetch();
  ok(sneetch.hasStarbelly(), "initial belly state is stared");
  sneetch.setStarbelly(false);
  ok(!sneetch.hasStarbelly(), "belly gets set to false");
  sneetch.setStarbelly(true);
  ok(sneetch.hasStarbelly(), "belly gets set back to true");
});


test("starbellies like other starbellies", function() {
  var sneetchA = new Sneetch();
  var sneetchB = new Sneetch();

  ok(sneetchA.likesFellowSneetch(sneetchB), "sneetchA (star) likes sneetchB (star)");
  ok(sneetchB.likesFellowSneetch(sneetchA), "sneetchB (star) likes sneetchA (star)");
});

test("non-starbellies like other non-starbellies", function() {
  var sneetchA = new Sneetch();
  var sneetchB = new Sneetch();
  sneetchA.setStarbelly(false);
  sneetchB.setStarbelly(false);

  ok(sneetchA.likesFellowSneetch(sneetchB), "sneetchA (non-star) likes sneetchB (non-star)");
  ok(sneetchB.likesFellowSneetch(sneetchA), "sneetchB (non-star) likes sneetchA (non-star)");
});

test("starbellies and non-starbellies dislike each other", function() {
  var sneetchStar = new Sneetch();
  var sneetchNonStar = new Sneetch();
  sneetchStar.setStarbelly(true);
  sneetchNonStar.setStarbelly(false);

  ok(!sneetchStar.likesFellowSneetch(sneetchNonStar), "non-star dislikes star");
  ok(!sneetchNonStar.likesFellowSneetch(sneetchStar), "star dislikes non-star");
});

