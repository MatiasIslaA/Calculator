let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");
let display = document.querySelector(".screen");
let equal = document.querySelector(".equal");
let firstNumber = "";
let secondNumber = "";
let operator = "";

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (operator == "") {
      firstNumber += e.target.innerText;
      console.log(firstNumber);
      display.innerHTML = firstNumber;
    } else {
      secondNumber += e.target.innerText;
      console.log(secondNumber);
      display.innerHTML = secondNumber;
    }
  });
});

operators.forEach((ope) => {
  ope.addEventListener("click", (e) => {
    if (operator != "" && secondNumber != "") {
      if (operator == "+") {
        firstNumber = parseInt(firstNumber) + parseInt(secondNumber);
        display.innerHTML = firstNumber;
        secondNumber = "";
      } else if (operator == "-") {
        firstNumber = parseInt(firstNumber) - parseInt(secondNumber);
        display.innerHTML = firstNumber;
        secondNumber = "";
      } else if (operator == "/") {
        firstNumber = parseInt(firstNumber) / parseInt(secondNumber);
        display.innerHTML = firstNumber;
        secondNumber = "";
      } else if (operator == "*") {
        firstNumber = parseInt(firstNumber) * parseInt(secondNumber);
        display.innerHTML = firstNumber;
        secondNumber = "";
      }
    } else {
      operator = e.target.innerText;
      console.log(operator);
    }
  });
});

equal.addEventListener("click", (e) => {
  if (operator == "+") {
    display.innerHTML = parseInt(firstNumber) + parseInt(secondNumber);
  }
});
