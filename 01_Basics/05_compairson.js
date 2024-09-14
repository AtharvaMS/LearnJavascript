console.log("2">1) // -> true
console.log("02">1) // -> true

// Avoid this type of conversion
console.log(null > 0)  // inqeuality check 
console.log(null == 0) //-> equiality check
console.log(null >= 0) // -> gives true. Comparisons converts null to zero. 

//=== strict check = checks value as well as datatype

console.log("3" === 3) // false

