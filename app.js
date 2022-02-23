const days = ["mon", "tue", "wed"];

const player = {
  name: "Nico",
  age: 98,
};

console.log(player);
player.name = "nicolas";
console.log(player);
player.sexy = "soon";
console.log(player);

function plus(potato, salad) {
  console.log(potato + salad);
}

plus(5, 10);
plus(1.33453, 9898);
plus(9898, 1.33453);

function minusFive(potato) {
  console.log(potato - 5);
}
minusFive(5, 10, 12, 34, 4, 5, 6, 7);

const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  powerof: function (a, b) {
    console.log(1 ** 2);
  },
};

calculator.add(5, 1);
calculator.powerof(1, 2);
