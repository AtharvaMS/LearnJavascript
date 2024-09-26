// 


//Javascript has 5 types of scopes.
    // 1. Block scope 
    // 2. Function Scope
    // 3. Global Scope
    // 4. Lexical(Static scope)
    // 5. Module Scope


function one(){
    const website = "Chaicode"
    function two(){
        const username = "Atharva"
        console.log(website); //-> Outer variable is Accessable. Also known as closure. 
        
    }
    // console.log(username); -> Not accessable. Username is under function scope.
    two()
    
}

// one()


//++++++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++

add(6) //-> works because of function hoisting.
function add(num){
    return num+1
}


// sum(5) -> Gives error because cannot access before initialization.
const sum = function(num){
    return num+1
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



