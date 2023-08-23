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

const foo = () => {
  return () => {
    console.log("higher Order Function");
  };
};

const bar = foo();
bar();
