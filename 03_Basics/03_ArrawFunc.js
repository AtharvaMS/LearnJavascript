const user = {
    username : "atharva",
    payment : "6000",

    welcomeMessage: function(){
        console.log(`Greetings ${this.username}`);
        console.log(this);
        
    }
}

// const newUser = user
// newUser.welcomeMessage()
// user.username = "Hitesh"
// newUser.welcomeMessage()
//===========================================================================
console.log(this); // prints {} in node env but in browser it prints window.


function one(){
    console.log(this);
}
one() //=> gives global object info as output


const two = function(){
    const username = "atharva" //-> Local scope.
    console.log(this.username); // -> Prints undefined because within global scope there is no property as username.
}
two()


// console.log(addtwo(6,7))     
// console.log(multipleTwo(5,6))            // Both doesnt work because functions are uninitialized till this line. 


const addtwo = (num1, num2) => (num1+num2)  // implicit return with ()
const multipleTwo = (num2, num3) => {return num3*num2} //need explicit return with {}


console.log(addtwo(6,7))
console.log(multipleTwo(5,6))
