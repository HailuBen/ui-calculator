function setUpEvents(){
    numbers = [9,0,2,1,0];

    // const add = numbers.reduce((accumulator, currentValue)=>{
    //     return accumulator+currentValue;
    // },0);

    // const subtract = numbers.reduce((a, b) => {
    //     return a-b;
    // });

    // const multiply = numbers.reduce((a, b) => {
    //     return a*b;
    // });

    // const divide = numbers.reduce((a, b) => {
    //     return a/b;
    // });
    // console.log(add, subtract, multiply, divide);

    // VARIABLES
    let btnValue=0;
    let clicked = false;
    let numberArr = [];
    let counter = 0;

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
    // CLEAR
    const clearBtn = document.getElementById('clear');
    // DECIMAL, EQUALS
    const decimalBtn = document.getElementById('decimal');
    const equalsBtn = document.getElementById('equals');
    // DISPLAY
    const numberDisplay = document.querySelector('.display-text');
    // EVENT LISTENER
    document.querySelectorAll('button').forEach(ele => ele.addEventListener('click', function(){
        clicked = true;
        btnValue = this.value;
        // console.log(btnValue);
        if (counter<12 && btnValue !== 'clear'){
            numberDisplay.innerHTML+=btnValue;
            counter++;
        }
        else if (btnValue=='clear'){
            numberDisplay.innerHTML='';
            counter=0;
        }
        getEquation();
        clicked = false;
    }));

    // FUNCTIONS
    function getEquation(){
        if (btnValue!== '=' && btnValue!== '/' && btnValue!== '*' && btnValue!== '+' && btnValue!== '-'){
            numberArr.push(btnValue);
            console.log(numberArr);  
        }
        else{
            operate();
        }
    }

    function operate(){
        if (btnValue == '+'){
            add();
        }
        else if(btnValue == '-'){
            subtract();
        }
        else if(btnValue == '/'){
            divide();
        }
        else if(btnValue == '*'){
            multiply();
        }
    }

    function add() {
        numbers.reduce((accumulator, currentValue)=>{
            return accumulator+currentValue;
        },0);
    }
    function subtract() {
        numbers.reduce((a, b) => {
            return a-b;
        });
    }
    function multiply() {
        numbers.reduce((a, b) => {
            return a*b;
        });
    }
    function divide() {
        numbers.reduce((a, b) => {
            return a/b;
        });
    }

}   
window.onload = function(){
    setUpEvents();
};