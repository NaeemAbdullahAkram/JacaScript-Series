function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i] === undefined ){
            continue;
        }
      sum += arguments[i];
    }
    return sum;
  }
  
//   const result = add(1, 2, 3,undefined, 4, 5);
//   console.log(result); // Output: 15
  

  function subtract(...param){
    let result = 0;
    for(var i = 0; i < param.length; i++){
        if(param[i] === undefined ){
            continue;
        }
        result -= param[i];
    }

    return result;

  }

//   console.log(subtract(1, 5,undefined, 6,2, 8));
function multiply(...param){
    let product = 1;
    for (var i = 0; i < param.length; i++){
        if(param[i] === undefined){
            continue;
        }
        product *= param[i];
    }
    return product;
}

// let result = multiply(1, 6, 13, undefined, 14);
// console.log(result);

function divide(...param){
    let product = 1;
    for (var i = 0; i < param.length; i++){
        if(param[i] === undefined){
            continue;
        }
        product /= param[i];
    }
    return product;
}

let result = divide(300, 15, 2, undefined, 5);
console.log(result);