let student = {
  name: "Nicol",
  age: 15,
  marks: [11, 11, 12],
};

console.log(student.marks);

let chevy = {
  make: "Chevrolet",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  mileage: 1021,
  needsWashing: true,
};

//chevy.needsWashing = true; // нова властивість- потребує миття!
console.log(chevy);

for (let i = 0; i < student.marks.length; i++) {
    console.log(student.marks[i]);
    
}