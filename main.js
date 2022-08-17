let firstNumber = parseInt(prompt("Enter first number"));

while (isNaN(firstNumber)) {
  alert("Not a number");
  firstNumber = parseInt(prompt("Enter first number"));
}

let functionValue = prompt("Enter function value */+-");

while (
  functionValue !== "*" &&
  functionValue !== "/" &&
  functionValue !== "+" &&
  functionValue !== "-"
) {
  alert("This operation is not exist");
  functionValue = prompt("Enter correct function value */+-");
}

let secondNumber = parseInt(prompt("Enter second number"));

while (isNaN(secondNumber)) {
  alert("Not a number");
  secondNumber = parseInt(prompt("Enter second number"));
}

let result = " ";

if (functionValue === "*") {
  result = firstNumber * secondNumber;
} else if (functionValue === "/") {
  while (secondNumber === 0) {
    alert("Incorrect");
    secondNumber = parseInt(prompt("Enter second non-zero number"));
    while (isNaN(secondNumber)) {
      alert("Not a number");
      secondNumber = parseInt(prompt("Enter second number"));
    }
  }
  result = firstNumber / secondNumber;
} else if (functionValue === "+") {
  result = firstNumber + secondNumber;
} else if (functionValue === "-") {
  result = firstNumber - secondNumber;
}

alert(`Your result is ${result}`);
