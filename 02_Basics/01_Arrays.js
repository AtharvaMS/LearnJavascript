
//Arrays are resizable and dynamic typed.

// const arr = [1,5,6,7,'true',"atharva"]
// // console.log(arr.length);
// // console.log(arr[5]);

// // arr2 = arr //-> shallow copy (Referencing to smae array)

// // console.log(arr);
// // arr[4] = "Nothing"
// // console.log(arr2);

// //Array Methods
// arr.push(11)
// console.log(arr);
// // arr.pop()
// // console.log(arr);

// console.log(arr.includes(5));
// console.log(arr.indexOf(11));

// const newArr =arr.join()
// console.log(arr);
// console.log(typeof newArr);


// //Slice and splice methods
// const sliceArr = [1,5,3,4,6,7,8,9,29]
// console.log('A',sliceArr);
// console.log(sliceArr.slice(1,4));
 

// console.log("b", sliceArr);
// console.log(sliceArr.splice(1,4)); //-> removes array part form 1 to 4 including 4
// console.log('c', sliceArr);

//Push and concat

const mainarray = [1,3,4,5]
const subarray = [8,9,99]

// mainarray.push(subarray) //-> works on main array. Adds entire subarray as one object
console.log(mainarray)


// const resultArray = mainarray.concat(subarray) // returns new array
// console.log(resultArray);

const spreadOperatorResult = [...mainarray,...subarray]  //(Recommended)
console.log(spreadOperatorResult);

const new_array = [1,4,5,6,[5,6,3,3],[45,55,[77,88,99]]]
const flatted_array = new_array.flat(Infinity) //-> recursively adds nested array into one.
console.log(flatted_array);



//convert to array from anything

console.log(Array.isArray("Atharva"));
console.log(Array.from("atharva"));


console.log(Array.of(4,5,6,7,2,1,1));








