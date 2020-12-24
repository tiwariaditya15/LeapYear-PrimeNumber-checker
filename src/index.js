const input = document.querySelector("#operand");
const output = document.querySelector(".output-text");
const btn = document.querySelector(".btn");
const choice = document.querySelector(".choice");

const primeCheck = () => {
  let primeFlag = true;
  for (let i = 2; i < input.value / 2; i++) {
    if (input.value % i === 0) {
      primeFlag = false;
      break;
    }
  }
  if (primeFlag) {
    output.innerText = `${input.value} is prime Number.`;
  } else {
    output.innerText = `${input.value} isn't prime Number.`;
  }
};

const leapYearCheck = () => {
  const inputYear = input.value;
  if (inputYear % 400 === 0) {
    output.innerText = `${inputYear} is leap year.`;
  } else if (inputYear % 100 === 0) {
    output.innerText = `${inputYear} isn't leap year.`;
  } else if (inputYear % 4 === 0) {
    output.innerText = `${inputYear} is leap year.`;
  } else {
    output.innerText = `${inputYear} isn't leap year.`;
  }
};

const handleClick = () => {
  if (choice.value === "prime") {
    primeCheck();
  } else if (choice.value === "leapYear") {
    leapYearCheck();
  } else {
    output.innerText = `Choose correct option from dropdown.`;
  }
};

btn.addEventListener("click", handleClick);
