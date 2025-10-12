let fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Blue",
  passengers: 2,
  mileage: 88000,
  fuel: 0,
  drive: function () {
    if (this.fuel <= 0) {
      alert("Бак пустий");
    } else {
      alert("Біп!");
    }
  },
  showFuel: function () {
    alert(`Паливо: ${this.fuel}`);
  },
  refueling: function (fuel) {
    this.fuel += fuel;
  },
};

fiat.showFuel();
fiat.drive();

fiat.refueling(10);
fiat.showFuel();
fiat.drive();
