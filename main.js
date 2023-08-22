// const arroww = () => {
//   console.log("arroww");
//   console.log(this);
// };
// arroww();
//----------------------------------------------------
//default parameter
const multiply = (a, b=1) => {
  return a * b;
};
console.log(multiply(3));
