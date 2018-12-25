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
class Human {
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
person.printGender();
