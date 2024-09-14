//Singleton -> when made using constructor


//Object literals

const mySym = Symbol("keySymbol") //-> symbol to use in object

const user = {
    name: "atharva",
    age: 13,
    school : "TAS",
    "full_name":"atharva MS",
    [mySym]:"kwySymbolSyntax" //-> way to add and access symbol primitive datatype.

}

//Both are valid ways to access data from objects
console.log(user.age);
console.log(user["age"]);
console.log(user["full_name"]);
console.log(user[mySym]);

// Object.freeze(user)// freezes the changes in object
user.age = 45
console.log(user.age);

console.log(user);

user.greetings = function(){
    console.log("Hello User!");
    
}

user.greetingsTwo = function(){
    console.log(`hello user ${this.name}`);
    
}
console.log(user.greetings); //-> gives type of function
console.log(user.greetings()); // -> executes the function
console.log(user.greetingsTwo()); 


