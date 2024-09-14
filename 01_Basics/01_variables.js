const pi = 3.14
var day = "monday"  //-> not recommended because of scope issue
let date = "33-4-2020"

console.log(pi);

// pi = 44 -> connot reassign to const 
day = "sunday"
date = "23-3-3232"
// console.log(day);
// console.log(date);

console.table([pi, day, date])


