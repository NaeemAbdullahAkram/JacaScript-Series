function calculateMin(...numbers) {
    let minimum = numbers[0];

    if(numbers.length == 0){
        return undefined;
    }

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i];
        }
    }

    return minimum;
}
console.log(calculateMin(4, 8, 1, 3));



function calculateMax(...numbers){
    let max = numbers[0];

    if(numbers.length == 0){
        return undefined;
    }
    
    for(var i=0; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }

    return max;
}

console.log(calculateMax(4,6,5,3,2));