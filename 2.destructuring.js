const obj = {
  bar: 'val1',
  baz: 'val2'
};

const arr = [
  'dummy',
  'val4'
];

// Use destructuring to modify the following assignments
const bar = obj.bar;
const value = obj.baz;
const def = obj.nil || 'val3';
const val4 = arr[1];

console.log(
  bar,
  value,
  def,
  val4
);
