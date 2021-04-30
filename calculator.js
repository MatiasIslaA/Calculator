let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");
let display = document.querySelector(".display");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let changeBackground = document.querySelector(".change");
let html = document.querySelector("html");
let randomNumber2 = Math.floor(Math.random() * 10);
let requestUrl = `https://api.unsplash.com/search/photos?page=${randomNumber2}&query=japan&client_id=ivc6xe9-xNaOJqkN_UfGNrX1sDIqLfHATK74LxFvWW0`;

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
      console.log(firstNumber);
      console.log(operator);
      console.log(secondNumber);
      display.innerHTML = secondNumber;
    }
  });
});

operators.forEach((ope) => {
  ope.addEventListener("click", (e) => {
    if (operator != "" && secondNumber != "") {
      if (operator == "+") {
        firstNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
        display.innerHTML = firstNumber;
        secondNumber = "";
        operator = e.target.innerText;
      } else if (operator == "-") {
        ola = "-";
        firstNumber = parseFloat(firstNumber) - parseFloat(secondNumber);
        display.innerHTML = firstNumber;
        secondNumber = "";
        operator = e.target.innerText;
      } else if (operator == "/") {
        firstNumber = parseFloat(firstNumber) / parseFloat(secondNumber);
        display.innerHTML = firstNumber;
        secondNumber = "";
        operator = e.target.innerText;
      } else if (operator == "*") {
        firstNumber = parseFloat(firstNumber) * parseFloat(secondNumber);
        display.innerHTML = firstNumber;
        secondNumber = "";
        operator = e.target.innerText;
      }
    } else {
      operator = e.target.innerText;
      console.log(operator);
    }
  });
});

equal.addEventListener("click", () => {
  if (operator == "+") {
    let result = parseFloat(firstNumber) + parseFloat(secondNumber);
    display.innerHTML = result;
    firstNumber = result;
    secondNumber = "";
    operator = "";
  } else if (operator == "-") {
    let result = parseFloat(firstNumber) - parseFloat(secondNumber);
    display.innerHTML = result;
    firstNumber = result;
    secondNumber = "";
    operator = "";
  } else if (operator == "*") {
    let result = parseFloat(firstNumber) * parseFloat(secondNumber);
    display.innerHTML = result;
    firstNumber = result;
    secondNumber = "";
    operator = "";
  } else if (operator == "/") {
    let result = parseFloat(firstNumber) / parseFloat(secondNumber);
    display.innerHTML = result;
    firstNumber = result;
    secondNumber = "";
    operator = "";
  }
});

clear.addEventListener("click", () => {
  display.innerHTML = 0;
  firstNumber = "";
  secondNumber = "";
  operator = "";
});
async function getNewImage() {
  let randomNumber = Math.floor(Math.random() * 10);
  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      let allImages = data.results[randomNumber];
      return allImages.urls.regular;
    });
}
let randomImage;
changeBackground.addEventListener("click", async () => {
  randomImage = await getNewImage();
  html.style["background-image"] = `url(${randomImage})`;
});
