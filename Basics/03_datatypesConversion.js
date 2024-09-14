let value = "true"

console.log(value);
console.log(typeof value);

let valueOfValue = Number(value)

console.log(valueOfValue);
console.log(typeof valueOfValue);

// "33" => 33
// "45ab" => NaN but type is number
// true => 1 and false => 0

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn) //=> successful conversion from number to boolean



