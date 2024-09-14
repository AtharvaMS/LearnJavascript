
// primitive datatypes (Stack)
// Non primitive datatypes (Heap)

let myName = "Atharva"
let yourName = myName // -> pass by value. Copy is sent to variable. (Stack)
yourName = "anc"

console.log(myName)
console.log(yourName)


const obj = {
    name : "Atharva",
    home : "Nanded"
}

const obj2 = obj //-> pass by reference.

obj2.home = "pune" //  changed value get reflected on parent varaible as well.(Heap storage)

console.log(obj.home);
