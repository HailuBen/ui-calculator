function setUpEvents() {

    // Global Variables
    let btnValue, operator;
    let currentNumber, previousNumber, answer, roundedAnswer;
    let operatorCounter = 0;
    let decimalCounter = 0;

    // Variable to get characters onto calculator screen
    const calcDisplay = document.querySelector('.display-text');
    // Variable to display an equals sign for calculations
    const answerBox = document.querySelector('.answer-box');
    // Variable to disable decimal button
    const decimalBtn = document.getElementById('decimal');


    // Event listener for button presses
    document.querySelectorAll('button').forEach(ele => ele.addEventListener('click', function () {
        console.log(calcDisplay.innerHTML.length);

        if (isNaN(btnValue) && btnValue !== '.') {
            calcDisplay.innerHTML = '';
        }

        btnValue = this.value;

        switch (btnValue) {
            case 'clear':
                clearDisplay();
                break;
            case 'delete':
                deleteSpace();
                break;
            case '/':
                answerBox.innerHTML = '';
                decimalCounter = 0;
                decimalBtn.disabled = false;
                operator = '/';
                operatorCounter++;
                console.log("Operator " + operatorCounter + ": " + operator);
                if (operatorCounter <= 1) { //if this counter is greater than 1, it means multiple operations have been pressed consecutively and it will only calculate using the most recent operator selection.
                    updateNumber();
                }

                calcDisplay.innerHTML = '÷'
                break;
            case '*':
                answerBox.innerHTML = '';
                decimalCounter = 0;
                decimalBtn.disabled = false;
                operator = '*';
                operatorCounter++;
                console.log("Operator " + operatorCounter + ": " + operator);
                if (operatorCounter <= 1) {
                    updateNumber();
                }

                calcDisplay.innerHTML = 'x'
                break;
            case '+':
                answerBox.innerHTML = '';
                decimalCounter = 0;
                decimalBtn.disabled = false;
                operator = '+';
                operatorCounter++;
                console.log("Operator " + operatorCounter + ": " + operator);
                if (operatorCounter <= 1) {
                    updateNumber();
                }

                calcDisplay.innerHTML = '+'
                break;
            case '-':
                answerBox.innerHTML = '';
                decimalCounter = 0;
                decimalBtn.disabled = false;
                operator = '-';
                operatorCounter++;
                console.log("Operator " + operatorCounter + ": " + operator);
                if (operatorCounter <= 1) {
                    updateNumber();
                }

                calcDisplay.innerHTML = '-'
                break;
            case '=':
                equals();
                decimalCounter = 0;
                decimalBtn.disabled = false;
                operatorCounter = 0; //reset
                break;
            default:
                if (!isNaN(btnValue) || btnValue == '.') { // check if btn is a number or decimal, if true, display btnValue and run getNumber
                    if (btnValue == '.') {
                        decimalCounter++;
                        if (decimalCounter > 0) {
                            decimalBtn.disabled = true;
                        }
                    }
                    let displayStr = calcDisplay.innerHTML;

                    // if display doesn't include an operator character, display number. else, clear then display number
                    if (!displayStr.includes('÷') && !displayStr.includes('x') && !displayStr.includes('-') && !displayStr.includes('+')) {
                        if (calcDisplay.innerHTML.length <= 14) {
                            calcDisplay.innerHTML += btnValue;
                            getNumber();
                        }else{
                            // do something to show user the max character limit
                        }

                    } else {
                        clearDisplay();
                        calcDisplay.innerHTML += btnValue;
                    }
                }
                console.log('Button: ' + btnValue);

        }
    }))


    function getNumber() {
        currentNumber = parseFloat(calcDisplay.innerHTML);
        console.log('Current Number: ' + currentNumber);
    }
    function updateNumber() {
        previousNumber = parseFloat(currentNumber);
        currentNumber = 0;
    }

    // Function to execute operation & send answer to calc display screen 
    function equals() {
        switch (operator) {
            case '/':
                divide();
                getNumber();
                break;
            case '*':
                multiply();
                getNumber();
                break;
            case '+':
                add();
                getNumber();
                break;
            case '-':
                subtract();
                getNumber();
                break;
        }
    }

    // Operation Functions
    function divide() {
        answer = (previousNumber / currentNumber);
        console.log("prev: " + previousNumber + "\n current: " + currentNumber);
        answerBox.innerHTML = '=';
        calcDisplay.innerHTML = answer;
    }
    function multiply() {
        answer = (previousNumber * currentNumber);
        console.log("prev: " + previousNumber + "\n current: " + currentNumber);
        answerBox.innerHTML = '=';
        calcDisplay.innerHTML = answer;
    }
    function subtract() {
        answer = (previousNumber - currentNumber);
        console.log("prev: " + previousNumber + "\n current: " + currentNumber);
        answerBox.innerHTML = '=';
        calcDisplay.innerHTML = answer;
    }
    function add() {
        answer = (previousNumber + currentNumber);
        console.log("prev: " + previousNumber + "\n current: " + currentNumber);
        answerBox.innerHTML = '=';
        if (answer.toString().length >= 13) {
            roundedAnswer = Math.round((answer + Number.EPSILON) * 100) / 100;
            calcDisplay.innerHTML = roundedAnswer;
        } else {
            calcDisplay.innerHTML = answer;
        }
    }


    // Clear calc screen 
    function clearDisplay() {
        answerBox.innerHTML = '';
        calcDisplay.innerHTML = '';
        currentNumber = 0;
        previousNumber = 0;
        decimalCounter = 0;
        decimalBtn.disabled = false;
    }
    // Delete previous space 
    function deleteSpace() {
        answerBox.innerHTML = '';
        let str = calcDisplay.innerHTML;
        str = str.slice(0, -1);
        calcDisplay.innerHTML = str;
    }


}
window.onload = function () {
    setUpEvents();
};