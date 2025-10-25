let medCard = { ilness1: "Inf", ilness2: "Covid" };

let student = {
  name: "Nicol",
  age: 15,
  marks: [11, 11, 12],
  med: medCard,
  toString: function () {
    return `Name: ${this.name} age: ${this.age} marks: ${this.marks}`;
  },
};

console.log(student.med.ilness2);

//alert(student);


let chevy = {
  make: "Chevrolet",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  mileage: 1021,
  needsWashing: true,
  toString: function () {
    return `make: ${this.make} year: ${this.year} color: ${this.color}`;
  },
};

//chevy.needsWashing = true; // нова властивість- потребує миття!
console.log(chevy);
//alert(chevy);
// for (let i = 0; i < student.marks.length; i++) {
//     console.log(student.marks[i]);

// }
