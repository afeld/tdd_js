var count = 10;
function decrement(){
  count -= 1;
}

QUnit.test("hello test", function(assert) {
  decrement();
  assert.equal(count, 9);
});
