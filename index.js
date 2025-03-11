
  const foo = function() {
    return 'bar';
  };
  const add = (parameter1, parameter2) => parameter1 + parameter2;
  const square = x => x * x;
  const sum = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
  };
  const nums = [1, 2, 3];
const squares = nums.map(x => x ** 2); // [1, 4, 9]
setTimeout(() => console.log('Hello!'), 1000);
const obj = {
    value: 42,
    print: function() {
      setTimeout(() => console.log(this.value), 1000); // 42
    }
  };