
function printMyName(){
    console.log("Atharva! I learnt js");
    
}

// printMyName => this is function reference only.
printMyName() // this is function call


function addNums(num1, num2, num3){
    return num1 + num2 + num3
}

console.log(addNums(55,55,"66"))


//Situation : Where we have to all accept unknown number of elements.

function calculateCardPrice(num1, num2, ...orders){
    return num1 + num2 + orders
}

console.log(typeof calculateCardPrice(44,66,77,88,88,55,44,22));

function greetUser(name){
    return `Hello ${name}`
}

console.log(greetUser("Atharva"));


