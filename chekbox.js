const user = {
  firstName: "hesam",
  lastName: "behnami",
  getFullName: function (country) {
    return `${this.firstName} ${this.lastName} ${country} `;
  },
};


const secondUser = {
  firstName: "ali",
  lastName: "Behnia",
};

//call
// console.log(user.getFullName.call(secondUser,"iran"));
// apply
// console.log(user.getFullName.apply(secondUser,["tehran"]));
//bind
const bind = user.getFullName.bind(secondUser,'iran')
console.log(bind())
