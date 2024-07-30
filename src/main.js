function setUpEvents() {

    // Variables
    let btnValue;
    let currentNumber, previousNumber, operator;
    let numberArr = [];

    // DISPLAY TEXT/CHARACTERS/NUMBERS
    const calcDisplay = document.querySelector('.display-text');


    // EVENT LISTENER TO ACCEPT AND DISPLAY BUTTON PRESSES
    document.querySelectorAll('button').forEach(ele => ele.addEventListener('click', function () {
        btnValue = this.value;
        console.log("btnValue: " + btnValue)

        switch (btnValue) {  //switch statement to append symbols for multiply (x) & divide (÷) instead of values (*) & (/)
            case '*':
                calcDisplay.innerHTML += 'x'
                break;
            case '/':
                calcDisplay.innerHTML += '÷'
                break;
            case '=':
                calcDisplay.innerHTML = ''
            default:
                calcDisplay.innerHTML += btnValue;  //displays the given button value on screen
        }

        if (btnValue == 'clear') {
            clearDisplay();
        }
        else if (btnValue == 'delete') {
            deleteSpace();
        }

        //if currentNumber hasn't been updated yet, go to getNumber. else, go to...
        // need a way to get the second number without parsing the display innerHTML since it will have the previous number as well as the operation on it at the same time as the second number. 

        //maybe something like: "if 1st number is not undefined, and an operator has been pressed, start recording number inputs (!isNaN(btnValue) until the equals sign or clear has been pressed"
        
        if (previousNumber == undefined){
            getNumber();            
        }

        if (btnValue == '/' || btnValue == '*' || btnValue == '+' || btnValue == '-') {
            updateNumber();
        }

        if (btnValue == '=' && operator !== undefined){
            operate();
        }
    }));


    // FUNCTION TO GET NUMBER ENTERED INTO DISPLAY & OPERATOR
    function getNumber() {
        if (!isNaN(btnValue)) {      //same as: (btnValue !== '=' && btnValue !== '/' && btnValue !== '*' && btnValue !== '+' && btnValue !== '-' && btnValue !== 'clear' && btnValue !== 'delete')
            currentNumber = parseFloat(calcDisplay.innerHTML);
            console.log('Current ' + typeof(currentNumber) + ': ' + currentNumber);
        } else {
            if (currentNumber == undefined && previousNumber == undefined) {
                calcDisplay.innerHTML = '';
            }
        }
    }

    function updateNumber() {
        // if operator has been pressed, update previousNumber to the currentNumber's value
        //update currentNumber to be 0
        if (currentNumber !== 0 && currentNumber !== undefined && currentNumber !== null && currentNumber !== '') {
            //place currentNumber in a variable, update currentNumber value to 0
            previousNumber = currentNumber;
            currentNumber = 0;

        }
    }

    // WHEN AN OPERATION IS CLICKED, ADD THE CURRENT DISPLAY NUMBER TO ARRAY FOR OPERATION
    // ADD 1ST NUMBER TO ARRAY AFTER AN OPERATION IS PRESSED TO STORE FOR NEXT NUMBER

    function operate() {
        console.log('Operator: ' + btnValue)
        switch (btnValue) {
            case '/':
                calcDisplay.innerHTML += (previousNumber / currentNumber)
                console.log(" / "+previousNumber / currentNumber)
                break;
            case '*':
                calcDisplay.innerHTML += (previousNumber * currentNumber)
                console.log(" * "+ previousNumber * currentNumber);
                break;
            case '+':
                calcDisplay.innerHTML += (previousNumber + currentNumber)
                console.log(" + "+previousNumber / currentNumber)
                break;
            case '-':
                calcDisplay.innerHTML += (previousNumber - currentNumber)
                console.log(" - "+previousNumber / currentNumber)
                break;
            default:
                calcDisplay.innerHTML += btnValue;  //displays the given button value on screen
        }
    }

    // CLEAR DISPLAY SCREEN & ARRAY
    function clearDisplay() {
        calcDisplay.innerHTML = "";
        numberArr = [];
    }
    // DELETE SINGLE PREVIOUS SPACE (BACKSPACE) 
    function deleteSpace() {
        let str = calcDisplay.innerHTML;
        str = str.slice(0, -1);
        calcDisplay.innerHTML = str;
        console.log(str);

        //update array -1
    }




}
window.onload = function () {
    setUpEvents();
};