// let names = "Atharva ms      "

// console.log(names.trim().length);

const heros = {
    heroName : "spiderman"
}

const heroPower = ['thor', 'spidy', 'money']

Object.prototype.atharva = function(){
    console.log(`Athava is god! He gives you everything. Bow before him!`);
    
}


Array.prototype.sayHelloAtharva = function(){
    console.log(`I am not a god! Just a hard working person!`);
    
}
// Inherits atharva() method from Obejct's prototype
heroPower.atharva()
// heros.sayHelloAtharva() -> prototype works in bottom to top fashion only. Not top to bottom. 





//INHERITANCE

const student = {
    isStydying: true
}

const teacher = {
    isTeaching: true,
    isDoubtSolving: true
}

const TASupport = {
    isSupportAvailable : false
}

//Older syntax
// TASupport.__proto__ = teacher


//New and recommended syntax
Object.setPrototypeOf(TASupport, teacher)



let greetings = "1234567890        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);

}

greetings.trueLength()

//Behind the scene is complete in js