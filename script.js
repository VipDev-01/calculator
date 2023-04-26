const buttons = document.querySelectorAll('button');
buttons.forEach(button=> button.addEventListener('click', handler));

const display = document.querySelector('.display');
display.innerText = '';

let firstNumber;
let secondNumber;
let lastResult;
let operator;

const add = (a,b) => a + b;
const substract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

function handler() {

    if (this.dataset.type == 'number' && lastResult != undefined) {
        firstNumber = lastResult;
        secondN(this.innerText);
    }

    if (this.dataset.type == 'number' && lastResult == undefined) {
        if (operator == undefined) {firstN(this.innerText)} else {secondN(this.innerText)};
    } 
    
    if (this.dataset.type == 'operator') {operatorN(this.innerText)};

    if (this.innerText == '=') {operate()}

    if (this.innerText == 'AC') {clear()}

}

function firstN(value) {
    firstNumber == undefined ? firstNumber = value : firstNumber += value;
    firstNumber = parseInt(firstNumber);
    console.log(firstNumber);
    display.innerText = firstNumber;
}

function secondN(value) {
    secondNumber == undefined ? secondNumber = value : secondNumber += value;
    secondNumber = parseInt(secondNumber);
    console.log(secondNumber);
    display.innerText = secondNumber;
}

function operatorN(value) {
    if (firstNumber != undefined && secondNumber != undefined) operate();
    operator = value;
    display.innerText += operator;
}

function operate() {
    switch (operator) {
        case '+':
            lastResult = add(firstNumber,secondNumber)
            break;
        case '-':
            lastResult = substract(firstNumber,secondNumber)
            break;
        case '*':
            lastResult = multiply(firstNumber,secondNumber)
            break;
        case '/':
            lastResult = divide(firstNumber,secondNumber)
            break;
    }
    display.innerText = lastResult;
    reset();
    console.log('result: ' + lastResult)

}

function reset() {
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
}

function clear() {
    reset()
    lastResult = undefined;
    display.innerText = '';
}