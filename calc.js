function setUpEvents() {

    // Global Variables
    let btnValue, operator;
    let currentNumber, previousNumber, answer;

    // Variable to get characters onto calculator screen
    const calcDisplay = document.querySelector('.display-text');

    // Event listener for button presses
    document.querySelectorAll('button').forEach(ele => ele.addEventListener('click', function () {
        btnValue = this.value;
        populateDisplay();

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
                if (!isNaN(btnValue)) {
                    if (operator !== undefined && operator !== '' && operator !== null) {
                        clearDisplay();
                        getNumber();
                    } else {
                        getNumber();
                    }
                }
        }
        console.log('Button: ' + btnValue);
    }))



    function getNumber() {
        currentNumber = parseFloat(calcDisplay.innerHTML);
        console.log('Current Number: ' + currentNumber);

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
                populateDisplay();
                break;
            case '*':
                multiply();
                populateDisplay();
                break;
            case '+':
                add();
                populateDisplay();
                break;
            case '-':
                subtract();
                populateDisplay();
                break;
        }
    }


    // Populate calc screen with button presses
    function populateDisplay() {
        if (btnValue !== 'clear' && btnValue !== 'delete' && btnValue !== '=') {
            calcDisplay.innerHTML += btnValue;
        }
        if (btnValue == '=' && currentNumber!== 0 && currentNumber!== undefined) {
            calcDisplay.innerHTML = answer;
            console.log("= " + answer);
        } else{
            calcDisplay.innerHTML = '';
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