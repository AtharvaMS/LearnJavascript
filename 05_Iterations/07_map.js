
const array = [3,5,6,8,6,3,4,5,7,9,9,9,5,3,2,32,323,23,4,34]

const modifiedArray = array.map((num)=> num+10)
console.log(modifiedArray);


//chaining 
const chainedArray = array.map((num)=> num*10).map((num)=>{
    return num+3;
}).filter((num)=> num%3 === 0);

console.log(chainedArray);
