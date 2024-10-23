//Higher order for loop

//for of

const gerrtings = "Hello everyone! This is javascript course"

// console.log(gerrtings.split(" "));

// for (const iterator of gerrtings.split(" ")) {
// //     console.log(iterator);
    
// }

for (const word in gerrtings.split(" ")) {
    console.log(gerrtings.split(" ")[word]);
    
}



// Map

const map = new Map();
map.set("IND", "India")
map.set("CND", "Canada")
map.set("USA", "America")


for (const [key, value] of map) {
    console.log(key , " :- ", value);
}



const games = {
    game1: "COD",
    game2: "TOD"
}

// for (const game of games) { -> Not working for object. 
//     console.log(game);
    
// }