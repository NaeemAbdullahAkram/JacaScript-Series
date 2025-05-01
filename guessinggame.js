const secretNumber = Math.floor(Math.random() * 10) + 1;
let guess = prompt("Guess a number between 1 and 10:");

if (parseInt(guess) === secretNumber) {
  alert("🎉 Correct! You guessed the number.");
} else {
  alert(`❌ Wrong! The number was ${secretNumber}.`);
}
