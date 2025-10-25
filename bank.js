class BankAccount {
  constructor(number, name, surname, code, balance, bank = "Mono") {
    this.number = number;
    this.name = name;
    this.surname = surname;
    this.code = code;
    this.balance = balance;
    this.bank = bank;
  }
}

let card1 = new BankAccount(436674457, "Rex", "Shepherd", 1234, 1000);
let card2 = new BankAccount(567856786, "Joan", "Joanson", 4321, 1000, "Mono");
// let card1 = {
//   number: 436674457,
//   name: "John",
//   surname: "Johnson",
//   code: 1234,
//   balance: 1000,
//   bank: "Mono",
// };

// let card2 = {
//   number: 567856786,
//   name: "Joan",
//   surname: "Joanson",
//   code: 4321,
//   balance: 100,
//   bank: "Mono",
// };

const bank = {
  name: "Mono",
  clients: [card1, card2],
};

let atm1 = {
  number: "098",
  showAccount: function (card) {
    if (this.checkAccount(card)) {
      alert(card.balance);
    } else {
      alert("Error");
    }
  },
  checkAccount: function (card) {
    const code = +prompt("Input code");
    // if (code === card.code) {
    //   return true;
    // } else {
    //   return false;   // }

    return code === card.code ? true : false;
  },
};

atm1.showAccount(card1);
