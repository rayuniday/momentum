const playerName = "nico";
const playerPoints = 121212;
const playerHansome = false;
const playerFat = "little bit";

// player[0] == name
// player[1] == points
// const player = ["nico", 1212, false, "little bit"];

const player = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

player.fat = false;
player.lastName = "potato";
player.points = player.points + 15;
console.log(player);
console.log(player.points);
