// -- example 1 --
const person = {
  firstName: "John",
  lastName: "Konor",
  specialty: "юрист-консультант"
};

function fullName(param1, param2) {
  console.log( this[param1] + " " + this[param2] );
}

// func.call(контекст, аргумент1, аргумент2, ...)
fullName.call(person, 'firstName', 'lastName') // John Konor
fullName.call(person, 'firstName', 'specialty') // John юрист-консультант

// // -- example 2 --
const person = {
  firstName:"John",
  lastName: "Konor",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const user = {
  firstName:"Max",
  lastName: "White",
}

console.log(person.fullName.call(user));  // "Max White"
