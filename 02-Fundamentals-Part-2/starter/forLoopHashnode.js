//* Problem-solving techniques to avoid yelling at your computer.
// A guide about how to solve problems and not die trying https://blog.damiandemasi.com/problem-solving-techniques-to-avoid-yelling-at-your-computer

/*
let hashLine = "";
for (let i = 1; i <= 6 - 1; i++) {
  hashLine += "#";
}
console.log(hashLine);
*/

// the solution
// 5 iterations with 5 generations of 5 hashes with += '\n' at the end of each

let halfSquare = "";
for (let i = 1; i <= 5; i++) {
  // i <= 5 counts to 5
  for (let j = 1; j <= 6 - i; j++) {
    // j <= 6 - i counts to 5 too and subtract current step of first loop from 6 each iteration
    halfSquare += "#";
  }
  halfSquare += "\n";
}

console.log(halfSquare);
