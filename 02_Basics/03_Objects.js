
const ytuser = {}

ytuser.id = "234tf"
ytuser.name = "atharva"
ytuser.friend = {
    id: "2345",
    name : "Jayesh",
    age: 16,
    hobby: ["painting", "math", 2, 6]
}

// console.log(ytuser);
// console.log(ytuser.friend.hobby);


const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

// const obj3 = Object.assign({}, obj1, obj2) //-> (target, source1, source2, ...) (rarely used)
// console.log(obj3);

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


//keys and values returns array
// console.log(Object.keys(ytuser));
// console.log(Object.values(ytuser));
// console.log(Object.entries(ytuser)); //-> key:value -> array pairs are created



//Object destructure

const course = {
    coursename : "Spring boot with me!",
    tech : "Spring boot",
    courseInstructor : "Atharva"
}

// courseinstructor is a field in course object and is destructured as follows with alias as instructor
const {courseInstructor : instructor, tech} = course; 
// console.log(instructor);
// console.log(tech);

