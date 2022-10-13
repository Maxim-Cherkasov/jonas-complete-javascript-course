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
