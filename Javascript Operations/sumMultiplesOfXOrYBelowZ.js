function sumMultiplesOfXOrYBelowZ(x, y, z) {
    let sum = 0;
  
    for (let i = 1; i < z; i++) {
      if (i % x === 0 || i % y === 0) {
        sum += i;
      }
    }
  
    return sum;
  }

  const x = 3;
  const y = 5;
  const z = 10;
  const result = sumMultiplesOfXOrYBelowZ(x, y, z);
  
  console.log(`The sum of all multiples of ${x} or ${y} below ${z} is ${result}`);