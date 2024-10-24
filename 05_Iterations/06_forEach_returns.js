const lang = ["cpp", "java", "go", "python", "php"]

const ans = lang.forEach((lang)=>{
    // console.log(lang);
    return lang; // -> does not return anything. 
})

console.log(ans); // undefined value. 


const nums = [1,4,2,3,6,7,8,9,9,0,23,445,656,45,45]

//using filter
const newNums = nums.filter((num) => {return num>5})
console.log(newNums);

//using for each
const ansNum = []

nums.forEach((num)=>{
    if(num > 5){
        ansNum.push(num)
    }
})

console.log(ansNum);
