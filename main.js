function setUpEvents() {
    numbers = [9, 0, 2, 1, 0];

    // Variables
    let btnValue = 0;
    let clicked = false;
    let currentNumber, y;
    let numberArr = [];

    // NUMBERS
    const btn1 = document.getElementById('1');
    const btn2 = document.getElementById('2');
    const btn3 = document.getElementById('3');
    const btn4 = document.getElementById('4');
    const btn5 = document.getElementById('5');
    const btn6 = document.getElementById('6');
    const btn7 = document.getElementById('7');
    const btn8 = document.getElementById('8');
    const btn9 = document.getElementById('9');
    const btn0 = document.getElementById('0');
    // OPERATORS
    const addBtn = document.getElementById('+');
    const subtractBtn = document.getElementById('-');
    const multiplyBtn = document.getElementById('*');
    const divideBtn = document.getElementById('/');
    // DECIMAL, EQUALS
    const decimalBtn = document.getElementById('decimal');
    const equalsBtn = document.getElementById('equals');
    // DISPLAY TEXT/CHARACTERS/NUMBERS
    const calcDisplay = document.querySelector('.display-text');
    //CLEAR & DELETE
    // const clearBtn = document.getElementById('clear');
    // const deleteBtn = document.getElementById('delete');


    // EVENT LISTENER TO ACCEPT AND DISPLAY BUTTON PRESSES
    document.querySelectorAll('button').forEach(ele => ele.addEventListener('click', function () {
        clicked = true;
        btnValue = this.value;
        if (btnValue !== 'delete' && btnValue !== 'clear') {
            calcDisplay.innerHTML += btnValue;
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

    // EVENT LISTENER TO CLEAR DISPLAY SCREEN & ARRAY
    // clearBtn.addEventListener("click", clearDisplay);
    // EVENT LISTENER TO DELETE THE PREVIOUS CHARACTER FRON DISPLAY SCREEN & ARRAY
    // deleteBtn.addEventListener("click", deleteSpace);


    // FUNCTION TO GET NUMBER ENTERED INTO DISPLAY & OPERATOR
    function getNumber() {
        if (btnValue !== '=' && btnValue !== '/' && btnValue !== '*' && btnValue !== '+' && btnValue !== '-' && btnValue !== 'clear' && btnValue !== 'delete') {
            currentNumber = parseFloat(calcDisplay.innerHTML);
            console.log(typeof (currentNumber) + ": " + currentNumber);
        }
    }

    // WHEN AN OPERATION IS CLICKED, ADD THE CURRENT DISPLAY NUMBER TO ARRAY FOR OPERATION
    function operate() {
        if (btnValue !== '=' && btnValue !== '/' && btnValue !== '*' && btnValue !== '+' && btnValue !== '-' && btnValue !== 'clear' && btnValue !== 'delete') {
            console.log(typeof (currentNumber) + "Current Number: " + currentNumber);
            // numberArr.push(currentNumber);
            // console.log(numberArr);
            // ^^^ ADDING NUMBER TO ARRAY AFTER AN OPERATION IS PRESSED
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