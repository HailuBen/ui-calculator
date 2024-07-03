function setUpEvents() {

    // Global Variables
    let btnValue, operator;
    let currentNumber, previousNumber, answer;

    // Variable to get characters onto calculator screen
    const calcDisplay = document.querySelector('.display-text');

    // Event listener for button presses
    document.querySelectorAll('button').forEach(ele => ele.addEventListener('click', function () {
        btnValue = this.value;

        switch (btnValue) {
            case 'clear':
                clearDisplay();
                break;
            case 'delete':
                deleteSpace();
                break;
            case '/':
                operator = '/';
                calcDisplay.innerHTML = '÷'
                break;
            case '*':
                operator = '*';
                calcDisplay.innerHTML = 'x'
                break;
            case '+':
                operator = '+';
                calcDisplay.innerHTML = '+'
                break;
            case '-':
                operator = '-';
                calcDisplay.innerHTML = '-'
                break;
            case '.':
                // operator = '.';
                decimal();
                break;
            case '=':
                equals();
                break;
            default:

                // problem here is getNumber reads the display, so it needs to be cleared by the time the 2nd number is being entered to the screen.
                // 1. First number entered
                // 2. operator pressed, first number is cleared from screen, operator shown on screen
                // 3. second number is pressed, operator is cleared, 1st number becomes previous
                // 4. = is pressed, clear screen, display = sign, new second number is now finalized and operated on with first number

                if (!isNaN(btnValue)) { // check if btn is a number, if true, display btnValue and run getNumber
                    let displayStr = calcDisplay.innerHTML;
                    
                    // if display doesn't include an operator character, display number. else, clear then display number
                    if (!displayStr.includes('÷') && !displayStr.includes('x') && !displayStr.includes('-') && !displayStr.includes('+')) {
                        calcDisplay.innerHTML += btnValue;
                        getNumber();
                    } else {
                        clearDisplay();
                        calcDisplay.innerHTML += btnValue;
                    }
                }
        }
        console.log('Button: ' + btnValue);
    }))

    // Populate calc screen with button presses
    // function populateDisplay() {

    //     if (btnValue == 'clear' || btnValue == 'delete' || btnValue == '=') {

    //         if (currentNumber !== 0 && currentNumber !== undefined) {
    //             calcDisplay.innerHTML = answer;
    //             console.log("= " + answer);
    //         }

    //         calcDisplay.innerHTML = '';
    //     }
    // }

    function getNumber() {
        currentNumber = parseFloat(calcDisplay.innerHTML);
        console.log('Current Number: ' + currentNumber);

    }

    function updateNumber() {
        // if currentNumber already has a value and an operation or decimal button has been pressed, give previousNumber the currentNumber's value and change currentNumber to = 0

        if (currentNumber !== undefined && currentNumber !== '' && operator !== undefined && operator !== '') {
            previousNumber = currentNumber;
            currentNumber = 0;
            console.log("Previous: " + previousNumber)
        }
    }

    // Operation Functions
    function divide() {
        answer = (previousNumber / currentNumber);
        calcDisplay.innerHTML = answer
    }
    function multiply() {
        answer = (previousNumber * currentNumber);
    }
    function subtract() {
        answer = (previousNumber - currentNumber);
    }
    function add() {
        answer = (previousNumber + currentNumber);
    }
    function decimal() {
        //WIP
    }

    // Function to execute operation & send answer to calc display screen 
    function equals() {
        switch (operator) {
            case '/':
                divide();
                break;
            case '*':
                multiply();
                break;
            case '+':
                add();
                break;
            case '-':
                subtract();
                break;
        }
    }

    // Clear calc screen 
    function clearDisplay() {
        calcDisplay.innerHTML = "";
        currentNumber = 0;
        previousNumber = 0;
    }
    // Delete previous space 
    function deleteSpace() {
        let str = calcDisplay.innerHTML;
        str = str.slice(0, -1);
        calcDisplay.innerHTML = str;
    }


}
window.onload = function () {
    setUpEvents();
};