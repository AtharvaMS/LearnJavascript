

class User {
    constructor(username, email, pass){
        this.username = username
        this.email = email
        this.pass = pass
    }

    greetings(){
        console.log(`Hello ${this.username}`)
    }

    static generateId(){
        console.log('123');
        
    }
}

class Teacher extends User{
    constructor(username, email, pass, subject){
        super(username,email,pass)
        this.subject = subject
    }

    isQualified(){
        console.log(`Teacher is qualified to teach ${this.subject}`);
        
    }
}


const teacherOne = new Teacher('atharva', 'a@gmail.com', 'abc', 'Maths')

teacherOne.greetings()
teacherOne.isQualified()
// teacherOne.generateId() => static keyword prevents methods from accessing in thhe child class or use it for any object.
