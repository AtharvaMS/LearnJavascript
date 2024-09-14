let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

let myCreatedDate = new Date("05/03/2024")
console.log(myCreatedDate.toLocaleString())

console.log(Date.now());
console.log(Math.floor(Date.now()/1000)); //-> date in seconds


console.log(myDate.toLocaleString('default',{
    weekday : "long"
}))


