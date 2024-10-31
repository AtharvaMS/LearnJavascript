function setUsername(username){
    this.username = username
}


function User(username, email, age){
    setUsername.call(this, username) //-> .call is required to send current function context to another function. And (this) keyword is rrquired as parameter in function call to send current function context. Otherwise, after execution of nested function, all variables will get trashed!
    this.email =email
    this.age = age
}

const chai = new User("chai", 'chai@gm.com', 34)

console.log(chai);
