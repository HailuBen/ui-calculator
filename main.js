function setUpEvents(){
    numbers = [9,0,2,1,0];

    // Variables
    let btnValue=0;
    let clicked = false;
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

    // DISPLAY
    const calcDisplay = document.querySelector('.display-text');

    //CLEAR 
    const clearBtn = document.getElementById('clear');
    
    // EVENT LISTENER TO DISPLAY BUTTON PRESS
    document.querySelectorAll('button').forEach(ele => ele.addEventListener('click', function(){
        clicked = true;
        btnValue = this.value;
        // console.log(btnValue);
        calcDisplay.innerHTML+=btnValue;
        getEquation();
        clicked = false;
    }));

    // EVENT LISTENER TO CLEAR DISPLAY SCREEN & ARRAY
    clearBtn.addEventListener("click", clearDisplay);

    
    // FUNCTION TO SEND NUMBER PRESSED TO ARRAY
    function getEquation(){
        if (btnValue!== '=' && btnValue!== '/' && btnValue!== '*' && btnValue!== '+' && btnValue!== '-' && btnValue!== 'clear' && btnValue!== 'delete'){
            numberArr.push(btnValue);
            console.log(numberArr);
        }
    }

    // CLEAR DISPLAY SCREEN & ARRAY
    function clearDisplay() {
        calcDisplay.innerHTML = "";
        numberArr = [];
    }

}   
window.onload = function(){
    setUpEvents();
};