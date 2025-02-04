function customRound(number) {
    const isNegative = number < 0;
    
    const absoluteValue = Math.abs(number);
    
    let integerPart = Math.floor(absoluteValue);
    
    const decimalPart = absoluteValue - integerPart;
    
    if (decimalPart >= 0.5) {
      integerPart += 1;
    }
    
    if (isNegative) {
      return -integerPart;
    } else {
      return integerPart;
    }
  }
  
  console.log(customRound(4.7)); 