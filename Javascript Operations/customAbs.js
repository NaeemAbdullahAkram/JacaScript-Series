function customAbs(value) {
    if (typeof value === 'string') {
      const parsedValue = parseFloat(value);
      if (!isNaN(parsedValue)) {
        return Math.abs(parsedValue);
      }
    } else if (typeof value === 'number') {
      return Math.abs(value);
    }
    return NaN;
  }
  
  console.log(customAbs("-1")); 
  console.log(customAbs(-2)); 
  console.log(customAbs(null)); 
  console.log(customAbs("")); 
  console.log(customAbs([9])); 
  console.log(customAbs([]));
  console.log(customAbs([5, 9]));
  console.log(customAbs({})); 
  console.log(customAbs("Daoud Hussain")); 
  console.log(customAbs());


// Activity 02
  function customFloor(value) {
    if (typeof value === 'number') {
      return Math.floor(value);
    }
    return NaN;
  }
  
  console.log(customFloor(-1.09)); 
  console.log(customFloor(-5));
  console.log(customFloor(-0.54)); 
  console.log(customFloor(-0)); 
  console.log(customFloor(0)); 
  console.log(customFloor(0.7)); 
  console.log(customFloor(3)); 
  console.log(customFloor(1.006)); 

// Ativity 03
function customCeil(value) {
    if (typeof value === 'number') {
      return Math.ceil(value);
    }
    return NaN;
  }
  
  console.log(customCeil(-1.09)); 
  console.log(customCeil(-5)); 
  console.log(customCeil(-0.54)); 
  console.log(customCeil(-0)); 
  console.log(customCeil(0)); 
  console.log(customCeil(0.7)); 
  console.log(customCeil(3));
  console.log(customCeil(1.006)); 