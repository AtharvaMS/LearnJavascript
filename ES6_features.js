// Here are some common **JavaScript ES6 features** that may come up in an interview:

// ### 1. **Let and Const**
//    - **Interview Question**: What is the difference between `var`, `let`, and `const` in JavaScript?
//      - **Answer**: `var` is function-scoped, while `let` and `const` are block-scoped. `const` is used for variables that are not meant to be reassigned, while `let` allows reassignment but is still block-scoped.

// ### 2. **Arrow Functions**
//    - **Interview Question**: What are arrow functions, and how are they different from regular functions?
//      - **Answer**: Arrow functions provide a shorter syntax for writing functions and do not have their own `this` binding, meaning they inherit `this` from their surrounding context.

// ### 3. **Template Literals**
//    - **Interview Question**: How do template literals differ from traditional string concatenation?
//      - **Answer**: Template literals use backticks (`` ` ``) and allow for embedded expressions using `${}`. They support multi-line strings and are more readable than traditional string concatenation with `+`.

// ### 4. **Destructuring Assignment**
//    - **Interview Question**: How does destructuring work in ES6?
//      - **Answer**: Destructuring allows unpacking values from arrays or objects into distinct variables in a concise way.
//      ```javascript
//      const [a, b] = [1, 2];  // Array destructuring
//      const {name, age} = {name: "John", age: 25};  // Object destructuring
//      ```

// ### 5. **Default Parameters**
//    - **Interview Question**: How are default parameters implemented in ES6?
//      - **Answer**: Default parameters allow function parameters to have default values if no argument is passed.
//      ```javascript
//      function greet(name = "Guest") {
//        console.log(`Hello, ${name}`);
//      }
//      ```

// ### 6. **Rest and Spread Operators**
//    - **Interview Question**: What is the difference between the rest and spread operators?
//      - **Answer**: The rest operator (`...`) is used to collect multiple arguments into an array, while the spread operator expands an array or object into individual elements or properties.
//      ```javascript
//      function sum(...numbers) { return numbers.reduce((a, b) => a + b); }  // Rest
//      const arr = [1, 2, 3]; const newArr = [...arr, 4, 5];  // Spread
//      ```

// ### 7. **Promises**
//    - **Interview Question**: What are Promises in ES6, and how do they help with asynchronous code?
//      - **Answer**: Promises represent a value that may be available now, or in the future, or never. They provide `.then()` and `.catch()` methods to handle asynchronous operations.
//      ```javascript
//      let promise = new Promise((resolve, reject) => {
//        setTimeout(() => resolve("Success!"), 1000);
//      });
//      promise.then(value => console.log(value));
//      ```

// ### 8. **Classes**
//    - **Interview Question**: How do classes in ES6 differ from traditional function-based inheritance?
//      - **Answer**: ES6 introduced `class` syntax for creating objects, which is syntactic sugar over JavaScript's prototype-based inheritance. It is more intuitive and easier to use.
//      ```javascript
//      class Person {
//        constructor(name) {
//          this.name = name;
//        }
//        greet() {
//          console.log(`Hello, ${this.name}`);
//        }
//      }
//      ```

// ### 9. **Modules**
//    - **Interview Question**: How do ES6 modules work?
//      - **Answer**: ES6 modules allow you to import and export code between different files. The `import` and `export` keywords facilitate this.
//      ```javascript
//      // In module.js
//      export const PI = 3.14;
     
//      // In main.js
//      import { PI } from './module.js';
//      ```

// ### 10. **Map, Set, WeakMap, WeakSet**
//    - **Interview Question**: What are the differences between Map, Set, WeakMap, and WeakSet in ES6?
//      - **Answer**: `Map` and `Set` are new collection types in ES6. `Map` allows key-value pairs, while `Set` stores unique values. `WeakMap` and `WeakSet` allow garbage collection of unused references.
//      ```javascript
//      let map = new Map();
//      map.set('key', 'value');
     
//      let set = new Set([1, 2, 3, 3]); // set = {1, 2, 3}
//      ```

// Being familiar with these features is important for JavaScript interviews as they highlight modern syntax and best practices introduced in ES6.