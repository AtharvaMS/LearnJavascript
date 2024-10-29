const promiceOne = new Promise(function(resolve, reject){
    setTimeout(()=>
    {   let error = false
        if(!error){
            console.log("PromiceOne executed!");
            resolve({user: "Atharva", password:"123"})

        }else{
            reject(`Error!`)
        }
        
    }, 2000)
})

promiceOne.then((result)=>{
    console.log(result.user, result.password)
}).catch((error)=>console.log(error))

promiceOne.
then((user)=>{
    console.log(user)
    return user.user
}).
then((username)=>console.log(username)).
catch(
    (error)=>console.log(error)
).finally(()=>console.log("Done execution"))