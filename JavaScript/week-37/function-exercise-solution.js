// Skapa en funktion som tar emot 2 tal.
// • Den ska returnera true om summan är
// över 10, annars false
// • Lägg till hantering för negativt tal och
// icke nummer, ge NaN svar.
// • Skriv funktionen på tre sätt:
// • traditionell funktion
// • pil funktion med {}
// • Pil funktion på samma samma rad
// utan {}

function sum1(num1, num2) {
  if (!Number(num1)) {
    return NaN
  }
  if (!Number(num2)) {
    return NaN
  }

  let sum = num1 + num2;

  if (sum < 0) {
    return NaN
  }
  if (sum > 10) {
    return true
  } else if (sum < 10) {
    return false
  }
}

// console.log(sum1(1, 3))
// console.log(sum1(2, "2"))
// console.log(sum1(2, -30))

const sum2 = (num1, num2) => {
  if (!Number(num1)) {
    return NaN
  }
  if (!Number(num2)) {
    return NaN
  }

  let sum = num1 + num2;

  if (sum < 0) {
    return NaN
  }

  return sum > 10 ? true : false;
}


const sum3 = (num1, num2) => (num1 + num2 < 0 ? NaN : Number(num1) + Number(num2));


// const sum4 = (num1, num2) => isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0 ? NaN : (num1 + num2 > 10);

console.log(sum4(20, 3))
console.log(sum4(2, "3"))
console.log(sum4("s", 3))
console.log(sum4(2, -30))

