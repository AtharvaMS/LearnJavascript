// // const promiceOne = new Promise(function(resolve, reject){
// //     setTimeout(()=>
// //     {   let error = false
// //         if(!error){
// //             console.log("PromiceOne executed!");
// //             resolve({user: "Atharva", password:"123"})

// //         }else{
// //             reject(`Error!`)
// //         }
        
// //     }, 2000)
// // })

// // promiceOne.then((result)=>{
// //     console.log(result.user, result.password)
// // }).catch((error)=>console.log(error))

// // promiceOne.
// // then((user)=>{
// //     console.log(user)
// //     return user.user
// // }).
// // then((username)=>console.log(username)).
// // catch(
// //     (error)=>console.log(error)
// // ).finally(()=>console.log("Done execution"))

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(()=>
//         {   let error = true
//             if(!error){
//                 console.log("PromiceFive executed!");
//                 resolve({user: "Atharva", password:"123"})
    
//             }else{
//                 reject(`Error! Code stopped!`)
//             }
            
//         }, 2000)
// })


// async function consumePromiseFive (){
//     try{
//         const response = await promiseFive
//         console.log(response);
        
//     }catch(error){
//         console.log(error);
        
//     }
    
    
// }

// consumePromiseFive()


// async function requestUsers() {
//     try{
//         const users = await fetch('https://dummyjson.com/users')
//         const jsonUsers = await users.json()
//         console.log(jsonUsers);
        
//     }catch(error){
//         console.log(error);
        
//     }
    
// }
// requestUsers()


fetch('https://dummyjson.com/users').then((response)=>{
    return response.json()
}).
then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})