// const arroww = () => {
//   console.log("arroww");
//   console.log(this);
// };
// arroww();
//----------------------------------------------------
//default parameter
// const multiply = (a, b=1) => {
//   return a * b;
// };
// console.log(multiply(3));
//----------------------------------------------------
// value vs reference

// const hello = (a) => {
//   console.log(a);

//   a = "inside function";

//   console.log(a);
// };

// const argument = {
//   username: "hesam",
//   id: 5,
// };
// hello(argument);

// console.log(argument);
//----------------------------------------------------
//firs - class function and higher order functions
// function hello() {
//   console.log("hello world");
// }
// ||
// let hello = function () {
//   console.log("hello world");
// };
// ||
// const hello = function () {
//   console.log("hello world");
// };

// hello();

// function baz() {
//   console.log("aaa");
// }

// function foo(bar) {
//   bar();
// }
// foo(baz);
//HOF high order function

// const foo = () => {
//   return () => {
//     console.log("higher Order Function");
//   };
// };

// const bar = foo();
// bar();
//----------------------------------------------------
// callBacks

// const callBack = () => {
//     console.log("call back");
//   };

//   const myFunction = (cb) => {
//     cb();
//   };

//   myFunction(callBack);
//----------------------------------------------------
//Returning  functions

//   const foo = () => {
//     return (name) => {
//       console.log(`wellcome ${name}`);
//     };
//   };
//   const bar = foo();

//   bar('hesam')
//----------------------------------------------------
//call/apply/bind
//  const user = {
//   firstName: "hesam",
//   lastName: "behnami",
//   getFullName: function (country) {
//     return `${this.firstName} ${this.lastName} ${country} `;
//   },
// };

// const secondUser = {
//   firstName: "ali",
//   lastName: "Behnia",
// };

// //call
// // console.log(user.getFullName.call(secondUser,"iran"));
// // apply
// // console.log(user.getFullName.apply(secondUser,["tehran"]));
// //bind
// const bind = user.getFullName.bind(secondUser,'iran')
// console.log(bind())
//----------------------------------------------------
//IIFE
//  (function () {
//   console.log('hello worrld')
// })()
//----------------------------------------------------
//closures
// function counter() {
//   let count = 0;

//   function secend() {
//     console.log(++count);
//   }
//   return secend;
// }
// var add = counter();
// add();
// add();
// add();
//2 way
// function counter2() {
//   let counter = 1;

//   return function () {
//     console.log(counter++);
//   };
// }
// const add2 = counter2();
// add2();
// add2();
// add2();
//----------------------------------------------------
//array function
// let num = [1, 5, 3, 2, 4];
// let num = [1, 2, 3, 4, 5];

//sort
// num.sort()
// console.log(num)

//fill
// num.fill(1,false,false)
// console.log(num)

//filter
//const array = num.filter((item) => item >= 3);
// console.log(array)

// const filter2 = (item)=> {
//   return item >= 220;
// };

// const array = num.filter(filter2);
// console.log(array);

//map

// const ddd = num.map((item) => item +2 );
// console.log(ddd);

//reverse

// const ddd = num.reverse((item) => item);
// console.log(ddd);
// //or
// console.log(num.reverse())

//slice
// console.log(num.slice(1,3))
// console.log(num.slice(2))
//----------------------------------------------------
//array destructuring
// let numbers = [1, 2, 3, 4];

//real exap
// const getData = () => {
//     return [1, 2, 3];
//   };

//   const [first, secend, third] = getData();

//   console.log(first,secend);
//----------------------------------------------------
//object destructuring
// const getData = () => {
//   return {
//     userName: "hesam",
//     email: "hesam_titan_666@yahoo.com",
//   };
// };
// const { userName, email } = getData();
// console.log(userName);
// console.log(email);
//----------------------------------------------------
//spread operator
//  const num = [1, 2, 3];

// const user = {
//   userName: "hesam",
//   email: "hesam_titan_666@gmail.com",
// };

// const neWnum = [...num, 4,5 ,0, 's'];
// const neWobject = {...user , userName: 'ali' , userId: 23,email:'ali@yaho.com',};
// console.log(neWobject);
// console.log(neWnum);
//----------------------------------------------------
// const string = "This is a string";

// //indexOf
// console.log(string.indexOf(""));
// console.log(string.length)

// // lastIndexOf
// console.log(string.lastIndexOf("i"));

// //search

// console.log(string.search(''));

// //subs tring
// console.log(string.substring(0,5));

// //slice
// console.log(string.slice(-16))

// //replace
// console.log(string.replace('T','D'))

// //UpperCase
// console.log(string.toUpperCase())

// //lowercase
// console.log(string.toLowerCase())
//----------------------------------------------------
//time methods
// const time =new Date(2018,11,15,15,30,50);

// console.log(time);
//----------------------------------------------------
//prototypes
//  function person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.greeting = function () {
//       console.log(`hello ${this.firstName}`);
//     };
//   }
//   person.prototype.coumtry = "canada";
//   const person1 = new person("hesam", "behnami", 34);
//   console.log(person1);
//----------------------------------------------------
// class person
// class person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   greeting() {
//     console.log(`
//     hello ${this.firstName}`);
//   }
// }
// const person1 = new person("hesam", "behnami", 32);
// console.log(person1);
// person1.greeting();

// const person2 = new person("homan", "behnami", 32);
// console.log(person2);
// person2.greeting();
//----------------------------------------------------
//setters and getters
class person {
  static count = 0;
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.count = ++person.count;
  }
  static methods(person1) {
    console.log(`wellcom ${person1.firstName}`);
  }

  set lang(value) {
    this.language = value;
  }
  get lang() {
    //  return this.age;
    return this.language;
  }

  greeting() {
    console.log(`Hello ${this.firstName}`);
  }
}
class student extends person {
  constructor(firstName, lastName, field, avg) {
    super(firstName, lastName);
    this.field = field;
    this.avg = avg;
  }
}

const person1 = new person("Hesam", "behnami", 10);
const person2 = new person("Hesam", "behnami", 10);
const student1 = new student("ali", "godarzi", 22, "asw", 15);
const student2 = new student("ali", "godarzi", 22, "asw", 15);
const student3 = new student("ali", "godarzi", 22, "asw", 15);
console.log(person.count);
console.log(student.count);
console.log(student1);
person1.greeting();
student1.greeting();
person.methods(person1);
student.methods(student1);
