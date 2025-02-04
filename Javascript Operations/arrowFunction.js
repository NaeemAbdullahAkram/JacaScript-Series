const profile = (name, last) => name + " " + last;

const ThisIsANumber = num => num * 45;

const retrieveAnEven = myarray => {
  let num = [];
  for (let j of myarray) {
    if (j % 2 === 0) {
      num.push(j);
    }
  }
  return num;
}
console.log("Execute Successfully")