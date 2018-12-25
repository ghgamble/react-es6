###Let and Const

#Let is new Var
Use for variable values,

#Const
Constant values, never change, const will never receive a new value



###Arrow Functions

#ES5
function myFnc() {
      ...
}

#ES6
const myFnc = () => {
      ...
}
No more issues with THIS keyword
THIS will always keep it's context, and not change/throw errors



##Exports and Imports

Inside of a JS file, we can import content from another file, so that the files know their dependencies

person.js
const person = {
      name: 'Grace'
}

export default person

utility.js
export const clean = () => { ... }

app.js
Default export
Imports default and ONLY export of the file Name in the receiving file is up to you
import person from './person.js'
import prs from './person.js'

Named export
Import from two different constants, curly braces to only certain things from a file
Have to use same name as in file you're importing it from
import { baseData } from './utility.js'
import { clean } from './utility.js'
import { smth as Smth } from './utility.js'
import * as bundled from './utility.js'



###Understanding Classes
class Person {
      name = 'Grace'
      call = () => { ... }
}
const myPerson = new Person()
myPerson.call()
console.log(myPerson.name)

class Person extends Master -> Inheritance
