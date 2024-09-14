const name1 = "Atharvams"

console.log("Hello i am " + name1); //-> old way to print strings

console.log(`Hello i am ${name1}`);// -> new way to print strings (Preffered)


console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.charAt(5));

console.log(name1.substring(3,6));
console.log(name1.slice(-4,-1));

const name2 = "     Atharva Sawleshwarkar I am a software dev    "
console.log(name2);

console.log(name2.trim());
console.log(name2.split(" "));

console.log(name2.replace( 'Atharva', 'Archana'))

