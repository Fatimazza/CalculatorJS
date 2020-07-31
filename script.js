let prevNumber = "";
let currentNumber = "";
let calculatorOperator = "";

const inputNumber = (number) => {
  //fix conflict
  currentNumber += number;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};
