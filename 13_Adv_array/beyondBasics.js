console.log("Beyond basics and MDN docs in array ");


// const myArr = []
// %DebugPrint(myArr) // try it using v8-debug engine


// two type sof arry in js
// continuous , holey array -> contains holes.

//SMI (small integer)
//Packed element
//Double (float, string, function)


const arrTwo = [1,4,5,6,73,3,6]
//PACKED_SMI_TYPES (most optimized, only numbers, not decimals.)

arrTwo.push('7.55')
//PACKED_DOUBLE_ELEMENTS(Cant go back even if you delete 7.55 from array)

arrTwo.push('atharva')
//PACKED_ELEMENTS(Cant go back even if you delete atharva string from array) 

//Once downgraded, cant go back to its optimized form. Thats how they are designed in c++ in js backend!

arrTwo[15]=14
//HOLEY_ELEMENTS (Cause holes will from when you change perticular element.)


console.log(arrTwo);

//Undefined -> very expensive operation.
//HOW>

//Bound check
//hasOwnProperty() -> for index 10
//hasOwnProperty.prototype(arrTwo.prototype,11) 
//Because of prototypal nature it will continue to find property. Thats why hasOwnProperty is very very expensive in nature.

//So HOLES in array are very expensive in js!


//SMI  > double > PACKED  -> very optimized in nature!
//H_SMI > H_DOUBLE > h_PACKED     (for all Continuous)


const arrFour = new Array(3)
//Just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1' //HOLEY_ELEMENTS
arrFour[1] = '2' //HOLEY_ELEMENTS
arrFour[2] = '3' //HOLEY_ELEMENTS

//Bit optimized form
const arrFive = []
arrFive.push('1') // PACKED_ELEMENTS
arrFive.push('2') // PACKED_ELEMENTS
arrFive.push('3') // PACKED_ELEMENTS


// Once arr is downgraded, whatever we do. Wwe cant go back! 
