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

const hello = (a) => {
  console.log(a);

  a = "inside function";

  console.log(a);
};

const argument = {
  username: "hesam",
  id: 5,
};
hello(argument);

console.log(argument);
//----------------------------------------------------