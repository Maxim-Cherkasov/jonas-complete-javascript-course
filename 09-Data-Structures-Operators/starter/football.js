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

// 1

// Create one player array for each team (variables 'players1' and 'players2')

// Создайте по одному массиву игроков для каждой команды (переменные 'players1' и 'players2')

// в объекте game в массиве players присваиваем две переменные двум массивам с игроками используя деструктуризацию

const [players1, players2] = game.players;
console.log(players1, players2);

// 2

// The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

// Первый игрок в любом массиве игроков является вратарем, а остальные полевыми игроками. Для Bayern Munich (team 1) создай одну переменную ('gk') c именем вратаря, и один массив ('fieldPlayers') со всеми остальными 10 полевыми игроками.

// создаем одну переменную для вратаря и затем один массив для всех оставшихся игроков используя рест параметр

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
