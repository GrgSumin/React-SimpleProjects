//this keyword which is used in a function ,refers to the object
//we can detmine 'this' keyword by (implict,explicit,new,default)binding
// function sayMyName(name) {
//   console.log(`my name is ${name}`);
// }
// sayMyName("john");

const person = {
  name: "john",
  sayMyName: function () {
    console.log(`My name is ${this.name}`); //implict binding-it states when a function is invoked with dot notation objext to the left of the dot is what this keywprd is referencing
  },
};
// person.sayMyName();
globalThis.name = "Batman"; //default binding - this keyword will reply on global scope
function sayMyName() {
  console.log(`My name is ${this.name}`); //explicit binding - second most important binding
}
sayMyName.call(person);

function person2(name) {
  this.name = name; // new binding -- most important binding
}
const p1 = new person2("math");
const p2 = new person2("maths");
console.log(p1.name);

sayMyName();
