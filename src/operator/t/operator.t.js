module("operator");

var noopContraption = {'processSneetch': function(sneetch) { }};
function createBeach(numSneetches) {
  var beach = new Array();
  for (var i = 0; i < numSneetches; i++) {
    beach.push({'money': 0});
  }
  return beach;
}

test("Operator processes an entire beach", function() {
  var operator = new Operator("Test McTesterson");
  operator.setContraption(noopContraption);

  // create a 5 sneetch beach
  var beach = createBeach(5);

  // passout money to the beach
  for (var i = 0; i < 5; i++) {
    beach[i].money = (i+3)*4;
  }

  operator.processBeach(beach);

  // Make sure no sneetches have extra money
  for (var i = 0; i < 5; i++) {
    ok(beach[i].money < operator.FEE, "sneetch was processed as many times as possible.");
  }
});


test("Operator won't set null contraptions", function() {
  expect(1);
  var operator = new Operator("Test McTesterson");
  try {
    operator.setContraption(null);
  } catch (e) {
    ok(true, "operator didn't set a null contraption");
  }
});
