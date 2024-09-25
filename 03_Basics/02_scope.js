var a = 300
// let b = 0
// const d = 9

if(true){
    var a = 300  //-> var is hoisted and have function scope. 
                // it doesnt work with block scope. Also redecleration is possible in var -> ERRORS! DONT USE VAR
    let b = 0
    const d = 9
}

console.log(a);
// console.log(b);
// console.log(d);
