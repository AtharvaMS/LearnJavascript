const user = { // object
    username : "Atharva",
    age: 23,
    work: "IT",

    getUsername: function (){
        console.log(`Username is ${this.username}`);
        
    }
}

console.log(user.username);
console.log(this);
console.log(user.getUsername());


