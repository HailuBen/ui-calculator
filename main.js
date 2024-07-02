function setUpEvents() {

    // Variables
    let btnValue;
    let clicked = false;
    let currentNumber, previousNumber;
    let numberArr = [];

    // DISPLAY TEXT/CHARACTERS/NUMBERS
    const calcDisplay = document.querySelector('.display-text');

    // EVENT LISTENER TO ACCEPT AND DISPLAY BUTTON PRESSES
    document.querySelectorAll('button').forEach(ele => ele.addEventListener('click', function () {
        clicked = true;
        btnValue = this.value;

        if (btnValue !== 'delete' && btnValue !== 'clear') {
            switch (btnValue){  //switch statement to add symbols for multiply (x) & divide (÷)
                case '*':
                    calcDisplay.innerHTML += 'x'
                    break;
                case '/':
                    calcDisplay.innerHTML += '÷'
                    break;
                default:
                    calcDisplay.innerHTML += btnValue;  //displays button value on screen
            }
        }
        if (btnValue == 'clear') {
            clearDisplay();
        }
        else if (btnValue == 'delete') {
            deleteSpace();
        }
        getNumber();
        clicked = false;
    }));


    // FUNCTION TO GET NUMBER ENTERED INTO DISPLAY & OPERATOR
    function getNumber() {
        if (btnValue !== '=' && btnValue !== '/' && btnValue !== '*' && btnValue !== '+' && btnValue !== '-' && btnValue !== 'clear' && btnValue !== 'delete') {
            currentNumber = parseFloat(calcDisplay.innerHTML);
            console.log(typeof (currentNumber) + ": " + currentNumber);
        }

        if (btnValue == '/' || btnValue == '*' || btnValue == '-' || btnValue == '+' ){
            if (currentNumber !== 0 && currentNumber !== undefined && currentNumber !== null &&  currentNumber!== '' ){
                //place currentNumber in a variable, update currentNumber value to 0
                previousNumber = currentNumber;
                currentNumber = 0;
            }

            
        }
    }

    // WHEN AN OPERATION IS CLICKED, ADD THE CURRENT DISPLAY NUMBER TO ARRAY FOR OPERATION
        // ADD 1ST NUMBER TO ARRAY AFTER AN OPERATION IS PRESSED TO STORE FOR NEXT NUMBER

    function operate() {
        if (btnValue == '/'){
            
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
        calcDisplay.innerHTML = str;    //??????????WHY???????????? this works
        console.log(str);


        //update array -1
    }




}
window.onload = function () {
    setUpEvents();
};