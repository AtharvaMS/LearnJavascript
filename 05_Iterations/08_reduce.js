const array = [1,2,3,4,5]

// reduce functions takes accumulator, currentValue and initial value as parameters.

// const ans = array.reduce(function(accumulator, currValue){
//     console.log(`Accumulator : ${accumulator} ,Current Value : ${currValue}`);
    
//     return accumulator+currValue;
// }, 0);

const ans1 =  array.reduce((acc, currVal)=> {
    console.log(`Accumulator : ${acc} ,Current Value : ${currVal}`);
    return acc+currVal;
},10)

// console.log(ans); //15
console.log(ans1); // 25
