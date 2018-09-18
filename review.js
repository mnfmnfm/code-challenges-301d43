const divisibleByFiveTwoToThePower = (input) => 
  input.map( value => 
    value.filter( value => value % 5 === 0 && typeof(value) === 'number')
    .map( value => Math.pow(2, value)));


const divisibleByFiveTwoToThePower = (input) => {
  return input.map(inner => 
    inner.filter(num => typeof(num) === 'number' && !(num % 5))
    .map(num => 2**num));
};

const divisibleByFiveTwoToThePower = input => {
  // Solution code here...
  return input
    .map(elm =>
      elm.filter(elmInner => typeof elmInner === "number" && elmInner % 5 === 0)
    )
    .map(elm => elm.map(elmInner => 2 ** elmInner));
};

const divisibleByFiveTwoToThePower = (input) => {
  return input.map(arr => 
    arr.filter(val => val % 5 === 0 && typeof (val) === 'number')
    .map(val => 2 ** val));
};

const divisibleByFiveTwoToThePower = (input) => input.map(arr => arr.filter(num => num % 5 === 0 && typeof(num) === 'number').map(num => 2 ** num));

const divisibleByFiveTwoToThePower = (input) => {
  return input.map(el => {
    return el.filter(num => {
      return typeof(num) === 'number' && num % 5 === 0 
    })
    .map(num => Math.pow( 2, num ))
  });
};
