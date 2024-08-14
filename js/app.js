const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

// add digit to calculator display

addDigit(digit) {
    console.log(digit);

// Check if number already has a dot  

if (digit === "." && this.currentOperationText.innerText.includes(".")) {
    return;
}

this.currentOperation = digit;
this.updateScreen();

}







}