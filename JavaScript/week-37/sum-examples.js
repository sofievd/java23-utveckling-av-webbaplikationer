function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}

// refactor the function to use:
// filter, map and reduce.

function sumOfTripledEvensHOF(arr) {
  // const filteredArray = arr.filter(num => num % 2 == 0);
  // const tripleEvenNumber = filteredArray.map(num => num * 3);
  // const sumOfTripleEvenNumber = tripleEvenNumber.reduce((acc, curr) => {
  //   return acc + curr;
  // }, 0)

  // return sumOfTripleEvenNumber

  return arr
    .filter(num => num % 2 == 0)
    .map(num => num * 3)
    .reduce((acc, curr) => acc + curr)
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(sumOfTripledEvens(array))
console.log(sumOfTripledEvensHOF(array))