const lang = ["cpp", "java", "go", "python", "php"]

lang.forEach((lang)=>{
    console.log(lang);
})

//Each call has access to array, index and value of perticular element

lang.forEach((value, index, array)=>{
    console.log(value, index, array);
    
})