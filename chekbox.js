// let text = "Visit W3Schools";
// let result = text.search('')
// console.log(result)

// let centens = "My Name Is Hesam";
// let result = centens.search(/);
// console.log(result);

// let text = "Is this all there is?";

// console.log(text.match(/Is/gi))
// let text = "\nIs th\nis it?";
// let result = text.match(/is/m);
// console.log(result);

//template literals

//prototypes

function person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.greeting = function () {
    console.log(`hello ${this.firstName}`);
  };
}
person.prototype.coumtry = "canada";
const person1 = new person("hesam", "behnami", 34);
console.log(person1);
