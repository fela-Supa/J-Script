// OBJECT - we use it to group related data

// Object definition
const person = {
  firstname: "John",
  secondname: "Doe",
  age: 24,
  fullname: function() {
    return this.firstname + " " + this.secondname;
  },

}

console.log(person)

// accessing the object
console.log(person.firstname)
console.log(person.secondname)
console.log(person.age)
console.log(person.fullname())

// updating the object
person.firstname = "Jane"
console.log(person.fullname());

// object methods
let keys = Object.keys(person)
console.log(keys)

let values = Object.values(person)
console.log(values)


const vehicle = {
  brand: "Mercedes",
  model: "E63s",
  year: 2024,
  price: 168000,
  description: function() {
    return this.brand + " " + this.model + " " + this.year + " " + this.price;
  },
}

console.log(vehicle);

// accessing the object
console.log(vehicle.brand)
console.log(vehicle.model)
console.log(vehicle.year)
console.log(vehicle.price)
console.log(vehicle.description())
