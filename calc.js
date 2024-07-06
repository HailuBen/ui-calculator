function setUpEvents() {

    // Global Variables
    let btnValue, operator;
    let currentNumber, previousNumber, answer;

    // Variable to get characters onto calculator screen
    const calcDisplay = document.querySelector('.display-text');

    // Event listener for button presses
    document.querySelectorAll('button').forEach(ele => ele.addEventListener('click', function () {
        calcDisplay.innerHTML = ''; //IM GOATED
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
                console.log("Operator: "+ operator);
                updateNumber();
                calcDisplay.innerHTML = '÷'
                break;
            case '*':
                operator = '*';
                console.log("Operator: "+ operator);
                updateNumber();
                calcDisplay.innerHTML = 'x'
                break;
            case '+':
                operator = '+';
                console.log("Operator: "+ operator);
                updateNumber();
                calcDisplay.innerHTML = '+'
                break;
            case '-':
                operator = '-';
                console.log("Operator: "+ operator);
                updateNumber();
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
                console.log('Button: ' + btnValue);

        }
    }))

    function getNumber() {
        currentNumber = parseFloat(calcDisplay.innerHTML);
        console.log('Current Number: ' + currentNumber);
    }
    function updateNumber(){
        previousNumber = parseFloat(currentNumber);
        currentNumber = 0;
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

    // Operation Functions
    function divide() {
        answer = (previousNumber / currentNumber);
        console.log("prev: "+previousNumber+"\n current: "+currentNumber);
        calcDisplay.innerHTML = "= "+ answer;
    }
    function multiply() {
        answer = (previousNumber * currentNumber);
        console.log("prev: "+previousNumber+"\n current: "+currentNumber);
        calcDisplay.innerHTML = "= "+ answer;
    }
    function subtract() {
        answer = (previousNumber - currentNumber);
        console.log("prev: "+previousNumber+"\n current: "+currentNumber);
        calcDisplay.innerHTML = "= "+ answer;
    }
    function add() {
        answer = (previousNumber + currentNumber);
        console.log("prev: "+previousNumber+"\n current: "+currentNumber);
        calcDisplay.innerHTML = "= "+ answer;
    }
    function decimal() {
        //WIP
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