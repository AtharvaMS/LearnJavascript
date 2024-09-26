// Immediately Invoked Function Expression (IIFE)

// -> used to create functions where they will get invoked as soon as project starts e.g. database conncetion, test api run, etc
// -> Used to stop polluting global scope of variables and functions. 

(function chai(){
    //Named IIFE
    console.log(`DB connected!`);
})(); //-> semicolon is needed. Js needs to know where function context should be eneded.

(()=> {
    console.log(`Api working!`);
    
})();

((name)=>{
    console.log(`Database ${name} working!`);
    
})("MongoDB");