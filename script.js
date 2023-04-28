const buttons = document.querySelectorAll('button');
buttons.forEach(button=> button.addEventListener('click', handler));

const display = document.querySelector('.bottom');
const topDisplay = document.querySelector('.top');
display.innerText = '';
display.topDisplay = '';

let firstNumber;
let secondNumber;
let lastResult;
let operator;

const add = (a,b) => Math.round((a + b) * 100) / 100;
const substract = (a,b) => Math.round((a - b) * 100) / 100;
const multiply = (a,b) => Math.round((a * b) * 100) / 100;
const divide = (a,b) => Math.round((a / b) * 100) / 100;

function handler() {

    if (this.dataset.type == 'period') {
        if (firstNumber == undefined) return;
        if (operator == undefined) {
            firstNumber.toString().includes('.') ? '' : firstN(this.innerText);
        } else secondNumber.toString().includes('.') ? '' : secondN(this.innerText);
    }

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
    display.innerText = firstNumber;
}

function secondN(value) {
    if (!operator) return;
    secondNumber == undefined ? secondNumber = value : secondNumber += value;
    display.innerText = secondNumber;
}

function operatorN(value) {
    if (!lastResult && !firstNumber) return;
    if (firstNumber != undefined && secondNumber != undefined) operate();
    operator = value;
    display.innerText += operator;
}

function operate() {
    if(!firstNumber || !secondNumber) return;
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
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
    topDisplay.innerText = `${firstNumber} ${operator} ${secondNumber}`
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
    topDisplay.innerText = '';
}