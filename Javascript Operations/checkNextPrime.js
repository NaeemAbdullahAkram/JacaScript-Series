function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    
    if (number % 2 === 0 || number % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= number) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  }
  
  function findNextPrime(prime) {
    let nextPrime = prime + 1;
    while (true) {
      if (isPrime(nextPrime)) {
        return nextPrime;
      }
      nextPrime++;
    }
  }
  
  const givenPrime = 13;
  const nextPrime = findNextPrime(givenPrime);
  console.log(`The prime number after ${givenPrime} is ${nextPrime}.`);