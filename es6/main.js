//////////////////// Let and Const
// ES5
/*var myName = 'Grace';
console.log(myName);

myName = 'Eric';
console.log(myName);*/

//ES6 - Let, can change value
/*let myName = 'Grace';
console.log(myName);

myName = 'Eric';
console.log(myName);*/

//ES6 - Const, will receive error because can't rename value
/*const myName = 'Grace';
console.log(myName);

myName = 'Eric';
console.log(myName); */


//////////////////// Arrow Functions
//ES5
/*function printMyName(name) {
      console.log(name);
}
printMyName('Grace');*/

//ES6

/*const printMyName = (name) => {
      console.log(name);
}
printMyName('Grace');*/

// One Argument
/*const printMyName = name => {
      console.log(name);
}
printMyName('Grace');*/

//No Arguments
/*const printMyName = () => {
      console.log('Grace');
}
printMyName();*/

//Multiple Arguments
/*const printMyName = (name, age) => {
      console.log('My name is ' + name + ', and I am ' + age + ' years old.');
}
printMyName('Grace', 34);*/

//Different function body
/*const multiply = (number) => {
      return number * 2;
}
console.log(multiply(2));*/
//If you only return one thing
/*const multiply = number => number * 2;
console.log(multiply(2));*/



//////////////////// Exports and Imports
// readme.md



//////////////////// Understanding Classes
/*class Human {
      constructor() {
            this.gender = 'male';
      }
      printGender() {
            console.log(this.gender);
      }
}
class Person extends Human {
      constructor() {
            // Super executes parent class
            super();
            this.name = 'Grace';
            this.gender = 'female';
      }
      printMyName() {
            console.log(this.name);
      }
}
const person = new Person();
person.printMyName();
person.printGender();*/



//////////////////// Classes, Properties and Methods
/*class Human {
      gender = 'male';
      printGender = () => {
            console.log(this.gender);
      }
}

class Person extends Human {
      name = 'Grace';
      gender = 'female';
      printMyName = () => {
            console.log(this.name);
      }
}

const person = new Person();
person.printMyName();
person.printGender();*/



//////////////////// Spread & Rest Operators
//Spread
/*const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
      name: 'Grace'
};
const newPerson = {
      ...person,
      age: 34
};
console.log(newPerson);

//Rest
const filter = (...args) => {
      return args.filter(el => el === 1);
}
console.log(filter(1, 2, 3));*/



//////////////////// Destructuring
/*const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3);*/



//////////////////// Reference and Primitive Types Refresher
// Primitive Type
/*const number = 1;
// Copies number
const num2 = number;
console.log(num2);
// Object and arrays are refence Types
const person = {
      name: 'Grace'
}
const secondPerson = person;
console.log(secondPerson);*/
// Person is stored in memory, pointer will be copied
// Copied pointer
// Leads to confusion, to avoid accidentally copying, copy object and not just pointer
// If you use a spreader, it will copy old object and add to new object



//////////////////// Refreshing Array Functions
const numbers = [1, 2, 3];
const doubleNumArray = numbers.map((num) => {
      return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);
