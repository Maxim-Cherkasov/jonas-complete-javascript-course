'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*  
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

//* Coding challenge 2

// 1.

/*
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

// Сделайте циклы по массиву game.scored и выведите имя каждого игрока в консоль вместе с номером гола.

for (const item of game.scored.entries()) {
  console.log(`Goal ${item[0] + 1}: ${item[1]}`); // 1st item is index, 2nd is item
}

// or

// since each item is now an array, we can destructure it implementing destructuring assignment [i, el]
for (const [i, el] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}
*/

// 2.

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

// My solution
/*
// we get an array of game.odds values
const oddsValues = Object.values(game.odds);

const oddsAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(oddsAverage(oddsValues));

// Jonas solution

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
*/

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

//* Coding challenge 1

/*
// 1

// Create one player array for each team (variables 'players1' and 'players2')

// Создайте по одному массиву игроков для каждой команды (переменные 'players1' и 'players2')

// в объекте game в массиве players присваиваем две переменные двум массивам с игроками используя деструктуризацию

const [players1, players2] = game.players;
console.log(players1, players2);

// 2

// The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

// Первый игрок в любом массиве игроков является вратарем, а остальные полевыми игроками. Для Bayern Munich (team 1) создай одну переменную ('gk') c именем вратаря, и один массив ('fieldPlayers') со всеми остальными 10 полевыми игроками.

// создаем одну переменную для вратаря и затем один массив для остальных игроков используя рест параметр

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.

// Create an array 'allPlayers' containing all players of both teams (22 players)

// Создать массив 'allPlayers' содержащий всех игроков с обоих команд (22 игрока)

// Используем спрэд оператор, чтобы распаковать переменные с игроками и объединить их в одном массиве

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4

// During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//5

// Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

// Основываясь на объекте game.odds, создай переменную для каждого нечетного (названную 'team1', 'draw' and 'team2')

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6

// Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

//  Напишите функцию ('printGoals'), которая получает произвольное количество имен игроков (НЕ массив) и выводит каждое из них в консоль вместе с общим количеством забитых мячей (количество переданных имен игроков).

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// здесь мы используем рест параметр в аргументе функции, он агригирует все входящие аргументы в один массив

const printGoals = function (...players) {
  // spread operator выводит имена по отдельности
  console.log(...players);
  console.log(`${players.length} goals were scored`);
};

//printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
//printGoals('Davies', 'Muller', 'Lewandowski');

// here we use spread operator
printGoals(...game.scored);

//7

// The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// Команда с меньшим нечетным числом имеет больше шансов на победу. Выведите в консоль, какая команда с большей вероятностью выиграет, БЕЗ использования оператора if/else или тернарного оператора.

team1 < team2 && console.log('Team 1 is more likely to win');
*/
