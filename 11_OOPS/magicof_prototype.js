

// [[Prototype]] : INternal property of js object. Works like inheritance
// eg. array -> Object -> NUll
// eg. String -> Object -> null

// When function calls some method on object. Js first tries to find it in object's properties. IF js doesnt find mathod or properties in objects's properties then it goes to internal __proto__ property of object which is linked to parent Object. And then js find those methods and properties in perents' properties. 

// if js still doesnt find requested property or method then it goes on until OBJECT class and stops with it reaches null. 

// Basically js doesnt stop until it gets what he wants. 

function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 45 //-> we can treat function as an object too..

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/