// Primitive (Pass by value)
// 7 : String, Number, Boolean, null, undefined, BigInt, Symbol

// Reference (Non primitive)
// Array, objects , functions.

//    Javascript -> single threaded
//               -> dynamically typed 
//               -> interpreted
//               -> garbage collected

let abc = Symbol("123")
let pqr = Symbol("123")
console.log(abc === pqr) // -> false



